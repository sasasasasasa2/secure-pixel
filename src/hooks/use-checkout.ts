import { useMutation } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { useCartStore } from '../lib/cart-store';
import toast from 'react-hot-toast';

interface CheckoutData {
  customerEmail: string;
  customerPhone?: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  billingAddress?: {
    name: string;
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
}

export const useCheckout = () => {
  const { items, getTotal, clearCart } = useCartStore();

  const createPaymentIntent = useMutation({
    mutationFn: async (checkoutData: CheckoutData) => {
      const total = getTotal();
      
      if (items.length === 0) {
        throw new Error('El carrito está vacío');
      }

      const { data, error } = await supabase.functions.invoke('create-payment-intent', {
        body: {
          amount: total,
          currency: 'eur',
          cartItems: items,
          customerEmail: checkoutData.customerEmail,
          customerPhone: checkoutData.customerPhone,
          shippingAddress: checkoutData.shippingAddress,
          billingAddress: checkoutData.billingAddress || checkoutData.shippingAddress,
        }
      });

      if (error) {
        throw error;
      }

      return data.data;
    },
    onError: (error: any) => {
      console.error('Payment intent error:', error);
      toast.error(error.message || 'Error al procesar el pago');
    },
  });

  const confirmPayment = useMutation({
    mutationFn: async (paymentIntentId: string) => {
      const { data, error } = await supabase.functions.invoke('confirm-payment', {
        body: {
          paymentIntentId
        }
      });

      if (error) {
        throw error;
      }

      return data.data;
    },
    onSuccess: () => {
      clearCart();
      toast.success('¡Pago confirmado exitosamente!');
    },
    onError: (error: any) => {
      console.error('Payment confirmation error:', error);
      toast.error(error.message || 'Error al confirmar el pago');
    },
  });

  return {
    createPaymentIntent,
    confirmPayment,
  };
};
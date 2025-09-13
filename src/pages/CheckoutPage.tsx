import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise } from '../lib/stripe';
import { useCartStore } from '../lib/cart-store';
import { useCheckout } from '../hooks/use-checkout';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, ShoppingBag, CreditCard, MapPin, User, Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

interface CheckoutFormData {
  customerEmail: string;
  customerPhone: string;
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
  sameAsShipping: boolean;
}

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const { createPaymentIntent, confirmPayment } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<string>('info');
  const [paymentData, setPaymentData] = useState<any>(null);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CheckoutFormData>({
    defaultValues: {
      sameAsShipping: true,
      shippingAddress: {
        country: 'España'
      }
    }
  });
  
  const watchSameAsShipping = watch('sameAsShipping');
  const total = getTotal();
  
  const onSubmitInfo = async (data: CheckoutFormData) => {
    if (items.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }
    
    try {
      setIsProcessing(true);
      const result = await createPaymentIntent.mutateAsync({
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        shippingAddress: data.shippingAddress,
        billingAddress: data.sameAsShipping ? data.shippingAddress : data.billingAddress
      });
      
      setPaymentData({ ...result, formData: data });
      setPaymentStep('payment');
    } catch (error) {
      console.error('Payment intent error:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handlePayment = async () => {
    if (!stripe || !elements || !paymentData) return;
    
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;
    
    try {
      setIsProcessing(true);
      
      const { error, paymentIntent } = await stripe.confirmCardPayment(paymentData.clientSecret, {
        payment_method: {
          card: cardElement as any,
          billing_details: {
            name: paymentData.formData.shippingAddress.name,
            email: paymentData.formData.customerEmail,
            phone: paymentData.formData.customerPhone,
            address: {
              line1: paymentData.formData.shippingAddress.street,
              city: paymentData.formData.shippingAddress.city,
              postal_code: paymentData.formData.shippingAddress.postal_code,
              country: 'ES'
            }
          }
        }
      });
      
      if (error) {
        toast.error(error.message || 'Error al procesar el pago');
        return;
      }
      
      if (paymentIntent.status === 'succeeded') {
        await confirmPayment.mutateAsync(paymentIntent.id);
        setPaymentStep('success');
        
        // Clear cart and redirect after a delay
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Error al procesar el pago');
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-slate-300 mb-6" />
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-slate-600 mb-8">Añade algunos productos antes de proceder al checkout.</p>
            <Link 
              to="/productos" 
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  if (paymentStep === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-6xl mb-6">✓</div>
              <h1 className="text-3xl font-bold text-emerald-600 mb-4">¡Pago Exitoso!</h1>
              <p className="text-slate-600 mb-6">
                Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación en breve.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                <p className="text-emerald-800 font-semibold">
                  ID de Pedido: #{paymentData?.orderId}
                </p>
                <p className="text-emerald-700">
                  Total: €{total.toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-slate-500">
                Redirigiendo a la página principal en unos segundos...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link 
            to="/carrito" 
            className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al carrito</span>
          </Link>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
            <Lock className="h-8 w-8 text-emerald-600" />
            <span>Checkout Seguro</span>
          </h1>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mb-8">
            <div className={`flex items-center space-x-2 ${
              paymentStep === 'info' ? 'text-emerald-600' : 
              (paymentStep === 'payment' || paymentStep === 'success') ? 'text-emerald-500' : 'text-slate-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                paymentStep === 'info' ? 'bg-emerald-600 text-white' :
                (paymentStep === 'payment' || paymentStep === 'success') ? 'bg-emerald-500 text-white' :
                'bg-slate-300 text-slate-600'
              }`}>
                1
              </div>
              <span className="font-medium">Información</span>
            </div>
            
            <div className="flex-1 h-1 bg-slate-300 rounded">
              <div className={`h-full rounded transition-all duration-300 ${
                paymentStep !== 'info' ? 'bg-emerald-500 w-full' : 'bg-transparent w-0'
              }`} />
            </div>
            
            <div className={`flex items-center space-x-2 ${
              paymentStep === 'payment' ? 'text-emerald-600' :
              paymentStep === 'success' ? 'text-emerald-500' : 'text-slate-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                paymentStep === 'payment' ? 'bg-emerald-600 text-white' :
                paymentStep === 'success' ? 'bg-emerald-500 text-white' :
                'bg-slate-300 text-slate-600'
              }`}>
                2
              </div>
              <span className="font-medium">Pago</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              {paymentStep === 'info' && (
                <form onSubmit={handleSubmit(onSubmitInfo)} className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Información de Contacto</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                          type="email"
                          {...register('customerEmail', { required: 'El email es requerido' })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="tu@email.com"
                        />
                      </div>
                      {errors.customerEmail && (
                        <p className="mt-1 text-sm text-red-600">{errors.customerEmail.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                          type="tel"
                          {...register('customerPhone')}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Dirección de Envío</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        {...register('shippingAddress.name', { required: 'El nombre es requerido' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Juan Pérez"
                      />
                      {errors.shippingAddress?.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.name.message}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        {...register('shippingAddress.street', { required: 'La dirección es requerida' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Calle Principal 123, 2ºA"
                      />
                      {errors.shippingAddress?.street && (
                        <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.street.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Ciudad *
                      </label>
                      <input
                        type="text"
                        {...register('shippingAddress.city', { required: 'La ciudad es requerida' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Madrid"
                      />
                      {errors.shippingAddress?.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.city.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Código Postal *
                      </label>
                      <input
                        type="text"
                        {...register('shippingAddress.postal_code', { required: 'El código postal es requerido' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="28001"
                      />
                      {errors.shippingAddress?.postal_code && (
                        <p className="mt-1 text-sm text-red-600">{errors.shippingAddress.postal_code.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        {...register('sameAsShipping')}
                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-slate-700">La dirección de facturación es la misma</span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    {isProcessing ? 'Procesando...' : 'Continuar al pago'}
                  </button>
                </form>
              )}
              
              {paymentStep === 'payment' && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Información de Pago</span>
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Datos de la tarjeta
                    </label>
                    <div className="border border-slate-300 rounded-lg p-4 bg-slate-50">
                      <CardElement 
                        options={{
                          style: {
                            base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                color: '#aab7c4',
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setPaymentStep('info')}
                      className="flex-1 bg-slate-200 text-slate-800 py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                    >
                      Volver
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={!stripe || isProcessing}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                    >
                      {isProcessing ? 'Procesando...' : `Pagar €${total.toFixed(2)}`}
                    </button>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-slate-500">
                      🔒 Tu pago está protegido con cifrado SSL de 256 bits
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Resumen del Pedido</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product_id} className="flex space-x-3">
                      <img 
                        src={item.product_image_url || '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg'} 
                        alt={item.product_name}
                        className="w-12 h-12 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg';
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-slate-900">{item.product_name}</h4>
                        <p className="text-xs text-slate-500">Cantidad: {item.quantity}</p>
                        <p className="text-sm font-semibold text-emerald-600">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">Subtotal:</span>
                    <span className="font-semibold">€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">Envío:</span>
                    <span className="font-semibold text-emerald-600">GRATIS</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">IVA (21%):</span>
                    <span className="font-semibold">€{(total * 0.21).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-slate-900">Total:</span>
                      <span className="text-xl font-bold text-emerald-600">€{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CheckoutPage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
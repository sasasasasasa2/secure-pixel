import { useMutation } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface ConsultationFormData {
  fullName: string;
  company: string;
  profession: string;
  corporateEmail: string;
  phone: string;
  deviceQuantity: string;
  budgetRange: string;
  paymentMethod: string;
  deliveryCity: string;
  additionalComments?: string;
}

export const useConsultation = () => {
  const submitConsultation = useMutation({
    mutationFn: async (formData: ConsultationFormData) => {
      const { data, error } = await supabase.functions.invoke('submit-consultation-form', {
        body: formData
      });

      if (error) {
        throw error;
      }

      return data.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      console.error('Consultation form error:', error);
      toast.error(error.message || 'Error al enviar la consulta');
    },
  });

  return {
    submitConsultation,
  };
};
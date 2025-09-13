import { useMutation } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const useContact = () => {
  const submitForm = useMutation({
    mutationFn: async (formData: ContactFormData) => {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
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
      console.error('Contact form error:', error);
      toast.error(error.message || 'Error al enviar el formulario');
    },
  });

  return {
    submitForm,
  };
};
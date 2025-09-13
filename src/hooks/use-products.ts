import { useQuery } from '@tanstack/react-query';
import { supabase, Product, ConfigurationOption } from '../lib/supabase';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data || [];
    },
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async (): Promise<Product | null> => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .maybeSingle();
      
      if (error) {
        throw error;
      }
      
      return data;
    },
    enabled: !!id,
  });
};

export const useConfigurationOptions = () => {
  return useQuery({
    queryKey: ['configuration-options'],
    queryFn: async (): Promise<ConfigurationOption[]> => {
      const { data, error } = await supabase
        .from('configuration_options')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true })
        .order('sort_order', { ascending: true });
      
      if (error) {
        throw error;
      }
      
      return data || [];
    },
  });
};
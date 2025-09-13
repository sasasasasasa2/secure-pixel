import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://notqaydgybufwqfclwmv.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdHFheWRneWJ1ZndxZmNsd212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODYzMjIsImV4cCI6MjA3MzM2MjMyMn0.4ASO93NVrR8Zl-YyzfFsy6W7wH8V2spoxpaJJC3Bat4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Product {
  id: number;
  name: string;
  model: string;
  base_price: number;
  description: string;
  image_url: string;
  specifications: any;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ConfigurationOption {
  id: number;
  category: string;
  name: string;
  description: string;
  price_modifier: number;
  specifications: any;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface CartItem {
  product_id: number;
  product_name: string;
  product_image_url: string;
  price: number;
  quantity: number;
  configuration_options?: any;
}

export interface Order {
  id: number;
  user_id?: string;
  stripe_payment_intent_id?: string;
  status: string;
  total_amount: number;
  currency: string;
  shipping_address?: any;
  billing_address?: any;
  customer_email?: string;
  customer_phone?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}
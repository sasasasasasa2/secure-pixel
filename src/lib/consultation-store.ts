import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConsultationRequest {
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

interface ConsultationStore {
  requests: ConsultationRequest[];
  currentRequest: Partial<ConsultationRequest>;
  updateRequest: (data: Partial<ConsultationRequest>) => void;
  submitRequest: (request: ConsultationRequest) => void;
  clearRequest: () => void;
}

export const useConsultationStore = create<ConsultationStore>()(persist(
  (set, get) => ({
    requests: [],
    currentRequest: {},
    
    updateRequest: (data) => {
      set((state) => ({
        currentRequest: { ...state.currentRequest, ...data }
      }));
    },
    
    submitRequest: (request) => {
      set((state) => ({
        requests: [...state.requests, request],
        currentRequest: {}
      }));
    },
    
    clearRequest: () => {
      set({ currentRequest: {} });
    }
  }),
  {
    name: 'securepixel-consultation',
  }
));
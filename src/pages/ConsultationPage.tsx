import React from 'react';
import { useForm } from 'react-hook-form';
import { Shield, Building, User, Mail, Phone, DollarSign, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useConsultation } from '../hooks/use-consultation';
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

export const ConsultationPage: React.FC = () => {
  const { submitConsultation } = useConsultation();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ConsultationFormData>();
  
  const onSubmit = async (data: ConsultationFormData) => {
    try {
      await submitConsultation.mutateAsync(data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Consultation form error:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Shield className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Consulta Empresarial</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Solicita información personalizada sobre nuestras soluciones de seguridad corporativa. 
            Nuestro equipo comercial te contactará en menos de 24 horas con una propuesta a medida.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Información de Contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email Corporativo</p>
                      <p className="text-slate-600">comercial@securepixel.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Línea Directa</p>
                      <p className="text-slate-600">+34 900 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Oficinas</p>
                      <p className="text-slate-600">
                        Madrid, Barcelona, Valencia<br />
                        Atención empresarial 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Levels */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Niveles de Servicio</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Consulta inicial: Gratis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Propuesta personalizada: 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Configuración empresarial: 48-72h</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    📞 Soporte prioritario para empresas con más de 10 dispositivos
                  </p>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Confían en nosotros</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-slate-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>500+ empresas protegidas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Cumplimiento RGPD certificado</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Soporte técnico especializado</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Configuración personalizada</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Building className="h-6 w-6 text-emerald-600" />
                  <h2 className="text-2xl font-semibold text-slate-900">Solicitud de Información Empresarial</h2>
                </div>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-emerald-800">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">¡Consulta enviada correctamente!</span>
                    </div>
                    <p className="text-emerald-700 mt-1">
                      Nuestro equipo comercial se pondrá en contacto contigo en un plazo máximo de 24 horas con una propuesta personalizada.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                          type="text"
                          {...register('fullName', { required: 'El nombre completo es requerido' })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Juan Pérez García"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Empresa/Despacho/Organización *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                          type="text"
                          {...register('company', { required: 'La empresa/organización es requerida' })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Bufete López & Asociados"
                        />
                      </div>
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Profesión *
                      </label>
                      <select
                        {...register('profession', { required: 'La profesión es requerida' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Selecciona tu profesión</option>
                        <option value="Abogado/a">Abogado/a</option>
                        <option value="Empresario/a">Empresario/a</option>
                        <option value="Consultor/a">Consultor/a</option>
                        <option value="Director/a Ejecutivo/a">Director/a Ejecutivo/a</option>
                        <option value="CEO/CFO/CTO">CEO/CFO/CTO</option>
                        <option value="Periodista">Periodista</option>
                        <option value="Médico/a">Médico/a</option>
                        <option value="Arquitecto/a">Arquitecto/a</option>
                        <option value="Ingeniero/a">Ingeniero/a</option>
                        <option value="Otro">Otro</option>
                      </select>
                      {errors.profession && (
                        <p className="mt-1 text-sm text-red-600">{errors.profession.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email corporativo *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                          type="email"
                          {...register('corporateEmail', { 
                            required: 'El email corporativo es requerido',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Email inválido'
                            }
                          })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="juan@empresa.com"
                        />
                      </div>
                      {errors.corporateEmail && (
                        <p className="mt-1 text-sm text-red-600">{errors.corporateEmail.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                          type="tel"
                          {...register('phone', { required: 'El teléfono es requerido' })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        ¿Cuántos dispositivos le interesan? *
                      </label>
                      <select
                        {...register('deviceQuantity', { required: 'La cantidad de dispositivos es requerida' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Selecciona cantidad</option>
                        <option value="1">1 dispositivo</option>
                        <option value="2-5">2-5 dispositivos</option>
                        <option value="6-10">6-10 dispositivos</option>
                        <option value="10+">Más de 10 dispositivos</option>
                      </select>
                      {errors.deviceQuantity && (
                        <p className="mt-1 text-sm text-red-600">{errors.deviceQuantity.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Precio aproximado que manejan *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <select
                          {...register('budgetRange', { required: 'El rango de presupuesto es requerido' })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Selecciona rango</option>
                          <option value="1000-1500€">1.000-1.500€ por dispositivo</option>
                          <option value="1500-2000€">1.500-2.000€ por dispositivo</option>
                          <option value="2000+€">Más de 2.000€ por dispositivo</option>
                          <option value="Consultar">A consultar</option>
                        </select>
                      </div>
                      {errors.budgetRange && (
                        <p className="mt-1 text-sm text-red-600">{errors.budgetRange.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Método de pago preferido *
                      </label>
                      <select
                        {...register('paymentMethod', { required: 'El método de pago es requerido' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Selecciona método</option>
                        <option value="Transferencia bancaria">Transferencia bancaria</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Financiación">Financiación</option>
                        <option value="A consultar">A consultar</option>
                      </select>
                      {errors.paymentMethod && (
                        <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Ciudad de entrega *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                      <input
                        type="text"
                        {...register('deliveryCity', { required: 'La ciudad de entrega es requerida' })}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Madrid, Barcelona, Valencia..."
                      />
                    </div>
                    {errors.deliveryCity && (
                      <p className="mt-1 text-sm text-red-600">{errors.deliveryCity.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Comentarios adicionales
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                      <textarea
                        rows={4}
                        {...register('additionalComments')}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Cualquier requerimiento especial, configuración específica, o información adicional que consideres relevante..."
                      />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">¿Necesitas atención inmediata?</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Para consultas urgentes o requerimientos críticos de seguridad empresarial, llámanos directamente al +34 900 123 456.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        🛡️ Seguridad empresarial
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        💼 Configuración corporativa
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        📞 Soporte prioritario
                      </span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitConsultation.isPending}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    {submitConsultation.isPending ? (
                      <span>Enviando consulta...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Consulta Empresarial</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-center text-xs text-slate-500">
                    🔒 Toda la información proporcionada será tratada con máxima confidencialidad y
                    cumpliendo estrictamente el RGPD y normativas de protección de datos.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
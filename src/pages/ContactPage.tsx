import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useContact } from '../hooks/use-contact';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const { submitForm } = useContact();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitForm.mutateAsync(data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contacta con Nosotros</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros dispositivos seguros? Nuestro equipo de expertos está aquí para ayudarte.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
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
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-slate-600">info@securepixel.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Teléfono</p>
                      <p className="text-slate-600">+34 900 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Dirección</p>
                      <p className="text-slate-600">
                        Madrid, España<br />
                        Atención al cliente 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    📞 Soporte técnico urgente disponible 24/7 para clientes Premium
                  </p>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Enlaces Rápidos</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    📊 Guía de configuración GrapheneOS
                  </a>
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    🔒 Preguntas frecuentes sobre seguridad
                  </a>
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    🛡️ Centro de soporte técnico
                  </a>
                  <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    📝 Política de garantía
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <MessageCircle className="h-6 w-6 text-emerald-600" />
                  <h2 className="text-2xl font-semibold text-slate-900">Envíanos un Mensaje</h2>
                </div>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-emerald-800">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">¡Mensaje enviado correctamente!</span>
                    </div>
                    <p className="text-emerald-700 mt-1">
                      Nos pondremos en contacto contigo en las próximas 24 horas.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'El nombre es requerido' })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'El email es requerido',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Email inválido'
                          }
                        })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Asunto
                      </label>
                      <select
                        {...register('subject')}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="Información general">Información general</option>
                        <option value="Consulta técnica">Consulta técnica</option>
                        <option value="Soporte post-venta">Soporte post-venta</option>
                        <option value="Configuración personalizada">Configuración personalizada</option>
                        <option value="Empresas">Consulta empresarial</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      rows={6}
                      {...register('message', { 
                        required: 'El mensaje es requerido',
                        minLength: {
                          value: 10,
                          message: 'El mensaje debe tener al menos 10 caracteres'
                        }
                      })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Descíbenos en qué podemos ayudarte. Si tienes alguna consulta técnica específica, por favor proporciona todos los detalles posibles."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">¿Necesitas ayuda urgente?</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Para consultas urgentes o problemas críticos de seguridad, llámanos directamente al +34 900 123 456.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        🛡️ Seguridad comprometida
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        ⚠️ Problema crítico
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        📞 Soporte Premium 24/7
                      </span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitForm.isPending}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    {submitForm.isPending ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-xl text-white p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">¿Sabes que también ofrecemos consultoría personalizada?</h2>
              <p className="text-xl mb-6 text-emerald-100">
                Nuestro equipo de expertos puede ayudarte a diseñar la solución de seguridad perfecta para tus necesidades específicas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🏢</div>
                  <h3 className="font-semibold mb-2">Empresas</h3>
                  <p className="text-sm text-emerald-100">Soluciones de seguridad a gran escala</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="font-semibold mb-2">Equipos</h3>
                  <p className="text-sm text-emerald-100">Configuraciones grupales y capacitación</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold mb-2">Personalizado</h3>
                  <p className="text-sm text-emerald-100">Desarrollo de soluciones únicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
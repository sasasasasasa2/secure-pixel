import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Smartphone, Users, CheckCircle, Star, Phone, Mail, MessageSquare } from 'lucide-react';
import { useProducts } from '../hooks/use-products';

export const HomePage: React.FC = () => {
  const { data: products } = useProducts();
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/images/premium_dark_blue_circuit_tech_background.jpg)' }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/securepixel_cybersecurity_logo_dark_premium_tech.jpg" 
                alt="SecurePixel Logo"
                className="h-20 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Seguridad Empresarial
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                de Máximo Nivel
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Protección de datos corporativos con tecnología de grado militar. Dispositivos seguros para profesionales que valoran la confidencialidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/consulta" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Solicitar Información</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a 
                href="tel:+34900123456" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why SecurePixel for Business Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Por qué SecurePixel es la mejor opción para tu negocio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tecnología de seguridad empresarial diseñada para profesionales que manejan información confidencial y requieren máxima protección.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Titan M2 Security Chip */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-600 p-3 rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">🔒 Chip Titan M2 de Seguridad</h3>
                  <p className="text-emerald-700 font-medium">Protección de Hardware Avanzada</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Resistente a análisis forense:</p>
                    <p className="text-sm">El chip Titan M2 implementa protecciones de hardware que hacen extremadamente difícil el análisis en laboratorios especializados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Encriptación a nivel de silicio:</p>
                    <p className="text-sm">Las claves se almacenan directamente en el hardware seguro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GrapheneOS */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">🛡️ GrapheneOS - Sistema Operativo Empresarial</h3>
                  <p className="text-blue-700 font-medium">Máxima Privacidad Corporativa</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Sin servicios Google:</p>
                    <p className="text-sm">Elimina vectores de recopilación de datos corporativos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Control total de permisos:</p>
                    <p className="text-sm">Cada aplicación requiere autorización explícita</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Actualizaciones aceleradas:</p>
                    <p className="text-sm">Parches críticos implementados antes que Android convencional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote Wipe */}
            <div className="bg-gradient-to-br from-slate-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-red-600 p-3 rounded-xl">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">🚨 Autoborrado Remoto Empresarial</h3>
                  <p className="text-red-700 font-medium">Protección de Datos Corporativos</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Activación por SMS cifrado:</p>
                    <p className="text-sm">Borra completamente el dispositivo enviando un mensaje específico</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Protección de datos corporativos:</p>
                    <p className="text-sm">En caso de pérdida o robo, los datos sensibles quedan inaccesibles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Sin rastros recuperables:</p>
                    <p className="text-sm">Sobreescritura segura de memoria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Security Profiles */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">👤 Perfiles Múltiples de Seguridad</h3>
                  <p className="text-purple-700 font-medium">Compartimentación Total</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">PIN diferencial:</p>
                    <p className="text-sm">Diferentes códigos muestran entornos completamente distintos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Compartimentos estancos:</p>
                    <p className="text-sm">Separación total entre datos personales y corporativos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Modo pánico:</p>
                    <p className="text-sm">PIN específico que muestra dispositivo "limpio"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Business Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">🔐 Funciones Empresariales Avanzadas</h2>
            <p className="text-xl text-slate-600">
              Características diseñadas para el entorno empresarial más exigente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Lock className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Comunicaciones Cifradas</h3>
              <p className="text-slate-600">Cifrado extremo a extremo en todas las comunicaciones empresariales.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Verificación de Integridad</h3>
              <p className="text-slate-600">Validación automática de integridad de aplicaciones críticas.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Protección APT</h3>
              <p className="text-slate-600">Defensa contra amenazas persistentes avanzadas y malware de nivel APT.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Smartphone className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Auditoría de Conectividad</h3>
              <p className="text-slate-600">Registro completo y auditoria de todas las conexiones de red.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Professionals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Profesionales que confían en SecurePixel</h2>
              <p className="text-xl text-slate-600">
                Seguridad empresarial de nivel corporativo para profesionales que valoran la confidencialidad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Despachos de Abogados</h3>
                <p className="text-slate-600 text-sm">Protección de secreto profesional y confidencialidad de comunicaciones con clientes.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Ejecutivos y Directivos</h3>
                <p className="text-slate-600 text-sm">Protección de información estratégica y comunicaciones empresariales sensibles.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Consultoras</h3>
                <p className="text-slate-600 text-sm">Cumplimiento de normativas de privacidad y protección de datos de clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo que dicen nuestros clientes corporativos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "La confidencialidad de las comunicaciones con nuestros clientes es fundamental. SecurePixel nos da esa tranquilidad."
              </p>
              <div className="font-semibold text-slate-900">María López</div>
              <div className="text-sm text-slate-500">Socia, Bufete López & Asociados</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Como empresa de consultoría, manejamos información estratégica crítica. La seguridad que ofrece es incomparable."
              </p>
              <div className="font-semibold text-slate-900">Carlos Ruiz</div>
              <div className="text-sm text-slate-500">Director, Consultora Estratégica</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "La protección de datos corporativos es esencial en nuestro sector. SecurePixel cumple todos nuestros estándares."
              </p>
              <div className="font-semibold text-slate-900">Ana García</div>
              <div className="text-sm text-slate-500">CFO, Empresa Tecnológica</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para proteger tu información empresarial?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a cientos de profesionales que ya han elegido la máxima seguridad para sus comunicaciones de negocios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/consulta" 
              className="inline-flex items-center space-x-2 bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>Solicitar Consulta</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="tel:+34900123456" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+34 900 123 456</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
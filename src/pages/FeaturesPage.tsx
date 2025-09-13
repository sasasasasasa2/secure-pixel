import React, { useState } from 'react';
import { Shield, Smartphone, Lock, Users, CheckCircle, Star, Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Shield className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Características de Seguridad Empresarial</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tecnología de protección avanzada diseñada para profesionales que manejan información confidencial y requieren máxima seguridad corporativa.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Core Security Features */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Características de Seguridad Avanzada</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Titan M2 Security Chip */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-emerald-600 p-4 rounded-xl">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">🔒 Chip Titan M2 de Seguridad</h3>
                    <p className="text-emerald-700 font-medium">Protección de Hardware Militar</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Resistente a análisis forense avanzado</h4>
                    <p className="text-slate-600 text-sm">
                      El chip Titan M2 implementa protecciones de hardware que hacen extremadamente difícil el análisis en laboratorios especializados. 
                      Incluye mecanismos de autodefensa que detectan intentos de manipulación física.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Encriptación a nivel de silicio</h4>
                    <p className="text-slate-600 text-sm">
                      Las claves criptográficas se almacenan directamente en el hardware seguro, separadas del procesador principal. 
                      Esto garantiza que ni siquiera el sistema operativo tenga acceso directo a las claves más críticas.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Verificación de arranque seguro</h4>
                    <p className="text-slate-600 text-sm">
                      Cada componente del sistema se verifica criptográficamente durante el arranque, 
                      asegurando que no se hayan instalado modificaciones maliciosas.
                    </p>
                  </div>
                </div>
              </div>

              {/* GrapheneOS Enterprise */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 p-4 rounded-xl">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">🛡️ GrapheneOS Empresarial</h3>
                    <p className="text-blue-700 font-medium">Sistema Operativo de Máxima Privacidad</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Sin servicios Google integrados</h4>
                    <p className="text-slate-600 text-sm">
                      Elimina completamente todos los vectores de recopilación de datos corporativos. 
                      No hay telemetría, seguimiento o envío de datos a terceros sin consentimiento explícito.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Control granular de permisos</h4>
                    <p className="text-slate-600 text-sm">
                      Cada aplicación requiere autorización explícita para acceder a recursos del sistema. 
                      Los permisos pueden revocarse en tiempo real y monitorizarse completamente.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Actualizaciones de seguridad prioritarias</h4>
                    <p className="text-slate-600 text-sm">
                      Los parches críticos de seguridad se implementan generalmente antes que en Android convencional, 
                      manteniendo la protección siempre actualizada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Remote Wipe Enterprise */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-red-600 p-4 rounded-xl">
                    <MessageSquare className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">🚨 Autoborrado Remoto Empresarial</h3>
                    <p className="text-red-700 font-medium">Protección de Datos Críticos</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Activación por SMS cifrado</h4>
                    <p className="text-slate-600 text-sm">
                      Un mensaje específico enviado al dispositivo inicia un proceso de borrado seguro completo. 
                      El comando está protegido criptográficamente para evitar activaciones accidentales.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Protección ante pérdida o robo</h4>
                    <p className="text-slate-600 text-sm">
                      En situaciones de compromiso físico del dispositivo, todos los datos sensibles 
                      quedan inmediatamente inaccesibles, protegiendo la información corporativa crítica.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Sobreescritura segura de memoria</h4>
                    <p className="text-slate-600 text-sm">
                      El proceso no solo elimina archivos, sino que sobreescribe múltiples veces 
                      las áreas de memoria, haciendo prácticamente imposible la recuperación de datos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multiple Security Profiles */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-purple-600 p-4 rounded-xl">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">👤 Perfiles Múltiples de Seguridad</h3>
                    <p className="text-purple-700 font-medium">Compartimentación Absoluta</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">PIN diferencial por contexto</h4>
                    <p className="text-slate-600 text-sm">
                      Diferentes códigos de acceso revelan entornos completamente distintos. 
                      Un PIN puede mostrar datos personales, otro corporativos, y otro un perfil "limpio".
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Separación total de datos</h4>
                    <p className="text-slate-600 text-sm">
                      Los compartimentos son completamente estancos - las aplicaciones de un perfil 
                      no pueden acceder a datos de otro perfil bajo ninguna circunstancia.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Modo pánico integrado</h4>
                    <p className="text-slate-600 text-sm">
                      Un PIN específico presenta un dispositivo aparentemente "limpio" con datos 
                      irrelevantes, mientras mantiene oculta toda la información sensible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Business Features */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">🔐 Funciones Empresariales Avanzadas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Comunicaciones Cifradas E2E</h3>
                <p className="text-slate-600 text-sm">
                  Cifrado extremo a extremo en todas las comunicaciones empresariales, 
                  incluyendo llamadas, mensajes y transferencia de archivos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Verificación de Integridad</h3>
                <p className="text-slate-600 text-sm">
                  Validación automática y continua de la integridad de aplicaciones críticas 
                  y detección de modificaciones no autorizadas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Protección Anti-APT</h3>
                <p className="text-slate-600 text-sm">
                  Defensa especializada contra amenazas persistentes avanzadas (APT) 
                  y malware de nivel estatal o corporativo.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Auditoría de Conectividad</h3>
                <p className="text-slate-600 text-sm">
                  Registro detallado y auditoría completa de todas las conexiones de red, 
                  con alertas en tiempo real de actividad sospechosa.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Casos de Uso Profesional</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4 text-center">⚖️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Despachos Jurídicos</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Protección del secreto profesional abogado-cliente</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Confidencialidad total en casos sensibles</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Cumplimiento de normativas profesionales</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4 text-center">🏢</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Ejecutivos Corporativos</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Protección de información estratégica</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Comunicaciones ejecutivas seguras</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Prevención de espionaje corporativo</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl">
                <div className="text-4xl mb-4 text-center">💼</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Consultoras</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Cumplimiento estricto del RGPD</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Protección de datos de múltiples clientes</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Separación total de proyectos</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Especificaciones Técnicas</h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <span>Seguridad</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Chip de seguridad:</span>
                      <span className="font-medium">Titan M2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cifrado:</span>
                      <span className="font-medium">AES-256</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Arranque seguro:</span>
                      <span className="font-medium">Verificado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Autoborrado:</span>
                      <span className="font-medium">SMS + PIN</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    <span>Sistema</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">SO:</span>
                      <span className="font-medium">GrapheneOS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Compatibilidad:</span>
                      <span className="font-medium">Android Apps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Perfiles:</span>
                      <span className="font-medium">Ilimitados</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Actualizaciones:</span>
                      <span className="font-medium">OTA Seguras</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Empresarial</span>
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Gestión MDM:</span>
                      <span className="font-medium">Compatible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Auditoría:</span>
                      <span className="font-medium">Completa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Soporte:</span>
                      <span className="font-medium">24/7 Premium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Garantía:</span>
                      <span className="font-medium">2 años</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl shadow-xl text-white p-12">
              <h2 className="text-3xl font-bold mb-4">¿Listo para implementar seguridad de nivel empresarial?</h2>
              <p className="text-xl mb-8 text-emerald-100">
                Nuestro equipo de expertos te ayudará a diseñar la solución de seguridad perfecta para tu organización.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/consulta" 
                  className="inline-flex items-center space-x-2 bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  <span>Solicitar Consulta Empresarial</span>
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
      </div>
    </div>
  );
};
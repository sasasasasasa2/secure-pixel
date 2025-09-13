import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-xl font-bold mb-4">
              <Shield className="h-8 w-8 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SecurePixel
              </span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Tu especialista en dispositivos móviles seguros. Ofrecemos smartphones Google Pixel con GrapheneOS preinstalado para máxima privacidad y protección.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>info@securepixel.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 SecurePixel. Todos los derechos reservados. | Hecho por MiniMax Agent
          </p>
        </div>
      </div>
    </footer>
  );
};
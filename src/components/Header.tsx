import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`bg-slate-900 text-white sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Shield className="h-8 w-8 text-emerald-400" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              SecurePixel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Inicio
            </Link>
            <Link to="/caracteristicas" className="hover:text-emerald-400 transition-colors">
              Características
            </Link>
            <Link to="/contacto" className="hover:text-emerald-400 transition-colors">
              Colaborar
            </Link>
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+34900123456" 
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+34 900 123 456</span>
            </a>
            
            <Link 
              to="/consulta" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Consultar Disponibilidad
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hover:text-emerald-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/caracteristicas" 
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </Link>
              <Link 
                to="/contacto" 
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Colaborar
              </Link>
              <a 
                href="tel:+34900123456" 
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </a>
              <Link 
                to="/consulta" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultar Disponibilidad
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
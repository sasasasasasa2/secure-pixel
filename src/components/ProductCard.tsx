import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Shield, Star } from 'lucide-react';
import { Product } from '../lib/supabase';
import { useCartStore } from '../lib/cart-store';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      product_id: product.id,
      product_name: product.name,
      product_image_url: product.image_url,
      price: product.base_price,
      quantity: 1
    });
    
    toast.success('¡Producto añadido al carrito!');
  };

  return (
    <div className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${className}`}>
      <Link to={`/producto/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image_url || '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg'} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg';
            }}
          />
          <div className="absolute top-4 left-4">
            <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span>Seguro</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-slate-500 ml-2">(4.9)</span>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">
              €{product.base_price.toFixed(2)}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-medium"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
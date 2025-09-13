import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../lib/cart-store';

export const CartSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeItem, getTotal, getItemCount } = useCartStore();
  const total = getTotal();
  const itemCount = getItemCount();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Carrito ({itemCount})</span>
            </h2>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-16 w-16 mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">Tu carrito está vacío</p>
              <Link 
                to="/productos" 
                onClick={onClose}
                className="inline-block mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product_id} className="flex space-x-4 p-4 bg-slate-50 rounded-lg">
                    <img 
                      src={item.product_image_url || '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg'} 
                      alt={item.product_name}
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg';
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.product_name}</h4>
                      <p className="text-emerald-600 font-semibold">€{item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 rounded"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.product_id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-emerald-600">€{total.toFixed(2)}</span>
                </div>
                
                <Link 
                  to="/checkout" 
                  onClick={onClose}
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-center block"
                >
                  Proceder al pago
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotal, getItemCount } = useCartStore();
  const total = getTotal();
  const itemCount = getItemCount();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-slate-300 mb-6" />
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-slate-600 mb-8">Descubre nuestros dispositivos seguros y añade algunos al carrito.</p>
            <Link 
              to="/productos" 
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8" />
            <span>Carrito de Compras ({itemCount} productos)</span>
          </h1>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.product_id} className="flex space-x-6 p-6 border border-slate-200 rounded-lg">
                    <img 
                      src={item.product_image_url || '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg'} 
                      alt={item.product_name}
                      className="w-24 h-24 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg';
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.product_name}</h3>
                      <p className="text-emerald-600 font-bold text-xl">€{item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-slate-900">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button 
                            onClick={() => removeItem(item.product_id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 mt-8 pt-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-slate-900">Total:</span>
                  <span className="text-3xl font-bold text-emerald-600">€{total.toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    to="/productos" 
                    className="flex-1 bg-slate-200 text-slate-800 py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors font-medium text-center"
                  >
                    Seguir comprando
                  </Link>
                  <Link 
                    to="/checkout" 
                    className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-center"
                  >
                    Proceder al pago
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
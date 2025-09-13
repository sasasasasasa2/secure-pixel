import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Shield, Check, Plus, Minus, Star, Truck, HeadphonesIcon, RefreshCw } from 'lucide-react';
import { useProduct, useConfigurationOptions } from '../hooks/use-products';
import { useCartStore } from '../lib/cart-store';
import toast from 'react-hot-toast';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : 0;
  
  const { data: product, isLoading } = useProduct(productId);
  const { data: options } = useConfigurationOptions();
  const { addItem } = useCartStore();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, any>>({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Group options by category
  const optionsByCategory = React.useMemo(() => {
    if (!options) return {};
    return options.reduce((acc, option) => {
      if (!acc[option.category]) acc[option.category] = [];
      acc[option.category].push(option);
      return acc;
    }, {} as Record<string, typeof options>);
  }, [options]);
  
  // Calculate total price with selected options
  const totalPrice = React.useMemo(() => {
    if (!product) return 0;
    const basePrice = product.base_price;
    const optionsPrice = Object.values(selectedOptions).reduce((sum, option) => 
      sum + (option?.price_modifier || 0), 0);
    return basePrice + optionsPrice;
  }, [product, selectedOptions]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      product_id: product.id,
      product_name: product.name,
      product_image_url: product.image_url,
      price: totalPrice,
      quantity,
      configuration_options: selectedOptions
    });
    
    toast.success('¡Producto añadido al carrito!');
  };
  
  const handleOptionSelect = (category: string, option: any) => {
    setSelectedOptions(prev => ({ ...prev, [category]: option }));
  };
  
  // Sample images for gallery (in a real app, these would come from the product data)
  const productImages = [
    product?.image_url || '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg',
    '/images/grapheneos_secure_operating_system_technology_icon.jpg',
    '/images/multilevel_security_icon_1.jpg'
  ];
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl h-96 animate-pulse" />
              <div className="space-y-4">
                <div className="h-8 bg-slate-300 rounded animate-pulse" />
                <div className="h-4 bg-slate-300 rounded animate-pulse" />
                <div className="h-16 bg-slate-300 rounded animate-pulse" />
                <div className="h-12 bg-slate-300 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Producto no encontrado</h1>
            <p className="text-slate-600 mb-8">El producto que buscas no existe o ha sido eliminado.</p>
            <Link 
              to="/productos" 
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Volver a productos</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/productos" 
            className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a productos</span>
          </Link>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={productImages[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg';
                  }}
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-emerald-600' : 'border-slate-300'
                    } hover:border-emerald-600 transition-colors`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/google_pixel_3d_render_futuristic_multi_color_phones.jpg';
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-600">SecurePixel Certified</span>
                </div>
                
                <h1 className="text-3xl font-bold text-slate-900 mb-3">{product.name}</h1>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-500 ml-2">(4.9 • 127 reseñas)</span>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>
              </div>
              
              {/* Price */}
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-slate-900">
                  €{totalPrice.toFixed(2)}
                  {totalPrice !== product.base_price && (
                    <span className="text-lg text-slate-500 ml-2 line-through">
                      €{product.base_price.toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-1">IVA incluido • Envío gratuito</p>
              </div>
              
              {/* Configuration Options */}
              {Object.entries(optionsByCategory).map(([category, categoryOptions]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg text-slate-900 mb-3 capitalize">
                    {category === 'storage' ? 'Almacenamiento' : 
                     category === 'color' ? 'Color' :
                     category === 'security' ? 'Seguridad' :
                     category === 'accessory' ? 'Accesorios' :
                     category === 'support' ? 'Soporte' : category}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {categoryOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(category, option)}
                        className={`p-3 border-2 rounded-lg text-left transition-colors ${
                          selectedOptions[category]?.id === option.id
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-slate-300 hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium text-slate-900">{option.name}</div>
                            <div className="text-sm text-slate-600">{option.description}</div>
                          </div>
                          <div className="text-right">
                            {option.price_modifier > 0 && (
                              <div className="text-emerald-600 font-semibold">
                                +€{option.price_modifier.toFixed(2)}
                              </div>
                            )}
                            {option.price_modifier === 0 && (
                              <div className="text-slate-500">Incluido</div>
                            )}
                          </div>
                        </div>
                        {selectedOptions[category]?.id === option.id && (
                          <Check className="h-5 w-5 text-emerald-600 mt-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-slate-900">Cantidad:</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Añadir al carrito</span>
                </button>
              </div>
              
              {/* Benefits */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-slate-900 mb-4">Beneficios SecurePixel</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Envío gratuito en 24-48h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HeadphonesIcon className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Soporte técnico especializado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">30 días de devolución</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Garantía extendida de 2 años</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Specifications */}
          {product.specifications && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Especificaciones Técnicas</h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-slate-100">
                      <span className="font-medium text-slate-600 capitalize">
                        {key === 'display' ? 'Pantalla' :
                         key === 'storage' ? 'Almacenamiento' :
                         key === 'ram' ? 'RAM' :
                         key === 'camera' ? 'Cámara' :
                         key === 'security' ? 'Seguridad' :
                         key === 'os' ? 'Sistema Operativo' :
                         key === 'battery' ? 'Batería' : key}
                      </span>
                      <span className="text-slate-900 font-semibold">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
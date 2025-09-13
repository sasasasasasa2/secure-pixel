import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useProducts, useConfigurationOptions } from '../hooks/use-products';

export const ProductsPage: React.FC = () => {
  const { data: products, isLoading } = useProducts();
  const { data: options } = useConfigurationOptions();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];
    
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             product.model.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesPrice = product.base_price >= priceRange[0] && product.base_price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchTerm, selectedCategory, priceRange]);

  const categories = React.useMemo(() => {
    if (!products) return [];
    const models = [...new Set(products.map(p => p.model))];
    return [{ value: 'all', label: 'Todos los productos' }, ...models.map(m => ({ value: m, label: m }))];
  }, [products]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Productos SecurePixel</h1>
          <p className="text-xl text-slate-600">
            Explora nuestra colección completa de dispositivos seguros con GrapheneOS.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filtros</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex border border-slate-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'} transition-colors`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'} transition-colors`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Rango de precio: €{priceRange[0]} - €{priceRange[1]}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="flex-1"
                    />
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Mostrando {filteredProducts.length} de {products?.length || 0} productos
          </p>
        </div>

        {/* Products Grid/List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg h-96 animate-pulse" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">No se encontraron productos</h3>
            <p className="text-slate-600 mb-4">Intenta ajustar los filtros o el término de búsqueda.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 2000]);
              }}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
          }>
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                className={viewMode === 'list' ? 'flex-row' : ''}
              />
            ))}
          </div>
        )}

        {/* Load More (if needed in the future) */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-slate-600">
              Mostrando todos los productos disponibles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
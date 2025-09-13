#!/bin/bash

# SecurePixel Setup Script
echo "🚀 Configurando SecurePixel para desarrollo..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js primero."
    exit 1
fi

# Verificar si pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo "📦 Instalando pnpm..."
    npm install -g pnpm
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
pnpm install

# Crear archivo .env.local si no existe
if [ ! -f ".env.local" ]; then
    echo "🔧 Creando archivo .env.local..."
    cp .env.example .env.local
    echo "⚠️  IMPORTANTE: Edita .env.local con tus credenciales reales de Supabase y Stripe"
else
    echo "✅ El archivo .env.local ya existe"
fi

echo ""
echo "✅ ¡Configuración completada!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Edita .env.local con tus credenciales"
echo "2. Ejecuta 'npm run dev' para iniciar el servidor de desarrollo"
echo "3. Ve a http://localhost:5173"
echo ""
echo "🔗 Para desplegar en Vercel:"
echo "1. Sube el proyecto a GitHub"
echo "2. Conecta tu repo con Vercel"
echo "3. Configura las variables de entorno en Vercel Dashboard"
echo ""

# 🚀 Guía Rápida de Despliegue en Vercel

## Paso 1: Subir a GitHub

```bash
# Inicializar Git (si no está iniciado)
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: SecurePixel web application"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/tu-usuario/securepixel-web.git

# Subir a GitHub
git push -u origin main
```

## Paso 2: Desplegar en Vercel

1. **Ve a [vercel.com](https://vercel.com) e inicia sesión**

2. **Clic en "New Project"**

3. **Importar desde GitHub:**
   - Selecciona tu repositorio `securepixel-web`
   - Vercel detectará automáticamente que es un proyecto Vite

4. **Configurar Variables de Entorno:**
   
   En la sección "Environment Variables", añade:

   ```
   Nombre: VITE_SUPABASE_URL
   Valor: https://tu-proyecto.supabase.co

   Nombre: VITE_SUPABASE_ANON_KEY
   Valor: tu-clave-anonima-de-supabase

   Nombre: VITE_STRIPE_PUBLISHABLE_KEY
   Valor: pk_live_tu-clave-publica-de-stripe

   Nombre: VITE_APP_ENV
   Valor: production
   ```

5. **Clic en "Deploy"**

   ✅ ¡Tu aplicación estará lista en unos minutos!

## Paso 3: Configurar Dominio Personalizado (Opcional)

1. En el Dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade tu dominio personalizado

## 🔧 Variables de Entorno que Necesitas

### Supabase
- `VITE_SUPABASE_URL`: URL de tu proyecto Supabase
- `VITE_SUPABASE_ANON_KEY`: Clave anónima de Supabase

### Stripe (Opcional si no usas pagos)
- `VITE_STRIPE_PUBLISHABLE_KEY`: Clave pública de Stripe

### App
- `VITE_APP_ENV`: `production`

## 🚨 Problemas Comunes

### Error de Build
- **Problema**: `Process exited with status 1`
- **Solución**: Verifica que todas las variables de entorno estén configuradas

### Variables de Entorno no Funcionan
- **Problema**: Las variables no se cargan
- **Solución**: Asegúrate de que empiecen con `VITE_`

### Error de Supabase
- **Problema**: No se conecta a la base de datos
- **Solución**: Verifica URL y clave anónima en Vercel Dashboard

## 📱 Después del Despliegue

1. **Prueba todas las funcionalidades:**
   - Formularios de contacto
   - Navegación entre páginas
   - Responsive design

2. **Configura Analytics (Opcional):**
   - Vercel Analytics está disponible automáticamente

3. **Optimización SEO:**
   - El archivo `index.html` ya incluye meta tags optimizados

## 🔄 Updates Automáticos

Una vez configurado, cada `git push` a la rama `main` desplegará automáticamente los cambios en Vercel.

---

¡Tu aplicación SecurePixel estará lista para recibir consultas profesionales! 🔒

# SecurePixel - Web Premium de Móviles Encriptados

SecurePixel es una aplicación web premium diseñada para profesionales que valoran la máxima seguridad en sus dispositivos móviles. Especializada en Google Pixel con GrapheneOS + chip Titan M2.

## 🚀 Características

- **Interfaz Premium**: Diseño tecnológico con paleta de colores cyberseguridad
- **Formulario de Consulta**: Sistema avanzado de consultas profesionales
- **Responsive Design**: Optimizado para todos los dispositivos
- **Integración Supabase**: Base de datos y formularios funcionales
- **Arquitectura Full-Stack**: Frontend React + Backend Supabase

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Backend**: Supabase (Base de datos, Edge Functions)
- **Formularios**: React Hook Form + Yup validation
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/securepixel-web.git
cd securepixel-web
```

### 2. Instalar Dependencias

```bash
npm install
# o
pnpm install
# o
yarn install
```

### 3. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales reales:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-anonima-de-supabase

# Stripe Configuration (Frontend)
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_o_test_tu-clave-publica-de-stripe

# App Configuration
VITE_APP_ENV=production
```

### 4. Ejecutar en Desarrollo

```bash
npm run dev
# o
pnpm dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático desde GitHub

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu proyecto desde GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

2. **Configura las Variables de Entorno en Vercel:**
   - Ve a tu proyecto en Vercel Dashboard
   - Settings → Environment Variables
   - Añade estas variables:

   ```
   VITE_SUPABASE_URL = https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY = tu-clave-anonima-de-supabase
   VITE_STRIPE_PUBLISHABLE_KEY = pk_live_tu-clave-publica-de-stripe
   VITE_APP_ENV = production
   ```

3. **Deploy:**
   - Vercel desplegará automáticamente tu aplicación
   - Los cambios futuros se desplegarán automáticamente al hacer push a main

### Opción 2: Despliegue Manual con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login a Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 📁 Estructura del Proyecto

```
securepixel-web/
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes públicas
├── src/
│   ├── components/        # Componentes React reutilizables
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Configuraciones y utilidades
│   │   ├── supabase.ts   # Configuración Supabase
│   │   ├── stripe.ts     # Configuración Stripe
│   │   └── utils.ts      # Utilidades generales
│   ├── pages/            # Páginas de la aplicación
│   │   ├── HomePage.tsx
│   │   ├── FeaturesPage.tsx
│   │   ├── ConsultationPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Entry point
├── supabase/             # Configuraciones Supabase
│   ├── functions/        # Edge Functions
│   └── tables/           # SQL para tablas
├── .env.example          # Variables de entorno de ejemplo
├── .env.local            # Variables de entorno locales (NO subir a Git)
├── vercel.json           # Configuración de Vercel
└── package.json
```

## 🔧 Configuración de Supabase

### 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Obtén la URL y la clave anónima del proyecto

### 2. Configurar Base de Datos

Las tablas necesarias están en `/supabase/tables/`. Ejecuta estos SQL en tu proyecto:

- `contact_forms.sql` - Formularios de contacto
- `collaboration_forms.sql` - Formularios de colaboración

### 3. Desplegar Edge Functions

Las funciones están en `/supabase/functions/`:

- `submit-contact-form` - Procesar formularios de contacto
- `submit-consultation-form` - Procesar consultas profesionales

```bash
# Instalar Supabase CLI
npm i -g supabase

# Login
supabase login

# Deploy functions
supabase functions deploy
```

## 🎨 Personalización

### Colores del Brand

La aplicación usa una paleta específica definida en `tailwind.config.js`:

- **Negro**: `#0f172a` (slate-900)
- **Azul Oscuro**: `#1e293b` (slate-800)
- **Verde Ciberseguridad**: `#059669` (emerald-600)

### Componentes Personalizables

- **Header**: Logo y navegación en `/src/components/Header.tsx`
- **Footer**: Enlaces y copyright en `/src/components/Footer.tsx`
- **Formularios**: Lógica en `/src/hooks/use-*.ts`

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linter ESLint
npm run clean        # Limpiar dependencias
```

## 🐛 Resolución de Problemas

### Error de Build en Vercel

Si obtienes errores de build:

1. Verifica que todas las variables de entorno estén configuradas
2. Asegúrate de que el script `build` sea: `"tsc -b && vite build"`
3. Revisa que no haya imports/exports incorrectos

### Error de Variables de Entorno

- Las variables deben empezar con `VITE_` para ser accesibles en el frontend
- Verifica que `.env.local` no esté en el `.gitignore` durante desarrollo
- En producción, configúralas directamente en Vercel Dashboard

### Error de Supabase

1. Verifica que la URL y clave anónima sean correctas
2. Asegúrate de que las tablas estén creadas en tu proyecto Supabase
3. Revisa que las Edge Functions estén desplegadas

## 📞 Soporte

Para problemas o mejoras:

1. Crea un issue en GitHub
2. Revisa la documentación de [Supabase](https://supabase.com/docs)
3. Consulta la documentación de [Vercel](https://vercel.com/docs)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**SecurePixel** - Seguridad Empresarial de Máximo Nivel 🔒

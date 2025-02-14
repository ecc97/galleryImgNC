# 📸 VisiónPX

Este proyecto es una aplicación web desarrollada con **Next.js**, que consume la API de **Pexels** para mostrar una galería de imágenes dinámicas y filtrables. Permite buscar imágenes por palabras clave, aplicar filtros por colores, tamaño y orientación, ver detalles de las fotos en una modal y descargar imágenes directamente.

## 🚀 Características
- 🔍 **Búsqueda en tiempo real** de imágenes usando la API de Pexels.
- 🎨 **Filtros por color y categoría** para una exploración personalizada.
- 🖼️ **Modal de detalles** para ver información ampliada de cada imagen.
- 📥 **Descarga de imágenes** directamente desde el frontend.
- ©️ **Redirección a las imágenes y fotógrafo*** hacia pexels para ver más información.
- ⚡ **Optimización con Next.js**, incluyendo `useRouter` para actualizaciones dinámicas.

## 🛠️ Tecnologías Utilizadas
- **Next.js** (App Router)
- **TypeScript**
- **Sass** para estilos
- **Tailwind** para llamar clases estilizadas
- **React Icons** para iconografía


## 📦 Instalación y Configuración
### 1️⃣ Clonar el repositorio
```sh
  git clone https://github.com/ecc97/visionPx.git
  cd visionPx
```
### 2️⃣ Instalar dependencias
```sh
  npm install
```
### 3️⃣ Configurar variables de entorno
Crea un archivo **.env.local** y añade:
```env
NEXT_PUBLIC_PEXELS_API_KEY=tu_api_key_de_pexels
BASE_URL=http://localhost:3000
```

### 4️⃣ Iniciar el servidor en desarrollo
```sh
  npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

## 📚 Uso
1. **Buscar imágenes** usando la barra de búsqueda.
2. **Filtrar por color o categoría** en la galería.
3. **Hacer clic en una imagen** para ver los detalles en una modal.
4. **Descargar imágenes** con el botón correspondiente.
5. **Redirigir a los enlaces** de la imagen original y perfil del fotógrafo.


## 📄 Licencia
Este proyecto está bajo la **MIT License**.

---

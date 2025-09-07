# Organia
Landing page conceptual diseñada como una Single-Page Application (SPA) para simular un producto SaaS (Software as a Service). Este proyecto explora la implementación de una interfaz de usuario fluida y dinámica utilizando tecnologías front-end puras sin frameworks.

## Características Principales
- Arquitectura Front-End Pura: Construido con HTML, CSS y JavaScript (Vanilla JS), empleando un enrutador del lado del cliente para una navegación sin recargas.

- Diseño Responsivo y Modular: Estilos desarrollados con Flexbox y CSS Grid para asegurar una visualización óptima en todos los dispositivos.

- Componentización: Estructura modular del código para una gestión eficiente de la UI (header, footer, y secciones dinámicas).

## Requisitos Previos

- Node.js (versión 20.0.0 o superior)
- npm (viene incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/organia.git
cd organia
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo Local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173` (o el primer puerto disponible).

## Construcción

Para crear una versión de producción:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`.

### **Infraestructura en la Nube (AWS)**

Este proyecto está diseñado para una potencial implementación en AWS. La arquitectura propuesta busca optimizar la escalabilidad, el rendimiento y la disponibilidad.

Puedes encontrar un diagrama conceptual y la documentación detallada de la infraestructura, incluyendo los servicios clave utilizados, en el archivo [`INFRA.md`](./INFRA.md).

http://organia-site.com.s3-website-us-east-1.amazonaws.com/
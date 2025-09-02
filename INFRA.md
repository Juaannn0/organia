# Documentación de la Infraestructura para Organia

Este documento detalla la arquitectura de infraestructura utilizada para el despliegue de la landing page de Organia. El enfoque es utilizar servicios de hosting estático y CDN para garantizar un alto rendimiento y disponibilidad global.

---

### 1. Visión General de la Arquitectura

La arquitectura es simple y eficiente, ideal para una **Single-Page Application (SPA)**. Consiste en almacenar los archivos estáticos en un bucket de Amazon S3 y distribuirlos a través de una CDN como Cloudflare. Esto elimina la necesidad de servidores web tradicionales y reduce los costos de operación.

---

### 2. Servicios y Componentes de la Infraestructura

* **Amazon S3:** Se utiliza para alojar todos los activos estáticos del frontend (HTML, CSS, JavaScript, imágenes). Se configura como un **Static Website Hosting** para servir los archivos directamente.
* **Cloudflare:** Funciona como una **Content Delivery Network (CDN)** y servicio de proxy inverso.
    * **CDN:** Almacena en caché los archivos de tu sitio en servidores ubicados en todo el mundo, lo que reduce la latencia para los usuarios.
    * **Proxy Inverso:** Redirige el tráfico desde tu dominio personalizado (ej. `organia.com`) hacia tu bucket de S3.
    * **SSL/TLS:** Proporciona certificados de seguridad para HTTPS, asegurando la comunicación encriptada.

---

### 3. Flujo del Despliegue (Workflow)

El proceso de despliegue se simplifica a los siguientes pasos:

1.  El código frontend es construido y optimizado.
2.  Todos los archivos generados (la carpeta `dist` o `build`) son subidos al bucket de S3.
3.  Cloudflare se encarga de invalidar el caché si es necesario, asegurando que los usuarios obtengan la última versión del sitio.

---

### 4. Consideraciones Futuras

Aunque el proyecto es estático, la arquitectura permite una fácil integración con servicios externos:

* **Formularios de Contacto:** Se pueden usar servicios de terceros como Formspree o plataformas sin servidor como **AWS Lambda** y **API Gateway** para manejar los envíos de formularios sin un backend dedicado.
* **Analíticas:** Integración con herramientas como Google Analytics para monitorear el tráfico y el comportamiento del usuario.
# Descripción de las distintas tecnologías
## Vitest 
Vitest es un framework de pruebas rápido, basado en Vite, que permite ejecutar pruebas unitarias, de integración y de componentes. Se destaca por su velocidad y su fácil integración con proyectos modernos de JavaScript, especialmente aquellos basados en **Vite**.

El uso de Vite dev server para transformar sus archivos durante los testing permite la creación de un corredor simple que no necesita lidiar con la complejidad de transformar archivos fuente y solo puede concentrarse en proporcionar el mejor DX durante las pruebas.

Un test runner que utiliza la misma configuración de su aplicación (a través de vite.config.js), compartiendo un proceso de transformación común durante el tiempo de desarrollo, construcción y prueba. Esto es extensible con la misma API de complemento que le permite a usted y a los mantenedores de sus herramientas proporcionar una integración de primera clase con Vite.

Una herramienta que se construye pensando en Vite desde el principio, aprovechando sus mejoras en DX, como su Hot Module Reload (HMR) instantáneo. Este es Vitest, un marco de pruebas de próxima generación impulsado por Vite.

## Test cafe
TestCafe es un de end-to-end testing framework robusto y fácil de usar. Permite a los desarrolladores escribir pruebas para aplicaciones web utilizando JavaScript o TypeScript.

Utiliza el protocolo nativo de Chrome DevTools (CDP) para automatizar navegadores locales basados en Chromium. Esta capacidad de automatización nativa permite a este simular con precisión las interacciones del usuario, proporcionando un acceso rápido y de bajo nivel al navegador.

La arquitectura híbrida cliente-servidor le permite ejecutar tanto código a nivel del sistema como código en el navegador. Una arquitectura híbrida fusiona  la flexibilidad y escalabilidad de la nube con el control y seguridad de los servidores locales.

Utiliza APIs de sistema de alto nivel para iniciar y gestionar los navegadores, lo cual es necesario para controlar el proceso de ejecución de las pruebas. Las pruebas de TestCafe son scripts de Node.js, lo que les permite lanzar servicios y aplicaciones, leer y escribir archivos del sistema, y utilizar sus bibliotecas.

La arquitectura híbrida ha permitido mejorar la estabilidad de las pruebas y ampliar las capacidades de testing del marco.

Además, TestCafe emplea un proxy inverso diseñado a medida para extender sus capacidades de automatización a otros navegadores. Esto incluye soporte para navegadores en la nube y aquellos que se ejecutan en dispositivos remotos, lo que lo hace versátil para diversos entornos de prueba.

## Testing-Library
Testing Library es un conjunto de herramientas para probar interfaces de usuario en aplicaciones web. Está diseñado para ayudar a los desarrolladores a escribir pruebas más enfocadas en cómo los usuarios interactúan con la aplicación, en lugar de detalles internos de implementación. 

Testing Library facilita la simulación de acciones del usuario, como hacer clic en botones, escribir en formularios, o navegar entre elementos, y está diseñado para funcionar bien con frameworks como React, Angular, y Vue.

La filosofía de Testing Library es centrarse en la accesibilidad y en probar el comportamiento real de la aplicación desde la perspectiva del usuario final.

## Jest
Jest es un framework de pruebas completo para Javascript, que incluye un motor de pruebas, un corredor de pruebas y herramientas de aserción. Es usado tanto para pruebas unitarias como de integración. Es utilizado para testear tanto el frontend como el backend, y puede corroborar funciones simples o complejas. La Testing Library misma usa Jest como herramienta de aserción, aunque Jest en sí cubre pruebas a un nivel más amplio, no está limitado a la UI.

#
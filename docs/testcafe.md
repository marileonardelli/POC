# TestCafe

## Descripción 
TestCafe es un de end-to-end testing framework robusto y fácil de usar. Permite a los desarrolladores escribir pruebas para aplicaciones web utilizando JavaScript o TypeScript.

Utiliza el protocolo nativo de Chrome DevTools (CDP) para automatizar navegadores locales basados en Chromium. Esta capacidad de automatización nativa permite a este simular con precisión las interacciones del usuario, proporcionando un acceso rápido y de bajo nivel al navegador.

La arquitectura híbrida cliente-servidor le permite ejecutar tanto código a nivel del sistema como código en el navegador. Una arquitectura híbrida fusiona  la flexibilidad y escalabilidad de la nube con el control y seguridad de los servidores locales.
Utiliza APIs de sistema de alto nivel para iniciar y gestionar los navegadores, lo cual es necesario para controlar el proceso de ejecución de las pruebas. Las pruebas de TestCafe son scripts de Node.js, lo que les permite lanzar servicios y aplicaciones, leer y escribir archivos del sistema, y utilizar sus bibliotecas.

La arquitectura híbrida ha permitido mejorar la estabilidad de las pruebas y ampliar las capacidades de testing del marco.

Además, TestCafe emplea un proxy inverso diseñado a medida para extender sus capacidades de automatización a otros navegadores. Esto incluye soporte para navegadores en la nube y aquellos que se ejecutan en dispositivos remotos, lo que lo hace versátil para diversos entornos de prueba.

---

## Principales Features

### Pruebas en Múltiples Navegadores

Soporta todos los navegadores modernos, permitiendo que las pruebas se ejecuten sin problemas en diferentes entornos.

### Sin necesidad de WebDriver

funciona sin necesidad de WebDriver,esta es una herramienta que permite la automatización de servidores web, lo cual es lógico ya que su arquitectura, como dijimos anteriormente utiliza el protocolo nativo de Chrome DevTools, que le permite la automatización nativa de los navegadores por mismo. Esto simplifica la configuración y reduce la complejidad.

### Espera Automática

Maneja la espera de que los elementos aparezcan o de que las acciones se completen, lo que ayuda a reducir la inestabilidad en las pruebas.

### Pruebas Paralelas

Puedes ejecutar pruebas en paralelo, lo que acelera significativamente el proceso de pruebas.
CLI Potente: La interfaz de línea de comandos permite una fácil integración en pipelines de integración continua/despliegue continuo (CI/CD).

### Aplicación de Escritorio

TestCafe Studio proporciona una poderosa aplicación de escritorio para crear y gestionar pruebas, especialmente útil para personas que no son desarrolladores.

### Código Abierto

Al ser gratuito y de código abierto, fomenta la colaboración y las contribuciones de la comunidad.

## Principales sponsors y contribuidores

TestCafe fue creado por DevExpress es una empresa de software que se especializa en crear herramientas de desarrollo y componentes de interfaz de usuario (UI) para diversas plataformas.



## Curva de aprendizaje 
La curva de aprendizaje es relativamente baja, especialmente para aquellos que ya poseen familiaridad con lenguajes que utilizan etiquetas, como por ejemplo HTML. Dado que su sintaxis es similar a la de los scripts en JavaScript, quienes ya cuenten con conocimientos en este último encontrarán que el proceso de aprendizaje es aún más sencillo.

## Repositorio y Documentación
El repositorio oficial de TestCafe está disponible en GitHub en la siguiente dirección: https://github.com/DevExpress/testcafe. Asimismo, su página oficial es https://testcafe.io/, donde se ofrece información exhaustiva sobre este framework. En este sitio, los usuarios pueden acceder a guías y documentación tanto para principiantes como para aquellos con conocimientos más avanzados que deseen aprovechar al máximo las innovaciones que ofrece el producto. Además, se incluye una sección dedicada a las novedades, donde se detallan actualizaciones y otras características recientemente implementadas.

## Soporte y actualizaciones
TestCafe ofrece un sólido sistema de soporte y actualizaciones, lo que garantiza que los usuarios puedan beneficiarse de las últimas mejoras y correcciones.
Centrándonos en el soporte proporciona varias vías para obtener asistencia. La comunidad activa de usuarios y desarrolladores puede ser un recurso valioso, ya que se pueden encontrar respuestas en foros y plataformas como GitHub. Además, la documentación oficial es extensa y abarca desde la instalación básica hasta guías avanzadas, lo que facilita la resolución de problemas comunes. También se pueden realizar preguntas específicas en el repositorio de GitHub, donde los desarrolladores de TestCafe están comprometidos a responder y ayudar a la comunidad.

Con respecto a las actualizaciones el equipo de desarrollo de TestCafe se dedica a lanzar actualizaciones regulares que incluyen nuevas características, mejoras de rendimiento y correcciones de errores. Estas actualizaciones son documentadas de manera clara en el repositorio, permitiendo a los usuarios estar al tanto de los cambios y nuevas incorporaciones. Además, TestCafe se esfuerza por mantenerse al día con las tendencias y necesidades del mercado, integrando funcionalidades que mejoran la experiencia del usuario y la eficacia de las pruebas automatizadas.

## Demanda y uso en el mercado
TestCafe ha visto un aumento en la demanda y el uso en el mercado de pruebas automatizadas, impulsado por varias tendencias clave en el desarrollo de software.
Su extencion en Vs https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner
tiene actualmente 29,255 descargas y va en aumento 
En github lo utilizan 9,8k

---

## Instalación
### Se necesitaria

* Un navegador que se utilizará para simular al usuario
* Instalar test cafe

De manera local en el proyecto
```bash
pnpm i --save-dev testcafe
```

De manera global
```bash
pnpm install -g testcafe 
```
Otras formas de instalar

https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe#prerequisites 

## Ejemplo de uso
Este es un ejemplo básico utilizando el get started de test cafe https://testcafe.io/documentation/402635/guides/overview/getting-started  junto a nuestro proyecto

Creamos la carpeta testcafe y dentro el archivo example-test.js quedándonos la ruta relativa: patas-alegres-front\testcafe\example-test.js

```javascript
import { Selector } from "testcafe";


fixture`My Angular App Tests`.page("http://localhost:4200");


test("Check if page loads", async (t) => {
  await t
    .expect(Selector("h1").innerText)
    .eql("Bienvenidos a patas-alegres-front!!!");
});
```

Para ejecutar las pruebas, utiliza el siguiente comando parados en patas-alegres-front:
```bash
npx testcafe chrome testcafe/example-test.js
```

Observamos cómo se produce todo el proceso y obtenemos el resultado

## Conclusión
Concluimos que tiene una buena documentación y es intuitivo de usar, realiza rápidamente las acciones que le indicamos y los mensajes de errores son claros. Este test es altamente efectivo y accesible dada la baja curva de aprendizaje y la amplia documentación que tiene, este tipo de test es una opción atractiva tanto para principiantes como para desarrolladores avanzados. Las actualizaciones se adaptan a las tendencias actuales por lo que termina siendo una herramienta valiosa para las pruebas actualizadas. Por último, su enfoque en la comunidad a través del repositorio de código abierto y soporte activo asegura que los usuarios puedan ver actualizaciones continuas y puedan aportar para mejorar.

---

## Comandos útiles

`testcafe --list-browsers`: Lista los browsers disponibles localmente para utilizar

`testcafe {,} test.js`: Utiliza los browsers separados por coma

`testcafe all test.js`: Utiliza todos los browsers disponibles

`testcafe 'firefox:headless' test.js`: No muestra el navegador

`testcafe 'chrome:emulation:device=iphone X' test.js`: Simula un celular

`testcafe chrome tests/sample-fixture.js --debug-on-fail`: Al fallar se ingresa al modo debug

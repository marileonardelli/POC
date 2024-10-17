# Testing Library

## ¿Qué es React Testing Library?
React Testing Library es una biblioteca que proporciona utilidades para realizar pruebas de componentes React. Su enfoque se centra en probar la aplicación tal como la experimentaría un usuario, es decir, interactuando con los componentes de la misma manera que lo haría un usuario real. Esta filosofía se alinea perfectamente con el principio de diseño de React que promueve la creación de interfaces de usuario declarativas y comprensibles.

## Tipos De Testing
Testing Library es una herramienta diseñada principalmente para realizar pruebas de integración y pruebas funcionales (o de usuario) en aplicaciones web, aunque también puede usarse para algunas pruebas unitarias. A continuación, se presentan los principales tipos de pruebas que se pueden realizar con Testing Library:

- __Pruebas funcionales o de usuario:__ Se enfocan en cómo el usuario interactúa con la aplicación. Verifican que los elementos de la interfaz de usuario (UI) respondan correctamente cuando el usuario hace clic, escribe en un formulario o realiza alguna acción. Este es el enfoque principal de Testing Library, simulando cómo un usuario real usaría la aplicación.
- __Pruebas de integración:__ Aseguran que diferentes partes del sistema funcionen bien juntas. Testing Library permite verificar que los componentes se comuniquen correctamente entre sí, probando cómo se comporta la UI al integrarse con otras partes del sistema.
- __Pruebas unitarias:__ Aunque no es el enfoque principal, Testing Library también puede usarse para probar unidades individuales (como componentes o funciones) de manera aislada. Sin embargo, para este tipo de pruebas es más común usar herramientas especializadas como Jest.

## Quienes lo utilizan

![Imagen de WhatsApp 2024-10-16 a las 21 40 24_048533b8](https://github.com/user-attachments/assets/b5c6cbbe-4f63-46dc-9ff6-ae2e497b4028)

![Imagen de WhatsApp 2024-10-16 a las 21 40 54_633c5513](https://github.com/user-attachments/assets/09d30e4c-e1d0-4431-aa04-a333666c3dae)


## Demanda y uso en el mercado
Las testing libraries son ampliamente utilizadas (dependiendo del framework de testing) en la industria debido a su papel crucial en el aseguramiento de la calidad. Estas herramientas permiten detectar y corregir errores en etapas tempranas del desarrollo, lo que reduce costos y tiempos de rectificación a largo plazo. Además, facilitan la creación de código más limpio y mantenible, ya que los desarrolladores pueden probar y refactorizar sin temor a romper funcionalidades existentes. Su uso no solo es común, sino que se ha convertido en una expectativa en proyectos profesionales.

## Curva de aprendizaje
Testing Library en si no tiene muchas complicaciones. Depende de la experiencia del desarrollador y cuán familiarizado está con tecnologías específicas. Para aquellos que estén experimentados con Js, React, etc. La curva de aprendizaje será leve. Caso contrario para aquellos nuevos desarrolladores en las pruebas de Frontend o React.
### Tecnologías, lenguajes y conocimientos previos necesarios:

- JavaScript/ES6:

__Nivel:__ Intermedio

Testing Library es una biblioteca basada en JavaScript, por lo que los usuarios necesitan tener un buen entendimiento de JavaScript, incluyendo características de ES6 como arrow functions, promises y desestructuración.

__Complejidad:__ Si no estás familiarizado con async/await y promises, probar código asíncrono (como solicitudes de red) podría ser complicado.

- React

__Nivel:__ Intermedio

Dado que la biblioteca de pruebas se utiliza para probar los componentes de React, es esencial comprender cómo funciona, incluidos los enlaces, el estado de los componentes y los métodos del ciclo de vida.

__Complejidad:__ Comprender cómo simular y probar componentes con estado o efectos secundarios en React puede resultar difícil para los principiantes.

- Node.js y npm

__Nivel:__ Fácil

Se necesita Node.js para ejecutar el entorno de prueba e instalar la biblioteca de pruebas usando npm o yarm.

__Complejidad:__ Si no se está familiarizado con npm o cómo configurar scripts, es posible que se tenga dificultades con la configuración inicial.

- Jest (u otros Test Runners)

__Nivel:__ Intermedio

Aunque Testing Library es independiente de las pruebas, a menudo se utiliza con Jest como el ejecutor de pruebas. Jest gestiona archivos de prueba, ejecuta las pruebas y proporciona utilidades como el mocking y los snapshots.

__Complejidad:__ Aprender la sintaxis específica de Jest y cómo configurarla con la biblioteca de pruebas (por ejemplo,mock functions, snapshots) requiere de tiempo.

- DOM APIs

__Nivel:__ Básico  

La Testing Library interactúa con el DOM, simulando interacciones del usuario final (como hacer clic o escribir). Los conocimientos básicos de cómo funciona el DOM (elementos, eventos, etc.) ayudarán.

__Complejidad:__ Comprender cómo dirigirse a los elementos utilizando 'getBy', 'queryBy' y otras funciones de consulta puede llevar algún tiempo para aquellos que no están familiarizados con la estructura del DOM.

#### Dificultad general:
Para un desarrollador con experiencia intermedia en React, JavaScript y Jest, Testing Library será relativamente sencillo. Sin embargo, puede ser un desafío para los principiantes debido a: 
- Cambio de mentalidad: La biblioteca fomenta las pruebas desde la perspectiva del usuario (es decir, centrándose en cómo interactúan los usuarios con la interfaz de usuario), que puede ser diferente de los enfoques más tradicionales de pruebas unitarias. 
- Pruebas asíncronas: El manejo de componentes que dependen de efectos secundarios, llamadas a la API o cambios de estado requiere conocimiento de estrategias de Testing asíncronas, como el uso de consultas 'waitFor' o 'findBy'.

## Ventajas 

- __Calidad:__ Los test nos permiten saber que el software cumple con los requisitos y funciona según las expectativas. Nos ayuda a identificar y corregir errores, lo cual mejora la calidad y confiabilidad del producto final.
- __Prevención de errores:__ El hacer tests a lo largo de un proyecto ocasiona que se encuentren errores inesperados y diversos problemas antes que el software salga a producción. Esto evitará que el software colapse y que ofrezca una mala experiencia al usuario final.
- __Ahorro de tiempo y recursos:__ Puede parecer que crear tests consuma tiempo y recursos, pero es todo lo contrario. Es una inversión que te ahorra tiempo a largo plazo y también dolores de cabeza. Si se solucionan problemas en una etapa temprana del desarrollo el proceso va a ser más rápido y económico que hacerlo después.
- __Facilita el mantenimiento:__ Un software bien probado y estructurado es más fácil de mantener y actualizar. Tener tests permite garantizar que si hay actualizaciones de librerías que se estén utilizando o cambios en los Apis y servicios que están siendo consumidos no introduzcan nuevos errores en el sistema. Esto ayuda a mantener la estabilidad del software a lo largo del tiempo.
- __Satisfacción:__ El resultado mejora la satisfacción del usuario final si se tiene una aplicación web que funciona correctamente, satisface las necesidades del usuario y no tiene errores imprevistos genera una experiencia más satisfactoria en el cliente. Esto aumenta la retención de los usuarios en la plataforma, genera opiniones positivas y recomendaciones.
- __Confianza en el equipo de desarrollo:__  Tener tests que aborden los principales problemas que pueden ocurrir así como que se aseguren de que cumplen las expectativas, a los desarrolladores les proporciona una mayor confianza en el trabajo diario. Pudiendo hacer refactoring, añadir nuevas funcionalidades sin miedo a que colapse algo.


## Comunidad
La comunidad de Testing Library es bastante activa y está centrada en el ecosistema de JavaScript y en mejorar la experiencia de testing para aplicaciones de frontend. Testing Library tiene varias versiones específicas, como React Testing Library, Vue Testing Library, Angular Testing Library, entre otras, lo que amplía su alcance en múltiples frameworks.

### Algunos recursos de la comunidad:

1. GitHub: La comunidad colabora principalmente a través de GitHub, donde se puede encontrar el código fuente, reportar problemas, sugerir mejoras, y contribuir con pull requests. El repositorio principal es https://github.com/testing-library
2. Discord: Testing Library cuenta con un canal en Discord donde los desarrolladores y usuarios pueden hacer preguntas, compartir ideas y solucionar problemas. Es uno de los medios más directos para interactuar con otros miembros de la comunidad.
3. Stack Overflow: Muchos desarrolladores utilizan Stack Overflow para discutir sobre Testing Library, buscar soluciones a problemas comunes y compartir buenas prácticas. Buscar preguntas etiquetadas con `react-testing-library` o `testing-library` suele ser útil.
4. Documentación oficial: La documentación oficial de Testing Library es un excelente recurso mantenido por la comunidad, con ejemplos prácticos y guías para quienes están comenzando. Puedes consultarla en su sitio web: [testing-library.com](https://testing-library.com/).
5. Cursos y tutoriales: Algunos miembros de la comunidad han producido cursos y tutoriales que se pueden encontrar en plataformas como YouTube, Egghead.io, y Udemy.


Explorar estas plataformas y mantenerse involucrado con la comunidad puede ayudar a aprovechar mejor Testing Library y mejorar las habilidades de testing en aplicaciones React o cualquier otro framework.

## Como instalarlo
### Instalación básica
Este módulo se distribuye a través de npm, que se incluye con Node y debe instalarse como una de las devDependencies de tu proyecto. Ejecuta el siguiente comando en la terminal para instalarlo:
``` bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```
#### Esto instalará:

`@testing-library/react` El paquete principal de Testing Library para React, que permite realizar pruebas basadas en el comportamiento del usuario en la interfaz.

`@testing-library/jest-dom` Este complemento añade funciones adicionales a Jest, como toBeInTheDocument y otras aserciones útiles para interactuar con el DOM de manera más natural y expresiva.

### Con TypeScript

Para obtener una cobertura de tipo completa en un proyecto de TypeScript, además de los paquetes anteriores, es recomendable instalar los tipos para React y React DOM. Esto asegura que el soporte para los tipos de TypeScript esté completamente integrado:

``` bash
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
```
De esta forma, se puede aprovechar las ventajas de TypeScript para una mejor validación estática de los tipos en tus pruebas.

## Configuracion basica
Configuración básica para Testing Library con React utilizando Jest (Con una aplicación React ejecutándose)

1. Instalar las dependencias de la biblioteca de pruebas de React

``` bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

2. Instalar dependencias de Jest
``` bash
npm install --save-dev jest jest-environment-jsdom
```

3. Configurar Jest

Se puede configurar Jest agregando la entrada jest en el archivo `package.json` o agregar un archivo llamado `jest.config.js` en la carpeta raíz. Para mantener `package.json` limpio utilizaremos `jest.config.js`

Cree un archivo denominado `jest.config.js` en la carpeta raíz y agregue la siguiente configuración de código.
``` TypeScript
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
}
```
4. Integre Jest con la biblioteca de pruebas de React
En la carpeta raíz:
``` TypeScript
import '@testing-library/jest-dom'
```

En el archivo `jest.config.js` que creamos anteriormente, agregamos otro campo de `setupFilesAfterEnv` y establecimos su valor en _`'<rootDir>/jest.setup.js'`_ esto le dirá a Jest que cada prueba que escribamos cargará la configuración desde `jest.setup.js` es decir, usará la biblioteca de pruebas de React tu jest.config.js debería verse así

``` TypeScript
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
```

5. Integrar Jest con ESLint

Configuramos ESLint para ayudarnos a limpiar el código. Por defecto, si se usa Jest con Eslint instalado, Eslint dará errores porque con las pruebas de Jest usamos algunas funciones directamente sin importarlas, y ESLint no acepta eso, por lo tanto necesitamos integrar Eslint con Jest.

``` bash
npm install --save-dev eslint-plugin-jest
```

Esto hará que Eslint reconozca el código Jest

`eslintrc.json` debería terminar luciendo así:
``` json
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "jest"],
    "rules": {
        "no-underscore-dangle": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "always",
                "jsx": "always"
            }
        ]
    }
}
```
6. Agregar scripts de prueba

En el `package.json` agregue los siguientes scripts:

``` json
scripts:{
... //scripts que ya tienes
test: "jest",
coverage: "jest --coverage"
```



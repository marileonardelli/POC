# Vitest 

## Descripción
Vitest es un framework de pruebas rápido, basado en Vite, que permite ejecutar pruebas unitarias, de integración y de componentes. Se destaca por su velocidad y su fácil integración con proyectos modernos de JavaScript, especialmente aquellos basados en **Vite**.

## Instalación
Para instalar Vitest en tu proyecto, ejecuta el siguiente comando:

```bash
npm install -D vitest

```
```bash
pnpm add -D vitest

```

> [!IMPORTANT]
> Vitest requiere Vite >=v5.0.0 y Node >=v18.0.0


## Configuración básica 
Agrega un script en el archivo `package.json` para ejecutar Vitest:

```json
{
  "scripts": {
    "test": "vitest"
  }
}

```

También puedes crear un archivo de configuración `vitest.config.ts` si necesitas configuraciones personalizadas:
```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
```
## Ejemplo de uso
Este es un ejemplo básico utilizado en el [get started](https://vitest.dev/guide/#writing-tests) de Vitest:

```typescript
// math.ts
export function sum(a: number, b: number): number {
  return a + b;
}

// math.test.ts
import { sum } from './math';
import { describe, it, expect } from 'vitest';

describe('sum', () => {
  it('debería sumar dos números correctamente', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm run test
```

```bash
pnpm run test
```

---

El uso de Vite dev server para transformar sus archivos durante los testing permite la creación de un corredor simple que no necesita lidiar con la complejidad de transformar archivos fuente y solo puede concentrarse en proporcionar el mejor DX durante las pruebas. Un test runner que utiliza la misma configuración de su aplicación (a través de vite.config.js), compartiendo un proceso de transformación común durante el tiempo de desarrollo, construcción y prueba. Esto es extensible con la misma API de complemento que le permite a usted y a los mantenedores de sus herramientas proporcionar una integración de primera clase con Vite. Una herramienta que se construye pensando en Vite desde el principio, aprovechando sus mejoras en DX, como su Hot Module Reload (HMR) instantáneo. Este es Vitest, un marco de pruebas de próxima generación impulsado por Vite.

---

## Principales features
### Velocidad
Diseñado para ser rápido, Vitest utiliza Vite, lo que permite una recarga
instantánea y una ejecución rápida de pruebas.

## Soporte para TypeScript
Integración nativa con TypeScript, facilitando pruebas en proyectos que lo
utilizan.

### Mocks y spies
Herramientas integradas para hacer mocks y spies, simplificando las pruebas
de funciones y módulos.

### Pruebas unitarias y de integración
Soporta tanto pruebas unitarias como pruebas de integración.

### Snapshot testing 
Permite realizar pruebas de instantáneas para componentes y otros elementos.

### Vite UI
Impulsado por Vite, Vitest también cuenta con un servidor de desarrollo cuando se 
ejecutan las pruebas. Esto permite que Vitest ofrezca una interfaz atractiva para ver 
e interactuar con tus pruebas.


## Principales sponsors y contribuidores

Vitest es desarrollado y mantenido por la comunidad y se basa en el trabajo
de Vite, una herramienta creada por Evan You, el creador de Vue.js.

## Sponsors

### Vladimir Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sheremet-va/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sheremet-va/static/sponsors.svg'/>
  </a>
</p>

### Anthony Fu Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

### Patak Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/patak-dev/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/patak-dev/static/sponsors.svg'/>
  </a>
</p>


## Curva de aprendizaje

La curva de aprendizaje es relativamente baja, especialmente para aquellos
que ya están familiarizados con Vite o con herramientas de pruebas como
Jest. Su sintaxis es similar a la de Jest, lo que facilita la transición.

## Repositorio y Documentación

El repositorio oficial de Vitest está disponible en GitHub: Vitest GitHub.
https://github.com/vitest-dev/vitest. Su documentación se encuentra en 
https://vitest.dev de donde sacamos la mayoría de la información. La página te da 
una introducción de lo que es Vitest y porqué elegirlo sobre otras opciones. Tiene
 una guia para comenzar a usar el Framework y una larga carga de información 
sobre este, facilitando la carga de aprendizaje de los nuevos usuarios.


## Soporte y actualizaciones

Recibe actualizaciones frecuentes debido a su naturaleza activa en la
comunidad. Las nuevas versiones suelen incluir mejoras y correcciones de
errores. En el último tiempo se han arreglado los llamados blockers en Jest que no 
ayudaban en la compatibilidad entre Vitest y Jest, por lo tanto hoy en día es posible
 utilizar Jest en configuraciones de Vite.  Esto es posible gracias a @sodatea que 
hizo vite-jest, cuyo objetivo es proporcionar integración Vite de primera clase para 
Jest, por lo que esta es una opción válida para tus pruebas unitarias.

Cuenta con soporte de fragmentación, workspace, Out-of-the-box
TypeScript / JSX.

Para obtener soporte para TypeScript `import.meta.vitest`, añade `vitest/importMeta`
a tu `tsconfig.json`

Esta característica podría ser útil para:

- Pruebas unitarias para funciones o utilidades de pequeño alcance
- Prototipos
- Afirmación en línea

Se recomienda utilice archivos de prueba separados en su lugar para pruebas más 
complejas como componentes o pruebas E2E.

## Comunidad y popularidad
Vitest ha ganado popularidad rápidamente, especialmente entre los
desarrolladores que usan Vite y Vue. Gracias a que es familiar de Vite la comunidad 
es activa, y se pueden encontrar discusiones y soporte en foros y en GitHub.

<img>![Vitest](https://img.shields.io/npm/dm/vitest)</img>

<img>![Vitest](https://img.shields.io/github/last-commit/vitest-dev/vitest)</img>


<img>![Vitest](https://img.shields.io/npm/v/vitest)</img>

## Demanda y uso en el mercado
Aunque es relativamente nuevo, su demanda está creciendo, especialmente
entre los proyectos que utilizan Vite y frameworks modernos como Vue y
React. Es cada vez más adoptado en proyectos nuevos.

La [extensión](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) de VS Code tiene actualmente 192k de descargas

En github lo utilizan 311k <img>![Vitest](https://img.shields.io/github/stars/vitest-dev/vitest)</img> <img> ![Vitest](https://img.shields.io/github/forks/vitest-dev/vitest)</img> <img>![Vitest](https://img.shields.io/github/issues/vitest-dev/vitest)</img> <img>![Vitest](https://img.shields.io/github/last-commit/vitest-dev/vitest)</img>



## ¿Admiten end to end? / Alcance

Vitest no está diseñado específicamente para pruebas de extremo a extremo
(E2E). Se enfoca en pruebas unitarias y de integración. Para E2E, se suelen
usar herramientas como Cypress o Playwright.
Compatibilidad:

Vitest es compatible con proyectos que utilizan Vite y también se puede usar
en otros entornos. Funciona bien con TypeScript y JavaScript, y puede
integrarse en flujos de trabajo existentes que utilicen Jest o Mocha. En caso de
pruebas con React o angular también se complementa muy bien con Testing 
Library.


## Conclusión
Dado el gran nivel de adopción de Jest, Vitest ofrece una API compatible que te
permite usarlo como un reemplazo directo en la mayoría de los proyectos. También
incluye las características más comunes que se requieren al configurar pruebas
unitarias (mocking, snapshots, cobertura). Vitest se preocupa mucho por el
rendimiento y utiliza hilos de trabajo (Worker threads) para ejecutar la mayor
cantidad de tareas posibles en paralelo. En algunos casos, las pruebas se ejecutan
hasta diez veces más rápido. El modo de observación (watch mode) está habilitado
por defecto, alineándose con la filosofía de Vite de priorizar una experiencia de
desarrollo optimizada. Incluso con todas estas mejoras en la experiencia del
desarrollador, Vitest sigue siendo ligero al seleccionar cuidadosamente sus
dependencias (o integrando directamente las partes necesarias).

Vitest busca posicionarse como la opción preferida para ejecutar pruebas en
proyectos de Vite, y como una alternativa sólida incluso para proyectos que no
utilizan Vite.


## Comandos útiles
- `pnpm run test`: Ejecuta todas las pruebas.
- `pnpm run test -- --watch`: Ejecuta las pruebas en modo de observación, ideal para el desarrollo.
- `pnpm run test -- --coverage`: Genera un reporte de cobertura de código.

## Recursos adicionales
- [Documentación oficial de Vitest](https://vitest.dev/)




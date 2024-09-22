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

> [!TIP]
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

## Comandos útiles
- `pnpm run test`: Ejecuta todas las pruebas.
- `pnpm run test -- --watch`: Ejecuta las pruebas en modo de observación, ideal para el desarrollo.
- `pnpm run test -- --coverage`: Genera un reporte de cobertura de código.

## Recursos adicionales
- [Documentación oficial de Vitest](https://vitest.dev/)




# `character.controller.test.ts`

Dado que ya tenemos una estructura del proyecto, lo que debemos hacer son pruebas unitarias para el controlador que maneja las operaciones CRUD. El objetivo de esto es simular las operaciones del repositorio y validar que el controlador responda adecuadamente a las solicitudes.

---

## Configuración del test para el CRUD en `character.controller.test.ts`

Vamos a utilizar Vitest para crear mocks del repositorio y probar el comportamiento del controlador de manera aislada.

Para eso utilizamos las siguientes funciones de Vitest

1. `vi.fn()`
2. `vi.spyOn()`
3. `mockReturnThis()`
4. `vi.mock`

---

## Explicación:

1. **Mocks de Request y Response**: Usamos funciones que simulan las interfaces `Request` y `Response` de Express para evitar usar un servidor real. Estas funciones permiten testear los controladores directamente sin un servidorHTTP y sin usar Mock Service Worker.
2. **Mock del Repository**: Usamos vi.spyOn para crear mocks de las funciones del `CharacterRepository`, lo que nos permite controlar lo que devuelven en cada prueba y verificar que los controladores reaccionen de manera adecuada.
3. **Test de cada operación CRUD**:
    - `findAll`: Verifica que se devuelvan todos los personajes correctamente.
    - `findOne`: Verifica que un personaje sea devuelto o que se devuelva un `404` si no existe.
    - `add`: Verifica que un nuevo personaje sea añadido y se devuelva con unestado `201`.
    - `update`: Verifica que un personaje sea actualizado o que se devuelva un `404` si no se encuentra.
    - `remove`: Verifica que un personaje sea eliminado o que se devuelva un `404` si no se encuentra.


## Que hace `vi.fn()` y `vi.spyOn()`?

Toda esta información fue extraída del sitio oficial de [Vitest](https://vitest.dev/api/vi.html#vi-fn)

## Mocking de funciones y objetos

### vi.fn
#### - type: `(fn?: Function) => Mock`

Esta función crea un spy de una función, aunque se puede iniciar sin uno. Cada vez que se invoca una función, almacena sus argumentos de llamada, devoluciones y instancias. Además, puedes manipular su comportamiento con métodos. Si no se da ninguna función, se burla volverá `undefined`, cuando se invoca.

``` typescript

const getApples = vi.fn(() => 0)

getApples()

expect(getApples).toHaveBeenCalled()
expect(getApples).toHaveReturnedWith(0)

getApples.mockReturnValueOnce(5)

const res = getApples()
expect(res).toBe(5)
expect(getApples).toHaveNthReturnedWith(2, 5)

```

### vi.spyOn
#### - type: `<T, K extends keyof T>(object: T, method: K, accessType?: 'get' |'set') => MockInstance`

Crea un spy en un método o getter/setter de un objeto similar a vi.fn(). Devuelve una función simulada.

``` typescript 

let apples = 0
const cart = {
  getApples: () => 42,
}

const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => apples)
apples = 1

expect(cart.getApples()).toBe(1)

expect(spy).toHaveBeenCalled()
expect(spy).toHaveReturnedWith(1)

```
### vi.mock
#### - Type: `(path: string, factory?: MockOptions | ((importOriginal: () => unknown) => unknown)) => void`
#### - Type: `<T>(path: Promise<T>, factory?: MockOptions | ((importOriginal: () => T) => T | Promise<T>)) => void`

Esta funcion permite simular un módulo importado. Puede proporcionar una función de fábrica que devuelva un objeto simulado o un objeto con propiedades simuladas. La función de fábrica recibe una función que importa el módulo original. Si se proporciona una función de fábrica, se llamará en lugar de importar el módulo original.


> [!WARNING]
> vi.mock funciona solo para módulos importados con `import` o `require`.

Desde Vitest 2.1, también puede proporcionar un objeto con una propiedad `spy` en lugar de una función de fábrica. Si `spy` es `true`, entonces Vitest simulará automáticamente el módulo como de costumbre, pero no anulará la implementación de las exportaciones. Esto es útil si solo desea afirmar que otro método llamó correctamente al método exportado.

``` typescript
import { calculator } from './src/calculator.ts'

vi.mock('./src/calculator.ts', { spy: true })

// calls the original implementation,
// but allows asserting the behaviour later
const result = calculator(1, 2)

expect(result).toBe(3)
expect(calculator).toHaveBeenCalledWith(1, 2)
expect(calculator).toHaveReturned(3)

```

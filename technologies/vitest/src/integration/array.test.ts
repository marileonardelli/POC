import { expect, test } from 'vitest'
import filtrarPositivos from '../../src/integration/array.js'

test('filtrarPositivos([1, 2, -1, -2, 3])', () => {
  expect(filtrarPositivos([1, 2, -1, -2, 3, 4])).toEqual([1, 2, 3, 4])
})
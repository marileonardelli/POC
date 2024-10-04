// tests/crud.character.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import request from 'supertest';
import express from 'express';
import { findAll, findOne, add, update, remove, sanitizeCharacterInput } from '../../src/character/character.controller'; // Ruta corregida
import { orm } from '../../src/shared/db/orm'; // Ruta corregida
import { Character } from '../../src/character/character.entity'; // Ruta corregida
import { EntityManager } from '@mikro-orm/mysql';

const emMock = {
  find: vi.fn(),
  findOneOrFail: vi.fn(),
  create: vi.fn(),
  flush: vi.fn(),
  assign: vi.fn(),
  getReference: vi.fn(),
  removeAndFlush: vi.fn(),
};

orm.em = emMock as unknown as EntityManager;

const app = express();
app.use(express.json());
app.use(sanitizeCharacterInput); 
app.get('/characters', findAll);
app.get('/characters/:id', findOne);
app.post('/characters', add);
app.put('/characters/:id', update);
app.delete('/characters/:id', remove);

describe('Character CRUD Controller', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debería encontrar todos los personajes', async () => {
    const mockCharacters = [{ name: 'John', characterClass: 'Warrior' }];
    emMock.find.mockResolvedValue(mockCharacters); 

    const res = await request(app).get('/characters');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('found all characters');
    expect(res.body.data).toEqual(mockCharacters);
    expect(emMock.find).toHaveBeenCalledWith(Character, {}, { populate: ['characterClass', 'items'] });
  });

  it('debería encontrar un personaje por ID', async () => {
    const mockCharacter = { id: 1, name: 'John', characterClass: 'Warrior' };
    emMock.findOneOrFail.mockResolvedValue(mockCharacter); 
    const res = await request(app).get('/characters/1');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('found character');
    expect(res.body.data).toEqual(mockCharacter);
    expect(emMock.findOneOrFail).toHaveBeenCalledWith(Character, { id: 1 }, { populate: ['characterClass', 'items'] });
  });

  it('debería crear un nuevo personaje', async () => {
    const mockCharacter = { name: 'John', characterClass: 'Warrior', level: 1 };
    emMock.create.mockReturnValue(mockCharacter);

    const res = await request(app).post('/characters').send({
      name: 'John',
      characterClass: 'Warrior',
      level: 1,
    });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('character created');
    expect(res.body.data).toEqual(mockCharacter);
    expect(emMock.create).toHaveBeenCalledWith(Character, {
      name: 'John',
      characterClass: 'Warrior',
      level: 1,
    });
    expect(emMock.flush).toHaveBeenCalled();
  });

  it('debería actualizar un personaje existente', async () => {
    const mockCharacter = { id: 1, name: 'John', characterClass: 'Warrior', level: 2 };
    emMock.findOneOrFail.mockResolvedValue(mockCharacter);

    const res = await request(app).put('/characters/1').send({
      name: 'John Updated',
      level: 3,
    });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('character updated');
    expect(res.body.data).toEqual(mockCharacter);
    expect(emMock.assign).toHaveBeenCalledWith(mockCharacter, {
      name: 'John Updated',
      level: 3,
    });
    expect(emMock.flush).toHaveBeenCalled();
  });

  it('debería eliminar un personaje por su ID', async () => {
    const mockCharacter = { id: 1, name: 'John', characterClass: 'Warrior' };
    emMock.getReference.mockReturnValue(mockCharacter);

    const res = await request(app).delete('/characters/1');

    expect(res.status).toBe(200);
    expect(emMock.getReference).toHaveBeenCalledWith(Character, 1);
    expect(emMock.removeAndFlush).toHaveBeenCalledWith(mockCharacter);
  });
});

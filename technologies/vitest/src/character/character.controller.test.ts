import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import { CharacterRepository } from './character.repository';
import { Character } from './character.entity';
import { findAll, findOne, add, update, remove } from './character.controller';


vi.mock('./character.controller', {spy: true}); // Mock para el controlador

// Mock para Request y Response de Express
const mockRequest = () => {
  const req: Partial<Request> = {
    body: {},
    params: {}
  };
  return req as Request;
};

const mockResponse = () => {
  const res: Partial<Response> = {
    json: vi.fn(),
    status: vi.fn().mockReturnThis(),
    send: vi.fn().mockReturnThis(),
  };
  return res as Response;
};

describe('CharacterController CRUD', () => {
  let repository: CharacterRepository;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  // Esto es un Hook de Vitest que se ejecuta antes de cada test
  // Aquí se inicializan las variables que se van a utilizar en los tests
  // y se mockean las funciones del repositorio, del controlador y de Express
  beforeEach(() => {
    repository = new CharacterRepository();
    req = mockRequest();
    res = mockResponse();
    next = vi.fn();
    
    // Mock de las funciones del repositorio
    repository.findAll = vi.fn();
    repository.findOne = vi.fn();
    repository.add = vi.fn();
    repository.update = vi.fn();
    repository.delete = vi.fn();
  });

  it('should return all characters', () => {
    repository.findAll();

    findAll(req, res);


    expect(res.json).toHaveBeenCalledWith({
      "data": [
        {
          "name": "Darth Vader",
          "characterClass": "Sith",
          "level": 11,
          "hp": 101,
          "mana": 22,
          "attack": 11,
          "items": [
            "Lightsaber",
            "Death Star"
          ],
          "id": "1234"
        },
        {
          "name": "Yoda",
          "characterClass": "Jedi",
          "level": 12,
          "hp": 120,
          "mana": 25,
          "attack": 12,
          "items": [
            "Lightsaber",
            "Wisdom"
          ],
          "id": "9101"
        }
      ]
    });

    

  });

  it('should return a character by id', () => {
    req.params.id = '1234';
    repository.findOne({ id: '1234' });

    findOne(req, res);

    expect(res.json).toHaveBeenCalledWith({
          "data": {
            "name": "Darth Vader",
            "characterClass": "Sith",
            "level": 11,
            "hp": 101,
            "mana": 22,
            "attack": 11,
            "items": [
              "Lightsaber",
              "Death Star"
            ],
            "id": "1234"
          }
    });
  });

  it('should return 404 if character not found', () => {
    req.params.id = '0000';
    repository.findOne({ id: '0000'});

    findOne(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });

  it('should add a new character', () => {
    req.body.sanitizedInput = {
      name: 'Leia Organa',
      characterClass: 'Rebel Leader',
      level: 15,
      hp: 120,
      mana: 80,
      attack: 35,
      items: ['Blaster', 'Diplomacy'],
      id: '5678'
    };

   
    add(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
            message: "Character created",
            data: {
              name: "Leia Organa",
              characterClass: "Rebel Leader",
              level: 15,
              hp: 120,
              mana: 80,
              attack: 35,
              items: [
                "Blaster",
                "Diplomacy"
              ],
              id: "5678"
            }
          });
  });


  it('should update an existing character', () => {
    req.body.sanitizedInput = {
      name: 'Leia Organa',
      level: 20
    };
    req.params.id = '5678';

    repository.update(
      new Character('Leia Organa', 'Rebel Leader', 20, 120, 80, 35, ['Blaster', 'Diplomacy'], '5678')
    );

    update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Character updated successfully',
      data: {
        name: 'Leia Organa',
        characterClass: 'Rebel Leader',
        level: 20,
        hp: 120,
        mana: 80,
        attack: 35,
        items: ['Blaster', 'Diplomacy'],
        id: '5678'
      }
    });
  });

  it('should return 404 when updating a non-existent character', () => {
    req.body.sanitizedInput = {
      name: 'Han Solo',
      level: 20
    };
    req.params.id = '9999';

    repository.update(new Character('Han Solo', 'Smuggler', 20, 100, 50, 30, ['Blaster'], '9999'));

    update(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });

  it('should delete a character by id', () => {
    req.params.id = '5678';

    repository.delete(
      new Character('Leia Organa', 'Rebel Leader', 20, 120, 80, 35, ['Blaster', 'Diplomacy'], '5678')
    );

    remove(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character deleted successfully' });
  });

  it('should return 404 when deleting a non-existent character', () => {
    req.params.id = '9999';

    repository.delete({ id: '9999' });

    remove(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });
});



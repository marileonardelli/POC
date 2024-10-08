import assert from "assert"; // Usamos assert nativo de Node.js
import { CharacterRepository } from "../../dist/character/character.repository.js";
import { Character } from "../../dist/character/character.entity.js";
import {
  findAll,
  findOne,
  add,
  update,
  remove,
} from "../../dist/character/character.controller.js";

// Mock para Request y Response de Express
const mockRequest = () => {
  const req = {
    body: {},
    params: {},
  };
  return req;
};

const mockResponse = () => {
  const res = {
    json: () => {},
    status: () => res,
    send: () => res,
  };
  return res;
};

describe("CharacterController CRUD", () => {
  let repository;
  let req;
  let res;
  let next;

  beforeEach(() => {
    repository = new CharacterRepository();
    req = mockRequest();
    res = mockResponse();
    next = () => {}; // No es necesario en este contexto

    // Mock de las funciones del repositorio
    repository.findAll = () =>
      Promise.resolve([
        new Character(
          "Darth Vader",
          "Sith",
          11,
          101,
          22,
          11,
          ["Lightsaber", "Death Star"],
          "1234"
        ),
        new Character(
          "Yoda",
          "Jedi",
          12,
          120,
          25,
          12,
          ["Lightsaber", "Wisdom"],
          "9101"
        ),
      ]);

    repository.findOne = (id) =>
      id === "1234"
        ? Promise.resolve(
            new Character(
              "Darth Vader",
              "Sith",
              11,
              101,
              22,
              11,
              ["Lightsaber", "Death Star"],
              "1234"
            )
          )
        : Promise.resolve(null);

    repository.add = (character) => Promise.resolve(character);

    repository.update = (character) => Promise.resolve(character);

    repository.delete = (id) =>
      id === "5678" ? Promise.resolve() : Promise.reject();
  });

  it("should return all characters", async () => {
    await findAll(req, res);

    const expectedResponse = {
      data: [
        {
          name: "Darth Vader",
          characterClass: "Sith",
          level: 11,
          hp: 101,
          mana: 22,
          attack: 11,
          items: ["Lightsaber", "Death Star"],
          id: "1234",
        },
        {
          name: "Yoda",
          characterClass: "Jedi",
          level: 12,
          hp: 120,
          mana: 25,
          attack: 12,
          items: ["Lightsaber", "Wisdom"],
          id: "9101",
        },
      ],
    };

    assert.deepStrictEqual(res.json, expectedResponse);
  });

  it("should return a character by id", async () => {
    req.params.id = "1234";
    await findOne(req, res);

    const expectedResponse = {
      data: {
        name: "Darth Vader",
        characterClass: "Sith",
        level: 11,
        hp: 101,
        mana: 22,
        attack: 11,
        items: ["Lightsaber", "Death Star"],
        id: "1234",
      },
    };

    assert.deepStrictEqual(res.json, expectedResponse);
  });

  it("should return 404 if character not found", async () => {
    req.params.id = "0000";
    await findOne(req, res);

    assert.strictEqual(res.status, 404);
    assert.deepStrictEqual(res.send, { message: "Character not found" });
  });

  it("should add a new character", async () => {
    req.body.sanitizedInput = {
      name: "Leia Organa",
      characterClass: "Rebel Leader",
      level: 15,
      hp: 120,
      mana: 80,
      attack: 35,
      items: ["Blaster", "Diplomacy"],
      id: "5678",
    };

    await add(req, res);

    assert.strictEqual(res.status, 201);
    assert.deepStrictEqual(res.send, {
      message: "Character created",
      data: {
        name: "Leia Organa",
        characterClass: "Rebel Leader",
        level: 15,
        hp: 120,
        mana: 80,
        attack: 35,
        items: ["Blaster", "Diplomacy"],
        id: "5678",
      },
    });
  });

  it("should update an existing character", async () => {
    req.body.sanitizedInput = {
      name: "Leia Organa",
      level: 20,
    };
    req.params.id = "5678";

    await update(req, res);

    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(res.send, {
      message: "Character updated successfully",
      data: {
        name: "Leia Organa",
        characterClass: "Rebel Leader",
        level: 20,
        hp: 120,
        mana: 80,
        attack: 35,
        items: ["Blaster", "Diplomacy"],
        id: "5678",
      },
    });
  });

  it("should return 404 when updating a non-existent character", async () => {
    req.body.sanitizedInput = {
      name: "Han Solo",
      level: 20,
    };
    req.params.id = "9999";

    await update(req, res);

    assert.strictEqual(res.status, 404);
    assert.deepStrictEqual(res.send, { message: "Character not found" });
  });

  it("should delete a character by id", async () => {
    req.params.id = "5678";

    await remove(req, res);

    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(res.send, {
      message: "Character deleted successfully",
    });
  });

  it("should return 404 when deleting a non-existent character", async () => {
    req.params.id = "9999";

    await remove(req, res);

    assert.strictEqual(res.status, 404);
    assert.deepStrictEqual(res.send, { message: "Character not found" });
  });
});

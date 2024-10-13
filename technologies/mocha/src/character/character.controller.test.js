import sinon from "sinon";
import {
  findOne,
  add,
  update,
  remove,
} from "../../dist/character/character.controller.js";
import { CharacterRepository } from "../../dist/character/character.repository.js";
import { Character } from "../../dist/character/character.entity.js";
import assert from "assert";

function mockRequest() {
  return {
    body: {},
    params: {},
  };
}

function mockResponse() {
  return {
    json: sinon.spy(),
    status: sinon.stub().returnsThis(),
    send: sinon.stub().returnsThis(),
  };
}

// PARALELO y test dinamico

function sumToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

describe("add()", function () {
  function add(args) {
    return args.reduce((prev, curr) => prev + curr, 0);
  }

  let startTime;

  before(function () {
    startTime = Date.now();
  });

  after(function () {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Test suite took ${duration}ms to run.`);
  });

  let tests = [];

  for (let i = 0; i < 7000; i++) {
    let newElement = { args: [], expected: sumToN(i + 1) };

    for (let j = 0; j < i + 1; j++) {
      newElement.args.push(j + 1);
    }

    tests.push(newElement);
  }

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});

describe("CharacterController CRUD", function () {
  let repository;
  let req;
  let res;
  let next;

  beforeEach(function () {
    repository = new CharacterRepository();
    req = mockRequest();
    res = mockResponse();
    next = sinon.spy();

    // Mockear mÃ©todos del repositorio
    sinon.stub(repository, "findAll");
    sinon.stub(repository, "findOne");
    sinon.stub(repository, "add");
    sinon.stub(repository, "update");
    sinon.stub(repository, "delete");
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should return 404 if character not found", function () {
    req.params.id = "0000";
    repository.findOne.returns(null);

    findOne(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 404);
    sinon.assert.calledOnce(res.send);
    sinon.assert.calledWith(res.send, { message: "Character not found" });
  });

  it("should add a new character", function () {
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

    add(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 201);
    sinon.assert.calledOnce(res.send);
    sinon.assert.calledWith(res.send, {
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

  it("should update an existing character", function () {
    req.body.sanitizedInput = {
      name: "Leia Organa",
      level: 20,
    };
    req.params.id = "5678";

    repository.update.returns(
      new Character(
        "Leia Organa",
        "Rebel Leader",
        20,
        120,
        80,
        35,
        ["Blaster", "Diplomacy"],
        "5678"
      )
    );

    update(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.send);
    sinon.assert.calledWith(res.send, {
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

  it("should return 404 when updating a non-existent character", function () {
    req.body.sanitizedInput = {
      name: "Han Solo",
      level: 20,
    };
    req.params.id = "9999";

    repository.update.returns(null);

    update(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 404);
    sinon.assert.calledOnce(res.send);
    sinon.assert.calledWith(res.send, { message: "Character not found" });
  });

  it("should delete a character by id", function () {
    req.params.id = "5678";

    repository.delete.returns(
      new Character(
        "Leia Organa",
        "Rebel Leader",
        20,
        120,
        80,
        35,
        ["Blaster", "Diplomacy"],
        "5678"
      )
    );

    remove(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.send);
    sinon.assert.calledWith(res.send, {
      message: "Character deleted successfully",
    });
  });

  it("should return 404 when deleting a non-existent character", function () {
    req.params.id = "9999";

    repository.delete.returns(null);

    remove(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 404);
    sinon.assert.calledOnce(res.send);
    sinon.assert.calledWith(res.send, { message: "Character not found" });
  });
});

// async

function delayedAdd(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

describe("delayedAdd()", function () {
  it("should add 1 and 2", async function () {
    const result = await delayedAdd(1, 2);
    assert.strictEqual(result, 3);
  });

  it("should add 5 and 5", async function () {
    const result = await delayedAdd(5, 5);
    assert.strictEqual(result, 10);
  });

  it("should add 10 and 20", async function () {
    const result = await delayedAdd(10, 20);
    assert.strictEqual(result, 30);
  });

  it("should add 0 and 0", async function () {
    const result = await delayedAdd(0, 0);
    assert.strictEqual(result, 0);
  });
});

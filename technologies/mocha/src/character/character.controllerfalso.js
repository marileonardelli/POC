// import assert from "assert"; // Usamos assert nativo de Node.js
// import { CharacterRepository } from "../../dist/character/character.repository.js";
// import { findAll } from "../../dist/character/character.controller.js";

// // Mock para Request y Response de Express
// function mockFunction() {
//   const mock = function (...args) {
//     mock.calls.push(args);
//     return mock.returnValue;
//   };

//   mock.calls = [];
//   mock.returnValue = undefined;

//   mock.mockReturnValue = function (value) {
//     mock.returnValue = value;
//   };

//   // Agregar mockReturnThis para retornar 'this'
//   mock.mockReturnThis = function () {
//     return mock; // Retorna el propio mock
//   };

//   return mock;
// }

// function toHaveBeenCalledWith(mockFn, expectedArgs) {
//   const calls = mockFn.calls || [];
//   const calledWithExpectedArgs = calls.some((call) => {
//     return JSON.stringify(call) === JSON.stringify(expectedArgs);
//   });

//   if (!calledWithExpectedArgs) {
//     throw new Error(
//       `Expected function to have been called with ${JSON.stringify(
//         expectedArgs
//       )} but it was not.`
//     );
//   }
// }

// const mockRequest = () => {
//   return {
//     body: {},
//     params: {},
//   };
// };

// const mockResponse = () => {
//   const res = {
//     data: null, // Para almacenar los datos enviados a res.json
//     json: function (obj) {
//       this.data = obj.data; // Guardamos el dato en la propiedad data
//     },
//     status: mockFunction().mockReturnThis(),
//     send: mockFunction().mockReturnThis(),
//   };

//   return res;
// };

// describe("CharacterController CRUD", () => {
//   let repository;
//   let req;
//   let res;

//   beforeEach(() => {
//     repository = new CharacterRepository();
//     req = mockRequest();
//     res = mockResponse();

//     console.log(JSON.stringify(res)); // Imprime el objeto res inicial (vacío)

//     // Mock de las funciones del repositorio
//     repository.findAll = mockFunction().mockReturnValue([
//       {
//         name: "Darth Vader",
//         characterClass: "Sith",
//         level: 11,
//         hp: 101,
//         mana: 22,
//         attack: 11,
//         items: ["Lightsaber", "Death Star"],
//         id: "1234",
//       },
//       {
//         name: "Yoda",
//         characterClass: "Jedi",
//         level: 12,
//         hp: 120,
//         mana: 25,
//         attack: 12,
//         items: ["Lightsaber", "Wisdom"],
//         id: "9101",
//       },
//     ]);
//   });

//   it("should return all characters", () => {
//     findAll(req, res);
//     console.log(JSON.stringify(res)); // Debería mostrar el objeto res después de llamar a json

//     toHaveBeenCalledWith(res.json, {
//       data: [
//         {
//           name: "Darth Vader",
//           characterClass: "Sith",
//           level: 11,
//           hp: 101,
//           mana: 22,
//           attack: 11,
//           items: ["Lightsaber", "Death Star"],
//           id: "1234",
//         },
//         {
//           name: "Yoda",
//           characterClass: "Jedi",
//           level: 12,
//           hp: 120,
//           mana: 25,
//           attack: 12,
//           items: ["Lightsaber", "Wisdom"],
//           id: "9101",
//         },
//       ],
//     });
//   });
// });

// // it("should return a character by id", () => {
// //   req.params.id = "1234";
// //   repository.findOne({ id: "1234" });

// //   findOne(req, res);

// //   expect(res.json).toHaveBeenCalledWith({
// //     data: {
// //       name: "Darth Vader",
// //       characterClass: "Sith",
// //       level: 11,
// //       hp: 101,
// //       mana: 22,
// //       attack: 11,
// //       items: ["Lightsaber", "Death Star"],
// //       id: "1234",
// //     },
// //   });
// // });

// // it("should return 404 if character not found", () => {
// //   req.params.id = "0000";
// //   repository.findOne({ id: "0000" });

// //   findOne(req, res);

// //   expect(res.status).toHaveBeenCalledWith(404);
// //   expect(res.send).toHaveBeenCalledWith({ message: "Character not found" });
// // });

// // it("should add a new character", () => {
// //   req.body.sanitizedInput = {
// //     name: "Leia Organa",
// //     characterClass: "Rebel Leader",
// //     level: 15,
// //     hp: 120,
// //     mana: 80,
// //     attack: 35,
// //     items: ["Blaster", "Diplomacy"],
// //     id: "5678",
// //   };

// //   add(req, res);
// //   expect(res.status).toHaveBeenCalledWith(201);
// //   expect(res.send).toHaveBeenCalledWith({
// //     message: "Character created",
// //     data: {
// //       name: "Leia Organa",
// //       characterClass: "Rebel Leader",
// //       level: 15,
// //       hp: 120,
// //       mana: 80,
// //       attack: 35,
// //       items: ["Blaster", "Diplomacy"],
// //       id: "5678",
// //     },
// //   });
// // });

// // it("should update an existing character", () => {
// //   req.body.sanitizedInput = {
// //     name: "Leia Organa",
// //     level: 20,
// //   };
// //   req.params.id = "5678";

// //   repository.update(
// //     new Character(
// //       "Leia Organa",
// //       "Rebel Leader",
// //       20,
// //       120,
// //       80,
// //       35,
// //       ["Blaster", "Diplomacy"],
// //       "5678"
// //     )
// //   );

// //   update(req, res);

// //   expect(res.status).toHaveBeenCalledWith(200);
// //   expect(res.send).toHaveBeenCalledWith({
// //     message: "Character updated successfully",
// //     data: {
// //       name: "Leia Organa",
// //       characterClass: "Rebel Leader",
// //       level: 20,
// //       hp: 120,
// //       mana: 80,
// //       attack: 35,
// //       items: ["Blaster", "Diplomacy"],
// //       id: "5678",
// //     },
// //   });
// // });

// // it("should return 404 when updating a non-existent character", () => {
// //   req.body.sanitizedInput = {
// //     name: "Han Solo",
// //     level: 20,
// //   };
// //   req.params.id = "9999";

// //   repository.update(
// //     new Character(
// //       "Han Solo",
// //       "Smuggler",
// //       20,
// //       100,
// //       50,
// //       30,
// //       ["Blaster"],
// //       "9999"
// //     )
// //   );

// //   update(req, res);

// //   expect(res.status).toHaveBeenCalledWith(404);
// //   expect(res.send).toHaveBeenCalledWith({ message: "Character not found" });
// // });

// // it("should delete a character by id", () => {
// //   req.params.id = "5678";

// //   repository.delete(
// //     new Character(
// //       "Leia Organa",
// //       "Rebel Leader",
// //       20,
// //       120,
// //       80,
// //       35,
// //       ["Blaster", "Diplomacy"],
// //       "5678"
// //     )
// //   );

// //   remove(req, res);

// //   expect(res.status).toHaveBeenCalledWith(200);
// //   expect(res.send).toHaveBeenCalledWith({
// //     message: "Character deleted successfully",
// //   });
// // });

// // it("should return 404 when deleting a non-existent character", () => {
// //   req.params.id = "9999";

// //   repository.delete({ id: "9999" });

// //   remove(req, res);

// //   expect(res.status).toHaveBeenCalledWith(404);
// //   expect(res.send).toHaveBeenCalledWith({ message: "Character not found" });
// // });

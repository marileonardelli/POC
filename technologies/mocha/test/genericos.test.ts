import { assert, expect } from "chai";

// async

function delayedAdd(a: number, b: number) {
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

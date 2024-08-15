import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr.test.js", () => {
  test("Debe de retornar un string y un numero", () => {
    const [letter, numbers] = retornaArreglo();

    expect(letter).toBe("ABC"); //Espero que letter sea "ABC"
    expect(numbers).toBe(123); //Espero que numbers sea 123

    expect(typeof letter).toBe("string"); //Espero que letter sea un string
    expect(typeof numbers).toBe("number"); //Espero que numbers sea un número

    expect(letter).toEqual(expect.any(String)); //Espero que letter sea cualquier string
  });
});

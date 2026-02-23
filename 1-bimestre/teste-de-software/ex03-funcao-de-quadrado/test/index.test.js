const calcularQuadrado = require("../index")
test("o quadrado de 5 deve ser 25", () =>{
    expect(calcularQuadrado(5, 5)).toBe(25)
})
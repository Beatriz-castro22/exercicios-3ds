const validarPedido = require("../index")

test("Pedido válido deve retornar true ",() => {
const pedidoValido = {
  cliente: "Carlos",
  total: 100,
  itens: ["Produto 1"]
}
 const pedido = validarPedido(pedidoValido)
 expect (pedido).toBe(true)
})


test("Pedido com total 0 deve retornar false",() => {
    const pedidoSemValor = {
     cliente: "Carlos",
     total: 0,
     itens: ["Produto 1"]
}
    const valor = validarPedido(pedidoSemValor)
    expect(valor).toBe(false)
})

test("Pedido sem cliente deve retornar false",() => {
    const cliente = {
     total: 100,
     itens: ["Produto 1"]
}
    const retomar = validarPedido(cliente)
    expect(retomar).toBe(false)
})

test("Pedido sem itens deve retornar false",() => {
    const pedidos = {
     cliente: "Carlos",
     total: 100,
     itens: []
}
    const itens = validarPedido(pedidos)
    expect(itens).toBe(false)

})
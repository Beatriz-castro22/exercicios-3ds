const {cadastrarTarefa, totalTarefas } = require ('../services/tarefaService')
const { limparBanco } = require('../database/tarefaDatabase')

beforeEach (() => {
    limparBanco()
})

describe("Testando tarefaService", () => {
    test("Deve cadastrar a tarefa", () => {
        const resultado = cadastrarTarefa("Tarefa")

        expect(totalTarefas()).toBe(1)    
    })

test("Não deve cadastar tarefa sem descrição", () => {
    const resultado = cadastrarTarefa()

    expect(resultado).toBe(false)
})
})
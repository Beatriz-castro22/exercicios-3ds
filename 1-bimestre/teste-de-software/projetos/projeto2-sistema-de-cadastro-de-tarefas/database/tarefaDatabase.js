let tarefas = []

function totalTarefas(tarefa){
    tarefas.push(tarefa)
}

function listarTarefas(){
    return tarefas
}

function limparBanco(){
    tarefas = []
}

module.exports = {
    totalTarefas,
    listarTarefas,
    limparBanco
}
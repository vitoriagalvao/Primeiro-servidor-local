
const {request, response} = require("express")
const express = require("express")
const app = express()

const estadosTodos = require("./data/estados-cidades.json")

//mostrando os estados

app.get("/estados/todos", (request, response) =>{
   response.status(200).send(estadosTodos)
})

//retornar uma sigla especifica

app.get("/estados/:sigla", (request, response) => {
    const siglaRequisitada = request.params.sigla
    console.log(siglaRequisitada)

    response.status(200).send(estadosTodos.find(estados => estados.sigla == siglaRequisitada ))
})

//definindo porta para o servidor local

app.listen(8080, () =>{
    console.log('Servidor Funcionando')
})
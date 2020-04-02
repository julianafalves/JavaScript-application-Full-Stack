
/*
Métodos HTTP:
Get
Post
Put
Delete

Tipos de parametros:
Query Parms: Parâmetros nomeados enviados na rota após o simbolo de interrogação (filtros, paginação)
    app.get('/users?name=Diego',(resquest,response) =>{ //começo da aplicação
        const params = resquest.query
        console.log(params)
        return response.json({
            "evento": "Semana",
            "aluno" : "Juliana"
        })
    })


Route Parms: Parâmetros utilizado para identificar recursos
    app.get('/users/:id',(resquest,response) =>{ //começo da aplicação
        const params = resquest.query
        console.log(params)
        return response.json({
            "evento": "Semana",
            "aluno" : "Juliana"
        })
    })

Request Body: Corpo da requisição, utilizado para criar ou alterar recusrsos
    app.post('/users',(resquest,response) =>{ //começo da aplicação
        const body = resquest.body
        console.log(body)
        return response.json({
            "evento": "Semana",
            "aluno" : "Juliana"
        })
    })

Bancos de dados:
SQL(Bancos relacionais): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
NoSQL(Não relacionais): MongoDB, CouchDB, etc

SQLite já vem na aplicação como um arquivo.

Driver: SELECT * FROM user
Query Builder: table('users').select('*').where()
*/
const express  = require('express') //importa o modolo express
const cors = requiere('cors')
const routes = require("./routes")

const app = express() //criando aplicação

app.use(cors())
app.use(express.json()) //expresse ir no corpo da requisição e transformar o json em um objeto js

app.use(routes)

app.listen(3333) //ouvir a porta 3333 (para node) e 3000(react)
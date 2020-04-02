const connection = require('../database/connection') // para fazer operações com o banco de dados

module.exports = {
    async index(request,response) {
        const ong_id = request.headers.authorization //pega o id da ong no headers
        
        const incidents = await connection('incidents').where('ong_id',ong_id) //listar os casos de uma ong
        .select('*') //todos da ong

        return response.json(incidents)
    }
}
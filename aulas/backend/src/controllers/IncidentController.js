const connection = require('../database/connection') // para fazer operações com o banco de dados

module.exports = {
    async index(request,response) {

        const {page = 1}= request.query //criar paginação

        const [count] = await connection('incidents').count() //contagem de quantos dados tem

        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id') //seleciona os dados da ONG

            .limit(5) //pegar cinco casos por pagina
            .offset((page-1)*5)
            //o que foi feito a cima vai fazer com que seja apresentado cinco casos por pagina
            //para buscar a proxima pagina ficaria: http://localhost:3333/incidents?page=2
            .select(["incidents.*",'ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']) 
            //acima determina os campos que vamos utilizar da ONG
            
        
        response.header('X-Total-Count',count['count(*)']) //apresentar no cabeçalho a quantidade de casos

        return response.json(incidents)
    },

    async create(request,response){
        const {title,description,value} = request.body
        const ong_id = request.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id })
    },

    async delete(request,response){
        const {id}=request.params
        const ong_id = request.headers.authorization

        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first()

        if (incident.ong_id != ong_id){
            return response.status(401).json({error : 'Operation not permited'}) //http status (respostas) não autorizado
        }

        await connection ('incidents').where('id',id).delete()

        return response.status(204).send()
    }
}
/* Modularizando a criação de tabelas ong*/
const connection = require('../database/connection')
const crypto = require('crypto')

module.exports={
     async index(request,response) {
        const ong = await connection('ongs').select("*")
    
        return response.json(ong)
    },

    async create(request,response){
        const {name,email,whatsapp,city,uf}  = request.body
   
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({ //await -  quando o node chegar aqui ele vai esperar para dar o retorno
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id})
    }
};
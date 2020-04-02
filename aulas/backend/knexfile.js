// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', //tipo de banco de dados
    connection: {
      filename: './src/database/db.sqlite' //arquivo onde ele vai ficar armazenado
    },
    migrations:{
      directory :'./src/database/migrations' 
    },
    useNullAsDefault: true, //necessario quando sqlite
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

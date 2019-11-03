var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'NAVGURUKUL1',
        database: 'navgurukul_informations'
    }
})
knex.schema.createTable('data', (table) => {
    table.increments('id')
    table.string('name')
    table.string('age')
    table.string('email')
    table.string('Adress')
  }).then(() => console.log("table created"))
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
          knex.destroy();
    })
    
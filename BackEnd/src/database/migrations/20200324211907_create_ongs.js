
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf',2).notNullable()        //No máximo 2 chars
  })
};

exports.down = function(knex) {                 //Deu algum problema na tabela
  return knex.schema.dropTable('ongs')
};

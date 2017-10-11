
exports.up = function(knex, Promise) {
  return knex.schema.createTable('metric', function (table) {
    table.increments();
    table.integer('chat_init');
    table.integer('chat_lead');
    table.integer('chat_length');
    table.integer('conn_err');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('metric');
};

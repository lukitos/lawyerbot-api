
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function (table) {
    table.increments();
    table.string('name');
    table.string('phone');
    table.string('email');
    table.string('source');
    table.string('assignedto');
    table.text('comments');
    table.string('photourl');
    table.timestamp('created').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};

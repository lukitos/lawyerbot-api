
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('metric').del()
    .then(function () {
      // Inserts seed entries
      return knex('metric').insert([
        {
          chat_init: 3,
          chat_lead: 3,
          chat_length: 2,
          conn_err: 0
        }
      ]);
    });
};

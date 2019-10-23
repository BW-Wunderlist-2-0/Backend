
exports.seed = function(knex) {
    return knex('users').insert([
      {username: 'joe', password: 'montana'},
      {username: 'steve', password: 'young'},
      {username: 'ronnie', password: 'lott'},
      {username: 'jerry', password: 'rice'}
    ]);
};

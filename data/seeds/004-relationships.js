
exports.seed = function(knex) {
    return knex('relationships').insert([
      {relation: 'family'},  //1
      {relation: 'friends'}, //2
      {relation: 'colleagues'}, //3
    ]);
    
};

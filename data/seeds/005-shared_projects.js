
exports.seed = function(knex) {
  return knex('shared_projects').insert([
    {
      project_id: 4, 
      relationship_id: 3
    },  
  ]);
};

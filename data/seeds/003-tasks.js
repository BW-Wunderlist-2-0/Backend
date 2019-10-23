
exports.seed = function(knex) {
    return knex('tasks').insert([
      {
        project_id: 1,     /// 1
        description: 'get a gallon of milk', 
        completed: false
      },
      {
        project_id: 1,     /// 2
        description: 'buy 2 dozen eggs', 
        completed: false
      },
      {
        project_id: 2,      // 3
        description: 'mop the floor', 
        completed: false
      },
      {
        project_id: 2,     // 4
        description: 'dust the shelves', 
        completed: false
      },
      {
        project_id: 3,      // 5
        description: 'mow the lawn', 
        completed: false
      },
      {
        project_id: 1,      // 6
        description: 'study web dev at Lambda', 
        completed: false
      },
    ]);
};

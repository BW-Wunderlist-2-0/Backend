
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: "buy groceries",   //// id: 1
      start_date: "",
      end_date: "",
      completed: false,
    },
    {
      project_name: "clean the house",   //// id: 2
      start_date: "",
      end_date: "",
      completed: false,
    },
    {
      project_name: "clean the yard",   //// id: 3
      start_date: "",
      end_date: "",
      completed: false,
    },
    {
      project_name: "build a website",   //// id: 4
      start_date: "",
      end_date: "",
      completed: false,
    },
  ])
};

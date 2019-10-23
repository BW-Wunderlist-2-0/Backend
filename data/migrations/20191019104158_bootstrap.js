exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl
        .string('username', 25)
        .notNullable()
        .unique();
      tbl.string('password', 100)
        .notNullable();
    })
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 50)
          .notNullable()
          .unique();
      tbl.date('start_date')
      tbl.date('end_date')
      tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('description', 500)
           .notNullable();
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('relationships', tbl => {
      tbl.increments();
      tbl.string('relation')
         .notNullable()
    })
    .createTable('shared_projects', tbl => {
      tbl.increments();
      tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      tbl.integer('relationship_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('relationships')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');    
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('shared_projects')
      .dropTableIfExists('relationships')
      .dropTableIfExists('tasks')
      .dropTableIfExists('users');
  };
  

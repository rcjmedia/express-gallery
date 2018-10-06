exports.up = function(knex, Promise) {
    return knex.schema.createTable('gallery_table', function(table) {
      table.increments();
      table
        .integer('gallery_user_id')
        .references('user_id')
        .inTable('users_table');
      table
        .integer('gallery_content_id')
        .references('content_id')
        .inTable('content_table');
      // table
      //   .integer('gallery_user_id')
      //   .references('user_id')
      //   .inTable('users_table');
        
      table.integer('level');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gallery_table');
  };

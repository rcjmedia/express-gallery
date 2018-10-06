exports.up = function(knex, Promise) {
    return knex.schema.createTable('content_table', function(table) {
      table.increments('content_id');
      table.string('title', 100).notNullable();
      table.string('url', 200).notNullable();
      table.string('type', 100).notNullable();
      table.string('format', 100).notNullable();
      table.string('description', 1000).notNullable();
      table.string('location', 100).notNullable();
      // table.string('contentcomments', 1000).notNullable();
      // table.string('likes', 20).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('content_table');
  }
exports.up = function(knex, Promise) {
    return knex.schema.table('content_table', function(table) {
      table.string('author', 100);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('content_table', function(table) {
      table.dropColumn('passwords');
    });
  };
  
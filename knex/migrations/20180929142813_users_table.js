exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_table', function(table) {
      table.increments('user_id');
      table.string('username', 100).notNullable().unique();
      table.string('password', 100).notNullable().unique();
      table.string('userlevel', 100).notNullable();
      table.string('firstname', 100).notNullable();
      table.string('lastname', 100).notNullable();
      table.string('email', 100).notNullable().unique();
      table.string('phone', 100).notNullable();
      table.string('address1', 100).notNullable();
      table.string('address2', 100).notNullable();
      table.string('city', 100).notNullable();
      table.string('state', 100).notNullable();
      table.string('zipcode', 100).notNullable();
      table.string('country', 100).notNullable();
      table.string('timezone', 100).notNullable();
      table.string('avatar_url', 100).notNullable();
      table.string('sex', 100).notNullable();
      table.string('profile_url', 100).notNullable();
      table.string('motto', 100).notNullable();
      table.string('interests', 1000).notNullable();
      table.string('website', 100).notNullable();
      table.string('linkedin', 100).notNullable();
      table.string('facebook', 100).notNullable();
      table.string('twitter', 100).notNullable();
      table.string('instagram', 100).notNullable();
      table.string('youtube', 100).notNullable();
      // table.string('userlikes', 20).notNullable();
      // table.string('following', 20).notNullable();
      // table.string('followers', 20).notNullable();
      // table.string('usercomments', 1000).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_table');
  }
const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users_table' };
  get hasTimestamps() { return true };

  gallery() {
    return this.hasMany('Gallery', 'author_name');
  }
};

module.exports = bookshelf.model('User', User);
 const bookshelf = require('./bookshelf').default.default;

class galleryModels extends bookshelf.Model {
  get tableName() { return 'content_table' };
  get hasTimestamps() { return true };

  author() {
    return this.belongsTo('User', 'author_name')
  }
};

module.exports = bookshelf.model('galleryModels', galleryModels); 
// import knex from '../knex/knex';
// export default require('bookshelf')(knex);

const knex = require('../knex/knex');
module.exports = require('bookshelf')(knex);
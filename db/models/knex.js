const environment = process.env.ENVIRONMENT || 'development'
// const config = require(environment);
module.exports = require('knex')(environment);
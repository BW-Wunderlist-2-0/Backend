const knex = require('knex');

const config = require('../knex');

module.exports = knex(config.development);
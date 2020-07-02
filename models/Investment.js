const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'investment',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    leg: {
        type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    quant: {
        type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
)
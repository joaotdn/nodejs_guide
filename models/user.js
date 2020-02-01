const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoImcrement: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;

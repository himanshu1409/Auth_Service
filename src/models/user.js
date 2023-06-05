"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { SALT } = require("../config/serverConfig");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }, // custom validation
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [3, 300] },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // Sequelize Hooks
  User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });

  return User;
};
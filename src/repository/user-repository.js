const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("SOmething went wrong at the Repository Layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({ where: { id: userId } });
      return true;
    } catch (error) {
      console.log("SOmething went wrong at the Repository Layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"], // Sequelize attributes to hide password
      });
      return user;
    } catch (error) {
      console.log("SOmething went wrong at the Repository Layer");
      throw error;
    }
  }
}

module.exports = UserRepository;

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      // define association here
    }
  }
  Review.init({
    title: DataTypes.STRING,
    tematic: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    pic: DataTypes.STRING,
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};

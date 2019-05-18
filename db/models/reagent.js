module.exports = function (sequelize, Sequelize) {
    var Reagent = sequelize.define("Reagent", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      lotnumber: {
        type: Sequelize.STRING,
        notEmpty: true,
      }
     
    

    },  { timestamps: false });

Reagent.associate = function (models) {
    Reagent.belongsToMany(models.Run, {
      through: {
        model: models.RunReagent,
        unique: false
      },
      foreignKey: 'reagentId'
    });
  }

    return Reagent;
  };
  
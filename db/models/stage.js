module.exports = function (sequelize, Sequelize) {
  var Stage = sequelize.define("Stage", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    }



  }, { timestamps: false });

  Stage.associate = function (models) {
    // Associating User with Stage
    // When an User is deleted, restrict delete of any associated Stages

    Stage.belongsToMany(models.Project, {
      //through: { model: models.ProjectStage },
      through:  'ProjectStage' ,
      as: 'projects', foreignKey: 'projectId'
    });
    
    //Stage.hasMany(models.Project, {through:{model: models.ProjectStage} });  //may need a foreign key, test with debugger
  };

  return Stage;
};



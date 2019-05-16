module.exports = function (sequelize, Sequelize) {
    var Run = sequelize.define("Run", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      analyst_initials: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      run_date: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      accept_or_reject: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      qc_initials: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      qc_date: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      datapacket_reviewed: {
        type: Sequelize.STRING,
        notEmpty: true,
      },
      flags: {
        type: Sequelize.INTEGER,
        notEmpty: true,
      },
      comments: {
        type: Sequelize.STRING,
        notEmpty: true,
      }
     
    

    },  { timestamps: false });

Run.associate = function (models) {
    Run.belongsToMany(models.Stage, {
      through: {
        model: models.StageRun,
        unique: false
      },
      foreignKey: 'runId'
    });
    

    Run.belongsToMany(models.Reagent, {
      through: {
        model: models.RunReagent,
        unique: false
      },
      foreignKey: 'runId'
    });
    
  }
  

    return Run;
  };
  
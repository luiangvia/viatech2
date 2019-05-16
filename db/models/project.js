module.exports = function (sequelize, Sequelize) {
  var Project = sequelize.define("Project", {
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

  Project.associate = function (models) {
    // Associating User with Project
    Project.belongsTo(models.User, {
      //onDelete: "restrict"  // When an User is deleted, restrict delete of any associated Projects
    });
    
    Project.belongsToMany(models.Stage, {
      //through: { model: models.ProjectStage },.
      through: {
        model: models.ProjectStage,
        unique: false
      },
      foreignKey: 'projectId'
    });
    
    //Project.hasMany(models.Stage, {through:{model: models.ProjectStage} });  //may need a foreign key, test with debugger
  };

  return Project;
};

/*debugging
const db = require("../models");
db.models.User
let user
models.User.findById(1).then((u)=>{user=u})
            models.User.findById(1).then((u)=>{u.getProjects()}).then((p)=>{project=p})
let project
user.getProjects().then((p)=>{project=p})

instead of writing 34/37 as seperate lines,  line 32 - chaining a promise
*/
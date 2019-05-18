module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("User", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    password: {
      type: Sequelize.STRING,
      notEmpy: true,
      validate: {
        len: {
          args: [6, 100],
          msg: "/models/user.js, Passwords must be between 6 and 100 characters long!"
        }
      }
    }
    /*,
    password: {
      type: Sequelize.STRING,
      notEmpy: true,
      validate: {
        len: {
          args: [6, 100],
          msg: "/models/user.js, Passwords must be between 6 and 100 characters long!"
        }
      }
    }
*/
  }
  ,  { timestamps: false }
        
  );

  User.associate = function(models) {
    // Associating User with Project
    // When an User is deleted, restrict delete of any associated Projects
    User.hasMany(models.Project, {
      //onDelete: "restrict"
    });
  };


  return User;
};

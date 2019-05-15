module.exports = function (sequelize, Sequelize) {
    var ProjectStage = sequelize.define("ProjectStage", {
        /*
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
        */
        
        projectId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model:'Project',
                key:'id'
            }
        },
            stageId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references:{
                    model:'Stage',
                    key:'id'
                }
        }
    }, { timestamps: false });

    ProjectStage.associate = function(models) {
        // Associating User with Project
        // When an User is deleted, restrict delete of any associated Projects
        ProjectStage.hasMany(models.Project, {
          //onDelete: "restrict"
        });
        //belongsTo only needs to be added if this held data that pertinent to both projects and models (ex. users and messages in message app, joining table that also holds data) / don't need it here because it's only passing ids to associate
        ProjectStage.hasMany(models.Stage, {
            //onDelete: "restrict"
          });
      };
        //Project.belongsToMany(Run, {through: { model: ProjectStage, unique: false }, foreignKey: 'id' });
        //Run.belongsToMany(Project, {through:{ model: ProjectStage, unique: false }, foreignKey: 'id' });
        return ProjectStage;
} 

/*
Associate block is important for us. Try setting up the ProjectStages model as the link has
https://medium.com/@the_ozmic/how-to-create-many-to-many-relationship-using-sequelize-orm-postgres-on-express-677753a3edb5
I believe the 'as' parameter is what we're missing
*/
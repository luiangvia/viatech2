module.exports = function (sequelize, Sequelize) {
    var StageRun = sequelize.define("StageRun", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


        stageId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        
        runId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }


    },{ timestamps: false });
    
    
    //Project.belongsToMany(Run, {through: { model: StageRun, unique: false }, foreignKey: 'project_id' });
    //Run.belongsToMany(Project, {through:{ model: StageRun, unique: false }, foreignKey: 'run_id' });
    return StageRun;
} 
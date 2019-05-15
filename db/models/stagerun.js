module.exports = function (sequelize, Sequelize) {
    var StageRun = sequelize.define("StageRun", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
        //Project.belongsToMany(Run, {through: { model: StageRun, unique: false }, foreignKey: 'project_id' });
        //Run.belongsToMany(Project, {through:{ model: StageRun, unique: false }, foreignKey: 'run_id' });
        return StageRun;
} 
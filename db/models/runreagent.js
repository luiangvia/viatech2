module.exports = function (sequelize, Sequelize) {
    var RunReagent = sequelize.define("RunReagent", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
        //Reagent.belongsToMany(Reagent, { through: RunReagent });
        //Run.belongsToMany(Project, { through: RunReagent });
        return RunReagent;
} 
module.exports = function (sequelize, Sequelize) {
    var RunReagent = sequelize.define("RunReagent", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


        runId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        reagentId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    //Reagent.belongsToMany(Reagent, { through: RunReagent });
    //Run.belongsToMany(Project, { through: RunReagent });
    return RunReagent;
} 
module.exports = function (sequelize, Sequelize) {
    var ProjectRun = sequelize.define("ProjectRun", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


        // runId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        // },

        // projectId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false
        // }
    }, { timestamps: false });

	
    return ProjectRun;
} 
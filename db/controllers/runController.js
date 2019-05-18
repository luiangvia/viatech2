const db = require("../models");

//stage dictionary
const stage = {
    1: 'fd',
    2: 'md',
    3: 'mt',
    4: 'yt'
}

//MODEL USAGE IN DOCS
//http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database
module.exports = {
    findAll: function (req, res) {
        db.Run.findAll(/*put options to filter here*/).then(controller => {
            res.json(controller);
            // controller will be an array of all Controller instances
        })
    },
    findAll: function (req, res) { //check for projectid if appended or on the request
        if (req.projectId) { //if the projectid is on the request, then we use it to get the stages in that projectid
            db.Project.findByPk(req.projectId)
                .then(project => {
                    return project.getRuns()
                })
                .then(runs => {
                    //runs.StageId

                    //creating a object to sort the runs by stageId
                    let sortedData = {
                        'fd': [],
                        'md': [],
                        'mt': [],
                        'yt': []
                    }
                    //iterate over runs
                    runs.forEach(run => {
                        //push fun to array to sortedData[stageId]
                        sortedData[stage[run.StageId]].push(run)
                    })

                    res.json(sortedData) //respond with runs
                })
        }
    },
    findOne: function (req, res) {
        db.Run.findById(req.params.id).then(run => { res.json(run) })
    },

    appendRunId: function (req, res, next) { //we're appending projectid to our request and go on to next route with that projectid in the request
        req.runId = req.params.id  //creating new property on projectid and setting to id coming from paramters / adding property of projectid to request , we're getting so we can look up the project in the stages route/controller
        next()
    }
}

//need function to get runs from stage id that belong to project id
    //used after clicking stage inside of project

//need function to get run id and all run data from stage id from projectid 
    //- used to list runs from stages, also used in summary of regaents

//need function to post run id with all run data, (and reagent ids?), into stage id inside of projectid
    //used after clicking on add run and submitting

/*
altertive findall (inside fundall function)

                    let stage = stages.filter( //iterates over all elements i nstages array
                        s => s.dataValues.id === req.stageId //s is current element of array list / being checked if that element matches stage id element
                    );  //also filter: look through array of stages and pick matching stage id
                    //filter passes an arrow fucnto nthat returns true or false / if true, filter returns element fro mstages array that returnd true
                    console.log(stage);
                    //console.log(stageId);h
                    console.log(req.stageId);
                    return stage.getRuns({});
                })
                .then(runs => {
                    res.json(runs) //respond with runs
                })
*/
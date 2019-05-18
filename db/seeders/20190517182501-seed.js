"use strict";

const models = require("../models");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		//create seed data
		//add dummy data to arrays
		let users = [{ name: "user", password: "pass" }, { name: "user2", password: "pass" }];

		let projects = [];
		for (let i = 0; i < 3; i++) {
			projects.push({ name: "project " + i, UserId: 1 });
		}

		let stages = [{ name: "fd" }, { name: "md" }, { name: "mt" }, { name: "yt" }];

		let runs = [
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "runsadasdas",
				analyst_initials: "NDA",
				run_date: "1/2/18",
				accept_or_reject: "ACCEPT",
				qc_initials: "PAA",
				qc_date: "1/3/18",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "zoey is best dog"
			},
			{
				name: "run3",
				analyst_initials: "LAA",
				run_date: "1/2/19",
				accept_or_reject: "ACCEPT",
				qc_initials: "MMM",
				qc_date: "1/3/19",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "sangry bois"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			},
			{
				name: "run123",
				analyst_initials: "CAW",
				run_date: "1/2/11",
				accept_or_reject: "ACCEPT",
				qc_initials: "ASZ",
				qc_date: "1/3/11",
				datapacket_reviewed: "YES",
				flags: 4,
				comments: "seed comment"
			}
		];

		//Add data in bulk to tables
		queryInterface.bulkInsert("Users", users);
		queryInterface.bulkInsert("Projects", projects);
		queryInterface.bulkInsert("Stages", stages);
		queryInterface.bulkInsert("Runs", runs);
		//end create data

		//create associations
		//get instances for associations
		let run1 = await models.Run.findByPk(1);
		let run2 = await models.Run.findByPk(2);
		let run3 = await models.Run.findByPk(3);
		let run4 = await models.Run.findByPk(4);
		let run5 = await models.Run.findByPk(5);
		let run6 = await models.Run.findByPk(6);
		let project1 = await models.Project.findByPk(1);
		let stage1 = await models.Stage.findByPk(1);
		let stage2 = await models.Stage.findByPk(2);
		let stage3 = await models.Stage.findByPk(3);
		let stage4 = await models.Stage.findByPk(4);


		//return associations as one promise
		return Promise.all(
			[project1.addRun(run1), run1.setStage(stage1)],
			[project1.addRun(run2), run2.setStage(stage1)],
			[project1.addRun(run3), run3.setStage(stage1)],
			[project1.addRun(run5), run5.setStage(stage2)],
			[project1.addRun(run6), run6.setStage(stage3)],
			[project1.addRun(run4), run4.setStage(stage4)]
		);

		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};

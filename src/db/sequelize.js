const { Sequelize, DataTypes } = require("sequelize");

const assuranceAutoModel = require("../models/assuranceAuto");
const assuranceHabitationModel = require("../models/assuranceHabitation");
const assuranceSanteModel = require("../models/assuranceSante");
const assuranceVieModel = require("../models/assuranceVie");

const sequelize = new Sequelize(
    "assurance",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mariadb",
        port: 3307,
        dialectOptions: {
            timezone: "Etc/GMT-2"
        },
        logging: false
    }
);

const assuranceAutoDb = assuranceAutoModel(sequelize, DataTypes);
const assuranceHabitationDb = assuranceHabitationModel(sequelize, DataTypes);
const assuranceSanteDb = assuranceSanteModel(sequelize, DataTypes);
const assuranceVieDb = assuranceVieModel(sequelize, DataTypes);

const initDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to the database");

        await sequelize.sync({ force: true });
        console.log("The database has been successfully synchronized");
    } catch (e) {
        console.log("Failed connection to the database:", e);
    }
};

module.exports = {
    initDb,
    sequelize,
    assuranceAutoDb,
    assuranceHabitationDb,
    assuranceSanteDb,
    assuranceVieDb
};

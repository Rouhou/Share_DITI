const express = require('express')
const app = express()
const {initDb} = require("./db/sequelize")
const assuranceVieRouter = require('./routes/assuranceVieRoutes');
const assuranceHabitRouter = require('./routes/assuranceHabitationRoutes');
const assuranceAutoRouter = require('./routes/assuranceAutoRoutes');
const assuranceSanteRouter = require('./routes/assuranceSanteRoutes');
const PREFIX = '/api/V1/'

initDb();

// app.get('/', (req, res) => {
//     // res.send('Hello World')
//     res.status(404).json({
//         app: 'Gestion Assurances',
//         authot: "DITI4",
//         api: '/api/assurances'
//     })
// });
// the-customer
app.use(PREFIX, assuranceVieRouter);
app.use(PREFIX, assuranceHabitRouter);
app.use(PREFIX, assuranceAutoRouter);
app.use(PREFIX, assuranceSanteRouter);

app.get('/', (req, res) => {
    // res.send('Hello World')
    res.status(200).json({
        app: 'Gestion Assurances',
        authot: "DITI4",
        api: '/api/assurances'
    })
});




module.exports = app
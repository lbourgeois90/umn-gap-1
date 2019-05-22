const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/crop', (req, res) => {
    let harvestYear = req.user.current_harvest_year;

    let sqlQuery = `SELECT * FROM "farm_crop" WHERE "harvest_year_id" = $1`;
    pool.query(sqlQuery, [harvestYear])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`Couldn't get data`, error);
            res.sendStatus(500);
        })

});

router.get('/field', (req, res) => {
    let harvestYear = req.user.current_harvest_year;

    let sqlQuery = `SELECT * FROM "farm_field" WHERE "harvest_year_id" = $1`;
    pool.query(sqlQuery, [harvestYear])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`Couldn't get data`, error);
            res.sendStatus(500);
        })

});

router.post('/crop', (req, res) => {
    console.log('in post router');

    const newCrop = req.body;
    const queryText = `INSERT INTO "farm_crop" ("farm_crop_type", "harvest_year_id")
                    VALUES ($1, $2)`;
    const queryValues = [
        newCrop.type,
        req.user.current_harvest_year
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT crop query', err);
            res.sendStatus(500);
        });
});

router.post('/field', (req, res) => {
    console.log('in post router');

    const newField = req.body;
    const queryText = `INSERT INTO "farm_field" ("field_name", "harvest_year_id")
                    VALUES ($1, $2)`;
    const queryValues = [
        newField.name,
        req.user.current_harvest_year,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT field query', err);
            res.sendStatus(500);
        });
});

router.delete('/crop/:id', (req, res) => {
    const queryText = 'DELETE FROM "farm_crop" WHERE farm_crop_id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error deleting crop query', err);
            res.sendStatus(500);
        });
});

router.delete('/field/:id', (req, res) => {
    const queryText = 'DELETE FROM "farm_field" WHERE farm_field_id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error deleting field query', err);
            res.sendStatus(500);
        });
});


module.exports = router;
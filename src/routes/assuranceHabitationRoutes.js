const express = require('express')
const controller = require('../controllers/assuranceVieController')


const router = express.Router()

router.get('assurances-habit', controller.getAll);
router.get('assurances-habit/:id', controller.getByPK);
router.post('assurance-habit', controller.create);
router.put('assurance-habit/:id', controller.update);
router.delete('assurance-habit/:id', controller.delete);

module.exports = router
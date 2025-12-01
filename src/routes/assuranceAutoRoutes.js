const express = require('express')
const controller = require('../controllers/assuranceVieController')


const router = express.Router()

router.get('assurances-auto', controller.getAll);
router.get('assurances-auto/:id', controller.getByPK);
router.post('assurance-auto', controller.create);
router.put('assurance-auto/:id', controller.update);
router.delete('assurance-auto/:id', controller.delete);

module.exports = router
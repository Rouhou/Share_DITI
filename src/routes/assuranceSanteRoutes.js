const express = require('express')
const controller = require('../controllers/assuranceVieController')


const router = express.Router()

router.get('assurances-sante', controller.getAll);
router.get('assurances-sante/:id', controller.getByPK);
router.post('assurance-sante', controller.create);
router.put('assurance-sante/:id', controller.update);
router.delete('assurance-visantee/:id', controller.delete);

module.exports = router
const express = require('express')
const controller = require('../controllers/assuranceVieController')

const assVie = "/assurances-vie"

const router = express.Router()
const middleware = (req, res, next) => {
    console.log("Appel du middleware")
    next();
}
router.get(assVie, middleware, controller.getAll);
router.get(`${assVie}/:id`, controller.getByPK);


router.post(assVie, controller.create);
router.put(`${assVie}/:id`, controller.update);
router.delete(`${assVie}/:id`, controller.delete);

module.exports = router
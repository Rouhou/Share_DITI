const { assuranceVieDb } = require("../db/sequelize");
const assuranceVie = require("../repository/assuranceRepository")

exports.getAll = async (req, res) => {
     try {
        // const assurances = await assuranceVieDb.findAll();
        const assurances = assuranceVie.getAll();
        res.json({
            message: "Toutes les assurances vie ont été chargées",
            data: assurances
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByPK = async (req, res) => {
    try {
        const assurance = await assuranceVieDb.findByPk(req.params.id);
        res.json({
            message: "Assurance vie chargée",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const assurance = await assuranceVieDb.create(req.body);
        res.json({
            message: "Assurance vie créée avec succès",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await assuranceVieDb.update(req.body, { where: { id: req.params.id }});
        const updated = await assuranceVieDb.findByPk(req.params.id);
        res.json({
            message: "Assurance vie mise à jour",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const assurance = await assuranceVieDb.findByPk(req.params.id);

        if (!assurance) {
            return res.status(404).json({ message: "Assurance introuvable" });
        }

        await assuranceVieDb.destroy({ where: { id: req.params.id }});

        res.json({
            message: `Assurance vie N°${assurance.id} supprimée`,
            data: assurance
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



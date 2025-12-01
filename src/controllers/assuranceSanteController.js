const { assuranceSanteDb } = require("../db/sequelize");

exports.getAll = async (req, res) => {
    try {
        const assurances = await assuranceSanteDb.findAll();
        res.json({
            message: "Toutes les assurances santés ont été chargées",
            data: assurances
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByPK = async (req, res) => {
    try {
        const assurance = await assuranceSanteDb.findByPk(req.params.id);
        res.json({
            message: "Assurance santé chargée",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const assurance = await assuranceSanteDb.create(req.body);
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
        await assuranceSanteDb.update(req.body, { where: { id: req.params.id }});
        const updated = await assuranceSanteDb.findByPk(req.params.id);
        res.json({
            message: "Assurance santé mise à jour",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const assurance = await assuranceSanteDb.findByPk(req.params.id);

        if (!assurance) {
            return res.status(404).json({ message: "Assurance introuvable" });
        }

        await assuranceSanteDb.destroy({ where: { id: req.params.id }});

        res.json({
            message: `Assurance santé N°${assurance.id} supprimée`,
            data: assurance
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



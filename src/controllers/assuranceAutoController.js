const { assuranceAutoDb } = require("../db/sequelize");

exports.getAll = async (req, res) => {
    try {
        const assurances = await assuranceAutoDb.findAll();
        res.json({
            message: "Toutes les assurances autos ont été chargées",
            data: assurances
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByPK = async (req, res) => {
    try {
        const assurance = await assuranceAutoDb.findByPk(req.params.id);
        res.json({
            message: "Assurance auto chargée",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const assurance = await assuranceAutoDb.create(req.body);
        res.json({
            message: "Assurance auto créée avec succès",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await assuranceAutoDb.update(req.body, { where: { id: req.params.id }});
        const updated = await assuranceAutoDb.findByPk(req.params.id);
        res.json({
            message: "Assurance auto mise à jour",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const assurance = await assuranceAutoDb.findByPk(req.params.id);

        if (!assurance) {
            return res.status(404).json({ message: "Assurance introuvable" });
        }

        await assuranceAutoDb.destroy({ where: { id: req.params.id }});

        res.json({
            message: `Assurance auto N°${assurance.id} supprimée`,
            data: assurance
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

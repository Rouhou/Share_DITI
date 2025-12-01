const { assuranceHabitationDb } = require("../db/sequelize");

exports.getAll = async (req, res) => {
            try {
            const assurances = await assuranceHabitationDb.findAll();
            res.json({
                message: "Toutes les assurances habitations ont été chargées",
                data: assurances
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};

exports.getByPK = async (req, res) => {
    try {
        const assurance = await assuranceHabitationDb.findByPk(req.params.id);
        res.json({
            message: "Assurance habitation chargée",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const assurance = await assuranceHabitationDb.create(req.body);
        res.json({
            message: "Assurance habitation créée avec succès",
            data: assurance
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await assuranceHabitationDb.update(req.body, { where: { id: req.params.id }});
        const updated = await assuranceHabitationDb.findByPk(req.params.id);
        res.json({
            message: "Assurance habitation mise à jour",
            data: updated
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const assurance = await assuranceHabitationDb.findByPk(req.params.id);

        if (!assurance) {
            return res.status(404).json({ message: "Assurance introuvable" });
        }

        await assuranceHabitationDb.destroy({ where: { id: req.params.id }});

        res.json({
            message: `Assurance habitation N°${assurance.id} supprimée`,
            data: assurance
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


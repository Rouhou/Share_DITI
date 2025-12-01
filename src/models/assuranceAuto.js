module.exports = (sequilize, DataTypes) => {
    return sequilize.define("assurance_auto", {
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
            nomClient: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmpty: false,
            defaultValue: 'Unknown',
            },
            montantCotisation: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
            numeroContrat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
            },
            immatriculation: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmpty: false,
            allowNull: false
            },
            puissanceFiscal: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
            bonusMalus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            },
        }, 
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt: false
        }
    )
}
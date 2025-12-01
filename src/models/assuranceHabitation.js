module.exports = (sequilize, DataTypes) => {
    return sequilize.define("assurance_habit", {
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
            adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmpty: false,
            allowNull: false
            },
            superficie: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
            zoneRisque: {
            type: DataTypes.BOOLEAN,
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
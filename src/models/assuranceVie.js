module.exports = (sequilize, DataTypes) => {
    return sequilize.define("assurance_vie", {
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
            ageAssure: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
            capitalGarantie: {
            type: DataTypes.INTEGER,
            allowNull: false,
            },
            beneficiaire: {
            type: DataTypes.STRING,
            allowNull: false,
            }
        }, 
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt: false
        }
    )
}
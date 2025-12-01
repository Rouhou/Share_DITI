module.exports = (sequilize, DataTypes) => {
    return sequilize.define("assurance_sante", {
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
            typeFormule: {
            type: DataTypes.STRING,
            allowNull: false,
            allowNull: false,
            isEmpty: false,
            },
            nbBeneficiaires: {
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
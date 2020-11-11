module.exports = function(sequelize,DataTypes) {
    var Preparer = sequelize.define("Preparer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        license: {
            type: DataTypes.STRING,
            allowNull: false
        },
        insurance: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Preparer;
}
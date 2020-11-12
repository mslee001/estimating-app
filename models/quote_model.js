module.exports = function (sequelize, DataTypes) {
    var Quote = sequelize.define("Quote", {
        CustomerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PreparerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paint: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sheen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Quote.associate = function (models) {
        Quote.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Quote.associate = function (models) {
        Quote.belongsTo(models.Preparer, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Quote;
}
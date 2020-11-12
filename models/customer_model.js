module.exports = function(sequelize,DataTypes) {
    var Customer = sequelize.define("Customer", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
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
        }
    });
    Customer.associate = function (models) {
        Customer.hasMany(models.Quote, {
            onDelete: "cascade"
        });
    };
    return Customer;
}
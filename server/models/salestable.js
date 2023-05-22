const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    SalesTable : sequelize.define('salestable', {
        salestableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.TEXT,
        img_url: DataTypes.TEXT,
        description: DataTypes.TEXT,
        price: DataTypes.TEXT,
        discount: DataTypes.TEXT,
        tagline: DataTypes.TEXT,
        start_date: DataTypes.TEXT,
        expiration: DataTypes.TEXT,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })
}

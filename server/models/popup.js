const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    Popup : sequelize.define('popup', {
        popupid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        notice: DataTypes.TEXT,
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW 
          },
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

const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    GalleryTable : sequelize.define('gallerytable', {
        gallerytableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.TEXT,
        img_url: DataTypes.TEXT,
        alt_text: {
            type: DataTypes.TEXT,
            allowNull: false
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

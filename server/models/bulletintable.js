const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    BulletinTable : sequelize.define('bulletintable', {
        bulletintableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.TEXT,
        img_url: DataTypes.TEXT,
        alt_text: DataTypes.TEXT,
        paragraph: DataTypes.TEXT,
        date: DataTypes.TEXT,
        link: DataTypes.TEXT,
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

const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    PromotionsTable : sequelize.define('promotionstable', {
        promotionstableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.TEXT,
        img_url: DataTypes.TEXT,
        description: DataTypes.TEXT,
        price: DataTypes.TEXT,
        tagline: DataTypes.TEXT,
        date_posted: DataTypes.TEXT,
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

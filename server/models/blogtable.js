const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    BlogTable : sequelize.define('blogtable', {
        blogtableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.TEXT,
        title2: DataTypes.TEXT,
      date: DataTypes.TEXT,
        img_1_url: DataTypes.TEXT,
        img_2_url: DataTypes.TEXT,
        img_3_url: DataTypes.TEXT,
        img_4_url: DataTypes.TEXT,
        img_5_url: DataTypes.TEXT,
        img_6_url: DataTypes.TEXT,
        img_7_url: DataTypes.TEXT,
        img_8_url: DataTypes.TEXT,
        img_9_url: DataTypes.TEXT,
        img_10_url: DataTypes.TEXT,
        img_1_captions: DataTypes.TEXT,
        img_2_captions: DataTypes.TEXT,
        img_3_captions: DataTypes.TEXT,
        img_4_captions: DataTypes.TEXT,
        img_5_captions: DataTypes.TEXT,
        img_6_captions: DataTypes.TEXT,
        img_7_captions: DataTypes.TEXT,
        img_8_captions: DataTypes.TEXT,
        img_9_captions: DataTypes.TEXT,
        img_10_captions: DataTypes.TEXT,
        link: DataTypes.TEXT,
        link2: DataTypes.TEXT,
        icon: DataTypes.TEXT,
        icon2: DataTypes.TEXT,
        icon3: DataTypes.TEXT,
        intro: DataTypes.TEXT,
        body_1: DataTypes.TEXT,
        body_2: DataTypes.TEXT,
        body_3: DataTypes.TEXT,
        body_4: DataTypes.TEXT,
        conclusion: DataTypes.TEXT,
        span_green: DataTypes.TEXT,
        span_yellow: DataTypes.TEXT,
        span_brown: DataTypes.TEXT,
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


require("dotenv").config();
const { Popup } = require('../models/popup');

module.exports = {
    getPopup: async (req, res) => {
        try {
            const popup = await Popup.findAll({             
                limit: 1, // Only fetching one popup
                order: [["popupid", "DESC"]]
            });
            res.status(200).send(popup);
        } catch (error) {
            console.log('ERROR IN getPopup');
            console.log(error);
            res.sendStatus(400);
        }
    }, 
    addPopup: async (req, res) => {
        try {
            const { notice } = req.body;
            await Popup.destroy({ truncate: true }); // Remove existing popups before adding a new one
            await Popup.create({ notice });
            res.sendStatus(200);
        } catch (error) {
            console.log("ERROR IN addPopup");
            console.log(error);
            res.sendStatus(400);
        }
    }
};

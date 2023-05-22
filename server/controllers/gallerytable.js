require("dotenv").config();
const {GalleryTable} = require('../models/gallerytable')



module.exports = {
    getGalleryTable: async (req, res) => {
        try {
            const gallerytable = await GalleryTable.findAll({             
        limit: 200,
        order: [
            ["gallerytableid", "DESC"]
           ],                      
            })
            res.status(200).send(gallerytable)
        } catch (error) {
            console.log('ERROR IN getGalleryTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    addNewGalleryImg: async (req, res) => {
        try {
          const {
          id,
          name,
          img_url
          } = req.body;
          await GalleryTable.create({
            id,
            name,
            img_url
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addNewGalleryImg");
          console.log(error);
          res.sendStatus(400);
        }
      }, 
      deleteGalleryImg: async (req, res) => {
        try {
            const {gallerytableid} = req.params
            await GalleryTable.destroy({where: {gallerytableid: +gallerytableid}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE GALLERY IMG')
            console.log(error)
            res.sendStatus(400)
        }
    }
}
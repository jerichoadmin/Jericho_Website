require("dotenv").config();
const {GalleryTable2} = require('../models/gallerytable2')



module.exports = {
    getGalleryTable2: async (req, res) => {
        try {
            const gallerytable2 = await GalleryTable2.findAll({             
        limit: 200,
        order: [
            ["gallerytable2id", "ASC"]
           ],                      
            })
            res.status(200).send(gallerytable2)
        } catch (error) {
            console.log('ERROR IN getGalleryTable2')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    addNewGallery2Img: async (req, res) => {
        try {
          const {
          id,
          name,
          img_url,
          alt_text
          } = req.body;
          await GalleryTable2.create({
            id,
            name,
            img_url,
            alt_text
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addNewGallery2Img");
          console.log(error);
          res.sendStatus(400);
        }
      }, 
      deleteGallery2Img: async (req, res) => {
        try {
            const {gallerytable2id} = req.params
            await GalleryTable2.destroy({where: {gallerytable2id: +gallerytable2id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE GALLERY 2 IMG')
            console.log(error)
            res.sendStatus(400)
        }
    }
}
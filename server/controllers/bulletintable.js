require("dotenv").config();
const {BulletinTable} = require('../models/bulletintable')




module.exports = {
    getBulletinTable: async (req, res) => {
        try {
            const bulletintable = await BulletinTable.findAll({             
        limit: 10,
        order: [
            ["bulletintableid", "DESC"]
           ],                      
            })
            res.status(200).send(bulletintable)
        } catch (error) {
            console.log('ERROR IN getBulletinTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 



    addNewBulletinPost: async (req, res) => {
        try {
          const {
          id,
          title,
          img_url,
          alt_text,
          paragraph,
          date,
          link
          } = req.body;
          await BulletinTable.create({
          id,
          title,
          img_url,
          alt_text,
          paragraph,
          date,
          link
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addBulletinPost");
          console.log(error);
          res.sendStatus(400);
        }
      }, 



      deleteBulletinPost: async (req, res) => {
        try {
            const {bulletintableid} = req.params
            await BulletinTable.destroy({where: {bulletintableid: +bulletintableid}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE BULLETIN POST')
            console.log(error)
            res.sendStatus(400)
        }
    },

    editBulletinPost: async (req, res) => {
      try {
        const { bulletintableid } = req.params;
        const {
          id,
          title,
          img_url,
          alt_text,
          paragraph,
          date,
          link
        } = req.body;
        await BulletinTable.update(
          {
          id,
          title,
          img_url,
          alt_text,
          paragraph,
          date,
          link
          },
          { where: { bulletintableid: +bulletintableid } }
        );
        res.sendStatus(200);
      } catch (error) {
        console.log('ERROR in EDIT BULLETIN POST');
        console.log(error);
        res.sendStatus(400);
      }
    }
  }
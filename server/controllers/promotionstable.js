require("dotenv").config();
const {PromotionsTable} = require('../models/promotionstable')



module.exports = {
    getPromotionsTable: async (req, res) => {
        try {
            const promotionstable = await PromotionsTable.findAll({             
        limit: 50,
        order: [
            ["promotionstableid", "DESC"]
           ],                      
            })
            res.status(200).send(promotionstable)
        } catch (error) {
            console.log('ERROR IN getPromotionsTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 



    addNewPromotionsPost: async (req, res) => {
        try {
          const {
          id,
          name,
          img_url,
          description,
          price,
          tagline,
          date_posted
          } = req.body;
          await PromotionsTable.create({
            id,
            name,
            img_url,
            description,
            price,
            tagline,
            date_posted
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addPromotionsPost");
          console.log(error);
          res.sendStatus(400);
        }
      }, 



      deletePromotionsPost: async (req, res) => {
        try {
            const {promotionstableid} = req.params
            await PromotionsTable.destroy({where: {promotionstableid: +promotionstableid}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE PROMOTIONS POST')
            console.log(error)
            res.sendStatus(400)
        }
    },

    editPromotionsPost: async (req, res) => {
      try {
        const { promotionstableid } = req.params;
        const {
            id,
            name,
            img_url,
            description,
            price,
            tagline,
            date_posted
        } = req.body;
        await PromotionsTable.update(
          {
            id,
            name,
            img_url,
            description,
            price,
            tagline,
            date_posted
          },
          { where: { promotionstableid: +promotionstableid } }
        );
        res.sendStatus(200);
      } catch (error) {
        console.log('ERROR in EDIT PROMOTIONS POST');
        console.log(error);
        res.sendStatus(400);
      }
    }
  }
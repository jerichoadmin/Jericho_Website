require("dotenv").config();
const {BlogTable} = require('../models/blogtable')



module.exports = {
    getBlogTable: async (req, res) => {
        try {
            const { offset } = req.params;
            const blogtable = await BlogTable.findAndCountAll({             
        limit: 5,
        offset: offset,
        order: [
            ["blogtableid", "DESC"]
           ],                      
            })
            res.status(200).send(blogtable)
        } catch (error) {
            console.log('ERROR IN getBlogTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    getAllBlogTable: async (req, res) => {
        try {
            const blogtableall = await BlogTable.findAll({             
        order: [
            ["blogtableid", "DESC"]
           ],                      
            })
            res.status(200).send(blogtableall)
        } catch (error) {
            console.log('ERROR IN getAllBlogTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    getSingleBlogTable: async (req, res) => {
      try {
          const { id } = req.params;
          const singleblogtable = await BlogTable.findByPk(id);
          if (!singleblogtable) {
              res.status(404).send("Blog table not found");
              return;
          }
          res.status(200).send(singleblogtable);
      } catch (error) {
          console.log('ERROR IN getSingleBlogTable')
          console.log(error)
          res.sendStatus(400)
      }
  },
    addNewBlogPost: async (req, res) => {
        try {
          const {
          id,
          title,
          title2,
          date,
          img_1_url,
          img_2_url,
          img_3_url,
          img_4_url,
          img_5_url,
          img_6_url,
          img_7_url,
          img_8_url,
          img_9_url,
          img_10_url,
          img_1_captions,
          img_2_captions,
          img_3_captions,
          img_4_captions,
          img_5_captions,
          img_6_captions,
          img_7_captions,
          img_8_captions,
          img_8_title,
          img_9_captions,
          img_9_title,
          img_10_captions,
          img_1_alt_text,
          img_2_alt_text,
          img_3_alt_text, 
          img_4_alt_text, 
          img_5_alt_text, 
          img_6_alt_text, 
          img_7_alt_text, 
          img_8_alt_text, 
          img_9_alt_text, 
          img_10_alt_text, 
          link,
          link2,
          icon,
          icon2,
          icon3,
          intro,
          body_1,
          body_2,
          body_3,
          body_4,
          conclusion,
          span_green,
          span_yellow,
          span_brown,
          tags
          } = req.body;
          await BlogTable.create({
              id,
              title,
              title2,
                date,
              img_1_url,
              img_2_url,
              img_3_url,
              img_4_url,
              img_5_url,
              img_6_url,
              img_7_url,
              img_8_url,
              img_9_url,
              img_10_url,
              img_1_captions,
              img_2_captions,
              img_3_captions,
              img_4_captions,
              img_5_captions,
              img_6_captions,
              img_7_captions,
              img_8_captions,
              img_8_title,
              img_9_captions,
              img_9_title,
              img_10_captions,
              img_1_alt_text,
              img_2_alt_text,
              img_3_alt_text, 
              img_4_alt_text, 
              img_5_alt_text, 
              img_6_alt_text, 
              img_7_alt_text, 
              img_8_alt_text, 
              img_9_alt_text, 
              img_10_alt_text, 
              link,
              link2,
              icon,
              icon2,
              icon3,
              intro,
              body_1,
              body_2,
              body_3,
              body_4,
              conclusion,
              span_green,
              span_yellow,
              span_brown,
              tags
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addNewBlogPost");
          console.log(error);
          res.sendStatus(400);
        }
      }, 
      deleteBlogPost: async (req, res) => {
        try {
            const {blogtableid} = req.params
            await BlogTable.destroy({where: {blogtableid: +blogtableid}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE')
            console.log(error)
            res.sendStatus(400)
        }
    },
    editBlogPost: async (req, res) => {
      try {
        const { blogtableid } = req.params;
        const {
          title,
          title2,
          date,
          img_1_url,
          img_2_url,
          img_3_url,
          img_4_url,
          img_5_url,
          img_6_url,
          img_7_url,
          img_8_url,
          img_9_url,
          img_10_url,
          img_1_captions,
          img_2_captions,
          img_3_captions,
          img_4_captions,
          img_5_captions,
          img_6_captions,
          img_7_captions,
          img_8_captions,
          img_8_title,
          img_9_captions,
          img_9_title,
          img_10_captions,
          img_1_alt_text,
          img_2_alt_text,
          img_3_alt_text, 
          img_4_alt_text, 
          img_5_alt_text, 
          img_6_alt_text, 
          img_7_alt_text, 
          img_8_alt_text, 
          img_9_alt_text, 
          img_10_alt_text, 
          link,
          link2,
          icon,
          icon2,
          icon3,
          intro,
          body_1,
          body_2,
          body_3,
          body_4,
          conclusion,
          span_green,
          span_yellow,
          span_brown, 
          tags
        } = req.body;
        await BlogTable.update(
          {
            title,
            title2,
            date,
            img_1_url,
            img_2_url,
            img_3_url,
            img_4_url,
            img_5_url,
            img_6_url,
            img_7_url,
            img_8_url,
            img_9_url,
            img_10_url,
            img_1_captions,
            img_2_captions,
            img_3_captions,
            img_4_captions,
            img_5_captions,
            img_6_captions,
            img_7_captions,
            img_8_captions,
            img_8_title,
            img_9_captions,
            img_9_title,
            img_10_captions,
            img_1_alt_text,
            img_2_alt_text,
            img_3_alt_text, 
            img_4_alt_text, 
            img_5_alt_text, 
            img_6_alt_text, 
            img_7_alt_text, 
            img_8_alt_text, 
            img_9_alt_text, 
            img_10_alt_text, 
            link,
            link2,
            icon,
            icon2,
            icon3,
            intro,
            body_1,
            body_2,
            body_3,
            body_4,
            conclusion,
            span_green,
            span_yellow,
            span_brown,
            tags
          },
          { where: { blogtableid: +blogtableid } }
        );
        res.sendStatus(200);
      } catch (error) {
        console.log('ERROR in edit');
        console.log(error);
        res.sendStatus(400);
      }
    }
  }
require("dotenv").config();
const {PreviewTable} = require('../models/previewtable')



module.exports = {
    getPreviewTable: async (req, res) => {
        try {
            const previewtable= await PreviewTable.findAll({                               
            })
            res.status(200).send(previewtable)
        } catch (error) {
            console.log('ERROR IN getPreviewTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    addPreview: async (req, res) => {
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
          img_9_captions,
          img_10_captions,
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
          } = req.body;
          await PreviewTable.create({
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
              img_9_captions,
              img_10_captions,
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
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addPreview");
          console.log(error);
          res.sendStatus(400);
        }
      }, 
      getSinglePreview: async (req, res) => {
        try {
            const { id } = req.params;
            const singlepreview = await PreviewTable.findByPk(id);
            if (!singlepreview) {
                res.status(404).send("Preview not found");
                return;
            }
            res.status(200).send(singlepreview);
        } catch (error) {
            console.log('ERROR IN getSinglePreview')
            console.log(error)
            res.sendStatus(400)
        }
    },


      deletePreview: async (req, res) => {
        try {
            const {previewtableid} = req.params
            await PreviewTable.destroy({where: {previewtableid: +previewtableid}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE')
            console.log(error)
            res.sendStatus(400)
        }
    },
    editPreview: async (req, res) => {
      try {
        const { previewtableid } = req.params;
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
          img_9_captions,
          img_10_captions,
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
          span_brown
        } = req.body;
        await PreviewTable.update(
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
            img_9_captions,
            img_10_captions,
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
            span_brown
          },
          { where: { previewtableid: +previewtableid } }
        );
        res.sendStatus(200);
      } catch (error) {
        console.log('ERROR in editPreview');
        console.log(error);
        res.sendStatus(400);
      }
    }
  }
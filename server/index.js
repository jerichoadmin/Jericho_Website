require('dotenv').config();
const {sequelize} = require('./util/database')
const {SERVER_PORT} = process.env
const {REACT_APP_YOUTUBE_API_KEY} = process.env
const {User} = require('./models/user')
const {BlogTable} = require('./models/blogtable')
const {SalesTable} = require('./models/salestable')




const express = require('express')
const cors = require('cors')
const axios = require('axios');



const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')
const {getBlogTable, getAllBlogTable, getSingleBlogTable, addNewBlogPost, deleteBlogPost, editBlogPost} = require('./controllers/blogtable')
const {getSalesTable, addNewSalesPost, deleteSalesPost, deleteAllSalesPost, editSalesPost} = require('./controllers/salestable')
const {getGalleryTable, addNewGalleryImg, deleteGalleryImg} = require('./controllers/gallerytable')
const {getGalleryTable2, addNewGallery2Img, deleteGallery2Img} = require('./controllers/gallerytable2')
const {getPreviewTable, addPreview, deletePreview, editPreview, getSinglePreview} = require('./controllers/previewtable')
const {getPopup, addPopup, togglePopupVisibility} = require('./controllers/popup')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())





app.post('/login', login)
app.post('/register', register)



app.get('/blog', getAllBlogTable)
app.get('/blog/:offset', getBlogTable)
app.get('/singleblog/:id', getSingleBlogTable)
app.post('/newblogpost', addNewBlogPost)
app.delete('/newblogpost/:blogtableid', deleteBlogPost)
app.put('/editblogpost/:blogtableid', editBlogPost)


app.get('/preview', getPreviewTable)
app.get('/singlepreview/:previewtableid', getSinglePreview)
app.post('/postpreview', addPreview)
app.put('/editpreview/:previewtableid', editPreview)
app.delete('/deletepreview/:previewtableid', deletePreview)



app.get('/sales', getSalesTable)
app.post('/newsalespost', addNewSalesPost)
app.delete('/newsalespost/:salestableid', deleteSalesPost)
app.delete('/deleteallsales', deleteAllSalesPost)
app.put('/editsalespost/:salestableid', editSalesPost)



app.get('/gallery', getGalleryTable)
app.post('/newgalleryimg', addNewGalleryImg)
app.delete('/deletegalleryimg/:gallerytableid', deleteGalleryImg)

app.get('/gallery2', getGalleryTable2)
app.post('/newgallery2img', addNewGallery2Img)
app.delete('/deletegallery2img/:gallerytable2id', deleteGallery2Img)

app.get('/popup', getPopup)
app.post('/addpopup', addPopup)
app.post('/togglepopup', togglePopupVisibility)



//Video Portion
const channelId = 'UCzQXGhQyfMHt_e8wH9drt7g';
let cachedVideos = [];
let lastUpdateTimestamp = 0;
const updateInterval = 24 * 60 * 60 * 1000; 

app.get('/api/latestVideos', async (req, res) => {
  const currentTime = new Date().getTime();

  if (currentTime - lastUpdateTimestamp > updateInterval) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`
      );

      const data = response.data;

      if (data.items.length > 0) {
        const videoIds = data.items.map((item) => item.id.videoId).join(',');
        
        // Make a request to get detailed video information
        const videoDetailsResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?key=${REACT_APP_YOUTUBE_API_KEY}&id=${videoIds}&part=snippet,contentDetails`
        );

        const videoDetails = videoDetailsResponse.data.items;

        if (videoDetails.length > 0) {
          cachedVideos = videoDetails.map((item) => ({
            id: item.id,
            snippet: item.snippet,
          }));

          lastUpdateTimestamp = currentTime;
        }
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  res.json(cachedVideos);
});





sequelize.sync()
.then(() => {
app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))})
.catch(err => console.log(err))
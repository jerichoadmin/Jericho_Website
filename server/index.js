require('dotenv').config();
const {sequelize} = require('./util/database')
const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {BlogTable} = require('./models/blogtable')
const {SalesTable} = require('./models/salestable')





const express = require('express')
const cors = require('cors')



const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')
const {getBlogTable, getAllBlogTable, getSingleBlogTable, addNewBlogPost, deleteBlogPost, editBlogPost} = require('./controllers/blogtable')
const {getSalesTable, addNewSalesPost, deleteSalesPost, deleteAllSalesPost, editSalesPost} = require('./controllers/salestable')
const {getGalleryTable, addNewGalleryImg, deleteGalleryImg} = require('./controllers/gallerytable')

const app = express();
app.use(express.json())
app.use(cors())





app.post('/login', login)
app.post('/register', register)



app.get('/blog', getAllBlogTable)
app.get('/blog/:offset', getBlogTable)
app.get('/singleblog/:id', getSingleBlogTable)
app.post('/newblogpost', addNewBlogPost)
app.delete('/newblogpost/:blogtableid', deleteBlogPost)
app.put('/editblogpost/:blogtableid', editBlogPost)

app.get('/sales', getSalesTable)
app.post('/newsalespost', addNewSalesPost)
app.delete('/newsalespost/:salestableid', deleteSalesPost)
app.delete('/deleteallsales', deleteAllSalesPost)
app.put('/editsalespost/:salestableid', editSalesPost)


app.get('/gallery', getGalleryTable)
app.post('/newgalleryimg', addNewGalleryImg)
app.delete('/deletegalleryimg/:gallerytableid', deleteGalleryImg)





sequelize.sync()
.then(() => {
app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))})
.catch(err => console.log(err))
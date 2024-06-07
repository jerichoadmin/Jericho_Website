import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './store/authContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sales from './components/Sales/Sales';
import FFC from './components/FFC/FFC';
import Delivery from './components/Delivery/Delivery';
import GardeningCalendar from './components/GardeningCalendar/GardeningCalendar';
import GardenResources from './components/GardenResources/GardenResources';
import GiftCard from './components/GiftCard/GiftCard';
import Radio from './components/Radio/Radio';
import Blog from './components/Blog/Blog';
import SingleBlog from './components/Blog/SingleBlog';
import Partners from './components/Partners/Partners';
import Aboutus from './components/Aboutuspage/Aboutus';
import Seminars from './components/Seminar/Seminars';
import Clubs from './components/Clubs/Clubs';
import Map from './components/Map/Map';
import ContactUs from './components/ContactUs/ContactUs';
import Brands from './components/Brands/Brands';
import WhyWorkHere from './components/WhyWorkHere/WhyWorkHere';
import AdminHome from './components/AdminPortal/AdminHome/AdminHome';
import NewBlogPost from './components/AdminPortal/BlogPosts/NewBlogPost/NewBlogPost';
import LoginPage from './components/AdminPortal/LoginPage/LoginPage'
import EditBlogMain from './components/AdminPortal/BlogPosts/EditBlogPost/Main/EditBlogMain';
import EditSalesMain from './components/AdminPortal/SalesPosts/EditSalesPost/Main/EditSalesMain';
import SingleBlogEdit from './components/AdminPortal/BlogPosts/EditBlogPost/SingleBlogEdit';
import NewSalesPost from './components/AdminPortal/SalesPosts/NewSalesPost/NewSalesPost';
import SingleEditSalesPost from './components/AdminPortal/SalesPosts/EditSalesPost/SingleEditSalesPost'
import NewGalleryImg from './components/AdminPortal/HomeGallery/NewGalleryImg';
import DeleteGalleryImg from './components/AdminPortal/HomeGallery/DeleteGalleryImg';
import NewGallery2Img from './components/AdminPortal/HomeGallery2/NewGallery2Img';
import DeleteGallery2Img from './components/AdminPortal/HomeGallery2/DeleteGallery2Img';
import PreviewPost from './components/AdminPortal/BlogPosts/PreviewPost/PreviewPost';
import SinglePreviewEdit from './components/AdminPortal/BlogPosts/PreviewPost/SinglePreviewEdit';
import TypesofPlants from './components/TypesofPlants/TypesofPlants';
import Bedding from './components/TypesofPlants/subpages/Bedding';
import Annuals from './components/TypesofPlants/subpages/Annuals';
import Perennials from './components/TypesofPlants/subpages/Perennials';
import Roses from './components/TypesofPlants/subpages/Roses';
import Trees from './components/TypesofPlants/subpages/Trees';
import Landscaping from './components/TypesofPlants/subpages/Landscaping';
import Pots from './components/TypesofPlants/subpages/Pots';
import Art from './components/TypesofPlants/subpages/Art';
import Fountains from './components/TypesofPlants/subpages/Fountains';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Videos from './components/Videos/Videos'
import SMS from './components/TermsandConditions/SMS';
import PrivacyPolicy from './components/TermsandConditions/PrivacyPolicy';
import PopUpForm from './components/AdminPortal/Popup/PopUpForm';
import Instagram from './components/Instagram/Instagram';
import FAQ from './components/Warranty/FAQ';
import NewPromotionsPost from './components/AdminPortal/PromotionsPosts/NewPromotionsPost/NewPromotionsPost';
import Promotions from './components/Promotions/Promotions';
import EditPromotionsPost from './components/AdminPortal/PromotionsPosts/EditPromotionsPost/EditPromotionsPost';

import './App.css';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />   
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/sales' element={<Sales />}/>
       <Route path='/ffc' element={<FFC />}/>
       <Route path='/delivery' element={<Delivery />}/>
       <Route path='/gardeningcalendar' element={<GardeningCalendar/>}/>
       <Route path='/gardenresources' element={<GardenResources/>}/>
       <Route path='/giftcard' element={<GiftCard />}/>
       <Route path='/radio' element={<Radio />}/>
       <Route path='/blog' element={<Blog />}/>
       {/* <Route path='/map'  element={<Map />}/> */}
       <Route path='/singleblog/:blogid' element={<SingleBlog />}/>
       <Route path='/partners' element={<Partners />}/>
       <Route path='/aboutus' element={<Aboutus />}/>
       <Route path='/seminars' element={<Seminars />}/>
       <Route path='/clubs' element={<Clubs />}/>
       <Route path='/contact' element={<ContactUs />}/>
       <Route path='/brands' element={<Brands />}/>
       <Route path='/plants' element={<TypesofPlants />}/>
       <Route path='/bedding' element={<Bedding />}/>
       <Route path='/annuals' element={<Annuals />}/>
       <Route path='/perennials' element={<Perennials />}/>
       <Route path='/roses' element={<Roses />}/>
       <Route path='/trees' element={<Trees />}/>
       <Route path='/landscaping' element={<Landscaping />}/>
       <Route path='/pots' element={<Pots />}/>
       <Route path='/gardenart' element={<Art />}/>
       <Route path='/fountains' element={<Fountains/>}/>
       <Route path='/employment' element={<WhyWorkHere />}/>
       <Route path='/videos' element={<Videos />}/>
       <Route path='/promotions' element={<Promotions/>}/>
       <Route path='/instagram' element={<Instagram />}/>
       <Route path='/growersassurance' element={<FAQ />}/>
       <Route path='/smsterms' element={<SMS />}/>
       <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
       <Route path='/popupform' element={authCtx.token ? <PopUpForm /> : <Navigate to='/login'/>}/>
        <Route path='/adminhome' element={authCtx.token ? <AdminHome /> : <Navigate to='/login'/>}/>
        <Route path='/newblogpost' element={authCtx.token ? <NewBlogPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpost' element={authCtx.token ? <EditBlogMain/> : <Navigate to='/login'/>}/>
        <Route path='/previewblog' element={authCtx.token ? <PreviewPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpreview/:id' element={authCtx.token ? <SinglePreviewEdit /> : <Navigate to='/login'/>}/>
        <Route path='editpost/singleblogedit/:id' element={authCtx.token ? <SingleBlogEdit /> : <Navigate to='/login'/>}/>
        <Route path='/newsalespost' element={authCtx.token ? <NewSalesPost /> : <Navigate to='/login'/>}/>
        <Route path='/newgalleryimg' element={authCtx.token ? <NewGalleryImg /> : <Navigate to='/login'/>}/>
        <Route path='/deletegalleryimg' element={authCtx.token ? <DeleteGalleryImg/> : <Navigate to='/login'/>}/>
        <Route path='/newgallery2img' element={authCtx.token ? <NewGallery2Img /> : <Navigate to='/login'/>}/>
        <Route path='/deletegallery2img' element={authCtx.token ? <DeleteGallery2Img/> : <Navigate to='/login'/>}/>
        <Route path='/editsalespost' element={authCtx.token ? <EditSalesMain/> : <Navigate to='/login'/>}/>
        <Route path='editsalespost/singlesaleedit/:id' element={authCtx.token ? <SingleEditSalesPost /> : <Navigate to='/login'/>}/>
        <Route path='/newpromotionspost' element={authCtx.token ? <NewPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='/deletepromotionspost' element={authCtx.token ? <EditPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='/login' element={!authCtx.token ? <LoginPage /> : <Navigate to='/adminhome'/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

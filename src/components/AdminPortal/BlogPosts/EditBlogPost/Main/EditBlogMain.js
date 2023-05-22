import React, {useState, useEffect} from 'react'
import MobileEditBlogPost from '../MobileEditBlostPost';
import EditBlogPost from '../EditBlogPost';


function EditBlogMain() {


  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <div>
    {isMobile ? (
      <MobileEditBlogPost />
    ) : (
      <EditBlogPost />
    )}
  </div>
  )
}

export default EditBlogMain
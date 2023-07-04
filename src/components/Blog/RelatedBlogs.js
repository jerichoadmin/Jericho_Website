import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './RelatedBlogs.css'




function RelatedBlogs({blogIdNum}) {
const [blogData, setBlogData] = useState([])
const [currentTags, setCurrentTags] = useState([])
const [otherTags, setOtherTags] = useState('')
const [otherBlogs, setOtherBlogs] = useState([])

    useEffect(() => {
        axios
          .get(`https://jericho-server.onrender.com/blog`)
          .then((res) => {
            setBlogData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


      const handlePostClick = (blogtableid) => {
        const newUrl = `/singleblog/${blogtableid}`;
        window.location.href = newUrl;
      };
    



const thisIndex = blogData.findIndex(x => x.blogtableid === +blogIdNum);
const filteredObject = blogData.filter((_, index) => index === thisIndex);
const tagsArray = filteredObject[0]?.tags
 
useEffect(() => {
setCurrentTags(tagsArray)
}, [tagsArray])


useEffect(() => {
  const otherPosts = blogData.filter(post => post.blogtableid !== +blogIdNum);
  setOtherBlogs(otherPosts)
  
  const otherTags = otherPosts.flatMap(post => post.tags);
  setOtherTags(otherTags)
}, [currentTags]);



const commonTags = currentTags && otherTags && currentTags.length > 0 && otherTags.length > 0 ? currentTags.filter(tag => otherTags.includes(tag)) : [];


const filteredBlogs = otherBlogs.filter(blog => {
  // Check if the blog's tags array exists and has at least one common tag
  return blog.tags && blog.tags.some(tag => commonTags.includes(tag));
});

let mappedBlogs;

if (filteredBlogs.length === 0) {
  mappedBlogs = <p className='NoRelated'>No Related Posts</p>;
} else {
  mappedBlogs = filteredBlogs.map(blog => {
    return (
      <div key={blog.blogtableid} className='related_card'>
        <h1 className='h1r'>{blog.title}</h1>
        <img alt='' src={blog.img_1_url} />
        <button className='related_button' onClick={() => handlePostClick(blog.blogtableid)}>
          Read More
        </button>
      </div>
    );
  });
}


  return (
    <div className='eh'>
      <div className='rp'>
    <h2>Related Posts</h2>
      </div>

   <div className='related_container'>
    <div className='inner_container'>


    {mappedBlogs}

    </div>
    </div>

  


</div>
  )
}

export default RelatedBlogs;
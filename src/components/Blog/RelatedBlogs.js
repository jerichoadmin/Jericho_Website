import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios';

function RelatedBlogs(blogIdNum) {
const [blogData, setBlogData] = useState([])
const [selectedTags, setSelectedTags] = useState([]);


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

      const handleTagSelection = (tag) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      };
    
      const filteredPosts = useMemo(() => {
        if (selectedTags.length === 0) {
          return blogData; // Show all posts when no tags are selected
        } else {
          return blogData.filter(
            (post) =>
              post.tags.some((tag) => selectedTags.includes(tag)) && post.id !== blogIdNum
          );
        }
      }, [blogData, selectedTags, blogIdNum]);


   


  return (
  <div>

    <h1>Related Posts</h1>


    {filteredPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* Display other post details */}
        </div>
      ))}



</div>
  )
}

export default RelatedBlogs;
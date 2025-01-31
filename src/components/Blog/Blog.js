import React, { useState, useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import Loading from '../../SVGs/Loading';
import { Helmet } from 'react-helmet';
import TagSearchBar from './TagSearchBar';
import axios from 'axios';

function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(0);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jericho-server-eb9k.onrender.com/blog/${offset}`)
      .then((res) => {
        setBlogData([res.data]);
        setLoading(false);
        if (res.data) {
          setCount(res.data.count);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [offset]);

  useEffect(() => {
    mapPages();
  }, [blogData]);

  const mapPages = () => {
    setPages(count / 5.05);
  };


  function mapButtons(count) {
    const buttons = [];
    const maxVisible = 3; 
    let start = Math.max(1, active - Math.floor(maxVisible / 2));
    let end = Math.min(start + maxVisible, count);
  
    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }
  
    for (let i = start; i < end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => {
            setOffset(i * 5);
            setActive(i);
          }}
          className={active === i ? 'active_button' : ''}
        >
          {i + 1}
        </button>
      );
    }
  
    return buttons;
  }
  const hanldeScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (searchTerm) => {
    console.log(blogData); // Debug: What does the blogData look like?
    const filtered = blogData[0]?.rows?.filter((post) => {
      return post.tags && post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    console.log(filtered); // Debug: What does the filtered result look like?
    setFilteredPosts(filtered || []);
  };
  





  return (
    <div className='Blog'>
      <Helmet>
        <title>Jericho Nursery Blog - Gardening Tips, Plant Care, and More</title>
        <meta name='description' content='Discover helpful gardening tips, plant care advice, and more on the Jericho Nursery blog.' />
        <meta property='og:title' content='Jericho Nursery Blog - Gardening Tips, Plant Care, and More' />
        <meta property='og:description' content='Discover helpful gardening tips, plant care advice, and more on the Jericho Nursery blog.' />
        <meta property='og:image' content='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg' />
        <meta property='og:type' content='website' />

      </Helmet>

      <div className='blog_welcome'>
        <h1>Blog and Gallery</h1>
        <p>
          Level up your gardening skills with Jericho Nursey's blog. Get expert tips and techniques for a thriving garden that will impress all.
          Don't miss out on this valuable resource to unlock your green thumb's true potential.
        </p>
      </div>

      {/* <div>
        <TagSearchBar tags={blogData[0]?.rows?.map((post) => post.tags).flat()} handleSearch={handleSearch} />
      </div> */}

      {loading ? (
        <div className='loading_anim'>
          <Loading />
        </div>
      ) : (
        <div className='card_container'>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((blogPost) => (
              <div className='small_blog_card' key={blogPost.id}>
                <div className='small_blog_card_top'>
                  <img src={blogPost.img_1_url} className='small_blog_photo' alt={blogPost.img_1_alt_text} />
                </div>
                <div className='small_blog_card_bottom'>
                  <h3>{blogPost.title}</h3>
                  <div className='text_overflow'>
                    <p>{blogPost.intro}</p>
                  </div>
                  <div className='small_blog_card_button'>
                    <Link to={`/singleblog/${blogPost.blogtableid}`}>
                      <button>Read More</button>
                    </Link>
                    <p>{blogPost.id}</p>
                  </div>
                  <div className='small_blog_card_span'>
                    <span>{blogPost.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            blogData[0]?.rows?.map((blogPost) => (
              <div className='small_blog_card' key={blogPost.id}>
                <div className='small_blog_card_top'>
                  <img src={blogPost.img_1_url} className='small_blog_photo' alt={blogPost.img_1_alt_text} />
                </div>
                <div className='small_blog_card_bottom'>
                  <h3>{blogPost.title}</h3>
                  <div className='text_overflow'>
                    <p>{blogPost.intro}</p>
                  </div>
                  <div className='small_blog_card_button'>
                    <Link to={`/singleblog/${blogPost.blogtableid}`}>
                      <button>Read More</button>
                    </Link>
                    <p>{blogPost.id}</p>
                  </div>
                  <div className='small_blog_card_span'>
                    <span>{blogPost.date}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <div className='blog_snav_buttons'>
        <button onClick={hanldeScrollTop}>Back to Top</button>
      </div>
      <div className='page_numbers'>
        <button
          onClick={() => {
            setOffset(0);
            setActive(0);
          }}
          className={active === 0 ? 'active_button' : ''}
        >
          1
        </button>
        {mapButtons(pages)}
      </div>
    </div>
  );
}

export default Blog;

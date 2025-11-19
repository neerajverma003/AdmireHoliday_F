import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogDetailsContext } from '../../context/blogContext.jsx';
import { getBlogDetails } from "../../api/api.js";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaWhatsapp, 
  FaLink,
  FaShareAlt 
} from 'react-icons/fa';
import logo from '../../assets/images/admire-logo.webp'; // Import your logo

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShareOptions, setShowShareOptions] = useState(null); // Track which blog's share options are visible
  const navigate = useNavigate();
  
  const { setBlogDetails } = useContext(BlogDetailsContext);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       setLoading(true);
  //       // const response = await getBlogDetails();
  //       const response = await fetch('http://localhost:5000/api/v1/blog')
  //       const result = await response.json()
  //       console.log("Blog data",result)
  //       const simplifiedBlogs = response.data.blogData.map(blog => ({
  //         id: blog._id,              
  //         title: blog.title,         
  //         content: blog.content,      
  //         image: blog.cover_image,    
  //         date: new Date(blog.createdAt).toLocaleDateString() 
  //       }));
  //       setBlogs(simplifiedBlogs);
  //     } catch (error) {
  //       console.error("Error loading blogs:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // },[]);


  useEffect(() => {
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/v1/blog');
      const result = await response.json();
      console.log("Blog data", result);

      if (result.success && result.blogData) {
        const simplifiedBlogs = result.blogData.map(blog => ({
          id: blog._id,
          title: blog.title,
          content: blog.content,
          image: blog.cover_image,
          date: new Date(blog.createdAt).toLocaleDateString()
        }));
        setBlogs(simplifiedBlogs);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error loading blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  fetchBlogs();
}, []);
  const handleBlogClick = (blog) => {
    setBlogDetails(blog);
    navigate(`/blog/${blog.id}`);
  };

  const shareBlog = (platform, blog) => {
    const blogUrl = `${window.location.origin}/blog/${blog.id}`;
    const shareText = `Check out this blog from Admire Holidays: ${blog.title}`;
    
    // Include company logo in share (works for some platforms)
    const logoUrl = `${window.location.origin}${logo}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}&picture=${encodeURIComponent(logoUrl)}&description=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(blogUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${blogUrl}`)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText}\n${blogUrl}`);
        alert('Link copied to clipboard!');
        break;
      default:
        break;
    }
    setShowShareOptions(null); // Close share options after sharing
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-20">
        <p>No blogs found. Check back later!</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer relative"
            onClick={() => handleBlogClick(blog)}
          >
            {/* Blog Image */}
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            
            {/* Blog Content */}
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-600 line-clamp-3">
                {blog.content.replace(/<[^>]*>/g, '')}
              </p>
              
              <div className="flex justify-between items-center mt-4">
                <button 
                  className="text-yellow-600 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(blog);
                  }}
                >
                  Read More →
                </button>
                
                {/* Share Button */}
                <div className="relative">
                  <button 
                    className="text-gray-500 hover:text-yellow-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowShareOptions(showShareOptions === blog.id ? null : blog.id);
                    }}
                  >
                    <FaShareAlt />
                  </button>
                  
                  {/* Share Options Dropdown */}
                  {showShareOptions === blog.id && (
                    <div 
                      className="absolute right-0 bottom-8 bg-white shadow-lg rounded-md p-2 z-10 flex gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        onClick={() => shareBlog('facebook', blog)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                        title="Share on Facebook"
                      >
                        <FaFacebook />
                      </button>
                      <button 
                        onClick={() => shareBlog('twitter', blog)}
                        className="p-2 text-blue-400 hover:bg-blue-50 rounded-full"
                        title="Share on Twitter"
                      >
                        <FaTwitter />
                      </button>
                      <button 
                        onClick={() => shareBlog('linkedin', blog)}
                        className="p-2 text-blue-700 hover:bg-blue-50 rounded-full"
                        title="Share on LinkedIn"
                      >
                        <FaLinkedin />
                      </button>
                      <button 
                        onClick={() => shareBlog('whatsapp', blog)}
                        className="p-2 text-green-500 hover:bg-green-50 rounded-full"
                        title="Share on WhatsApp"
                      >
                        <FaWhatsapp />
                      </button>
                      <button 
                        onClick={() => shareBlog('copy', blog)}
                        className="p-2 text-gray-500 hover:bg-gray-50 rounded-full"
                        title="Copy link"
                      >
                        <FaLink />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
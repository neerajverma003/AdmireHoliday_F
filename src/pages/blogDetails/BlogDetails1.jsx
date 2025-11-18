import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BlogDetailsContext } from '../../context/blogContext.jsx';
import { getBlogDetailsPage } from "../../api/api.js";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaWhatsapp, 
  FaLink,
  FaShareAlt,
  FaEnvelope,
  FaTimes
} from 'react-icons/fa';
import companyLogo from '../../assets/images//admire-logo.webp'; // Import your company logo

const BlogDetails1 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);
  
  const { blogDetails } = useContext(BlogDetailsContext);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        if (blogDetails && blogDetails.id === id) {
          setBlogData({
            ...blogDetails,
            url: window.location.href,
            hashtags: blogDetails.tags ? blogDetails.tags.join(',') : "Travel,Blog,Vacation"
          });
        } else {
          const response = await getBlogDetailsPage(id);
          const blog = response.data;
          setBlogData({
            ...blog,
            url: window.location.href,
            hashtags: blog.tags ? blog.tags.join(',') : "Travel,Blog,Vacation",
            date: new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          });
        }
      } catch (error) {
        console.error("Error loading blog:", error);
        navigate('/blog', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id, blogDetails, navigate]);

  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blogData.title,
          text: blogData.description || blogData.content.substring(0, 100),
          url: blogData.url,
          files: [new File([companyLogo], 'company-logo.png', { type: 'image/png' })]
        });
      } else {
        setShowShareDialog(true);
      }
    } catch (error) {
      console.log('Sharing cancelled', error);
    }
  };

  const shareTo = (platform) => {
    let shareUrl = '';
    const encodedUrl = encodeURIComponent(blogData.url);
    const encodedTitle = encodeURIComponent(`${blogData.title} | Admire Holidays`);
    const encodedHashtags = encodeURIComponent(blogData.hashtags);
    const encodedDescription = encodeURIComponent(blogData.description || blogData.content.substring(0, 150));
    const logoUrl = encodeURIComponent(window.location.origin + companyLogo);

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${encodedHashtags}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}&picture=${logoUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}&source=AdmireHolidays`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedTitle}%0A%0A${encodedDescription}%0A%0A${encodedUrl}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0ARead more: ${blogData.url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareDialog(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(blogData.url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const calculateReadingTime = (content) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.split(/\s+/).length;
    return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <NavBar/>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
        <Footer/>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <NavBar/>
        <div className="text-center py-20">
          <p className="text-xl mb-4">Blog not found</p>
          <button 
            onClick={() => navigate('/blog')}
            className="mt-4 text-yellow-600 hover:text-yellow-700 transition font-medium"
          >
            ← Back to All Articles
          </button>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <NavBar/>
      
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '95%' }}>
        <div className="flex justify-between items-center mb-8">
          <motion.button 
            onClick={() => navigate('/blog')}
            className="flex items-center text-yellow-600 hover:text-yellow-700 transition"
            whileHover={{ x: -2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Articles
          </motion.button>
          
          <div className="relative">
            <motion.button 
              onClick={handleNativeShare}
              className="flex items-center text-yellow-600 hover:text-yellow-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaShareAlt className="h-5 w-5 mr-2" />
              Share
            </motion.button>

            {showShareDialog && (
              <motion.div 
                className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowShareDialog(false)}
              >
                <motion.div 
                  className="bg-white rounded-lg shadow-xl w-full max-w-md"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center border-b p-4">
                    <h3 className="text-lg font-semibold">Share this article</h3>
                    <button 
                      onClick={() => setShowShareDialog(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  
                  <div className="p-6 grid grid-cols-3 gap-4">
                    <button
                      onClick={() => shareTo('facebook')}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <FaFacebook className="text-blue-600 text-xl" />
                      </div>
                      <span className="text-sm">Facebook</span>
                    </button>
                    
                    <button
                      onClick={() => shareTo('twitter')}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <FaTwitter className="text-blue-400 text-xl" />
                      </div>
                      <span className="text-sm">Twitter</span>
                    </button>
                    
                    <button
                      onClick={() => shareTo('linkedin')}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <FaLinkedin className="text-blue-700 text-xl" />
                      </div>
                      <span className="text-sm">LinkedIn</span>
                    </button>
                    
                    <button
                      onClick={() => shareTo('whatsapp')}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <FaWhatsapp className="text-green-500 text-xl" />
                      </div>
                      <span className="text-sm">WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => shareTo('email')}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <FaEnvelope className="text-gray-600 text-xl" />
                      </div>
                      <span className="text-sm">Email</span>
                    </button>
                    
                    <button
                      onClick={copyToClipboard}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <FaLink className="text-gray-600 text-xl" />
                      </div>
                      <span className="text-sm">{isCopied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        <motion.article 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-96">
            <img 
              alt={blogData.title} 
              className="w-full h-full object-cover" 
              src={blogData.image || "https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg"}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 flex items-end p-6">
              {blogData.tags && blogData.tags.length > 0 && (
                <span className="text-white text-sm bg-yellow-600 px-3 py-1 rounded-full">
                  {blogData.tags[0]}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Published: {blogData.date}</span>
              <span className="mx-2">•</span>
              <span>{calculateReadingTime(blogData.content)}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {blogData.title}
            </h1>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blogData.content }} 
            />

            {/* Fixed share buttons at bottom of article */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => shareTo('facebook')}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  title="Share on Facebook"
                >
                  <FaFacebook className="text-xl" />
                </button>
                <button
                  onClick={() => shareTo('twitter')}
                  className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                  title="Share on Twitter"
                >
                  <FaTwitter className="text-xl" />
                </button>
                <button
                  onClick={() => shareTo('linkedin')}
                  className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  title="Share on LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </button>
                <button
                  onClick={() => shareTo('whatsapp')}
                  className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  title="Share on WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                  title="Copy link"
                >
                  <FaLink className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </main>

      <Footer/>
    </div>
  );
};

export default BlogDetails1;
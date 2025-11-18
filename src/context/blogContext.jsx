import React, { useContext, createContext, useState } from "react";

export const BlogDetailsContext = createContext();

export const useBlogDetailsContext = () => {
    return useContext(BlogDetailsContext);
};

export const BlogDetailsProvider = ({ children }) => {
    const [blogDetails, setBlogDetails] = useState(null);

    return (
        <BlogDetailsContext.Provider value={{ blogDetails, setBlogDetails }}>
            {children}
        </BlogDetailsContext.Provider>
    );
};

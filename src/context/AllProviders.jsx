// AllProviders.js
import React from "react";
import { BlogDetailsProvider } from "./blogContext";


export const AllProviders = ({ children }) => {
  return (
    <BlogDetailsProvider>
     
          {children}
       
    </BlogDetailsProvider>
  );
};

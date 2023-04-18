import React, {createContext, useEffect, useState} from 'react';
import {Cloudinary} from "@cloudinary/url-gen";

const CloudinaryContext = createContext(null);


const cloudinary = new Cloudinary( {cloud: { cloudName: 'smartguess'}});
export const CloudinaryProvider = ({ children }) => {

  return (
    <CloudinaryContext.Provider value={cloudinary}>
      {children}
    </CloudinaryContext.Provider>
  );

}
export default CloudinaryContext;

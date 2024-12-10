import { blueGrey } from '@mui/material/colors';
import React, { createContext, useContext, useState } from 'react';

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState( blueGrey[100]);
  const [colapsed, setColapsed] = useState(false);
  const [currentImage, setCurrentImage] = useState("https://demos.creative-tim.com/material-dashboard-material-ui-v4/static/media/sidebar-4.dd4b5581.jpg");
  const setImage = (image) => {
    setCurrentImage(image);
    localStorage.setItem('image', image);
  };
  const iscolapsed = () => {
    setColapsed(!colapsed);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('currentColor', color);
  };
  return (
    <StateContext.Provider value={{ currentColor,setCurrentColor, setColor,currentImage,setCurrentImage, setImage,iscolapsed,colapsed,setColapsed}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

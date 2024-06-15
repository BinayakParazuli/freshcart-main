// src/ThemeContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [test, settest] = useState(2);

  const [show,set_show]=useState(false);
    const [showsignup,set_showsignup]=useState(false);
    const[showcart,set_showcart]=useState(false);
    const[showCheckout,set_showCheckout]=useState(false);
    const[showSearch,set_showSearch]= useState(false);
    const[showGreens,set_showGreens]=useState(false);
    const[showGroceries,set_showGroceries]=useState(false);
    const[showMeat,set_showMeat]= useState(false);
    const[showFruits,set_showFruits]=useState(false);
    const[showHome,set_showHome]=useState(false);
    


  return (
    <ThemeContext.Provider value={{ show, set_show,showsignup,set_showsignup,showcart,set_showcart,showCheckout,set_showCheckout,showSearch,set_showSearch,showGreens,set_showGreens,showGroceries,set_showGroceries,showHome,set_showHome,showFruits,set_showFruits,showMeat,set_showMeat }}>
      {children}
    </ThemeContext.Provider>
  );
};

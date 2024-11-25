import React, { useState, useEffect } from "react";
import { FirstPage } from "./Components/FirstPage";
import { LandingPage } from "./Components/LandingPage";
import "./App.css";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showFirstPage, setShowFirstPage] = useState(false); 
  const [landingPageTransition, setLandingPageTransition] = useState(false);
  const [firstPageTransition, setFirstPageTransition] = useState(false); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLandingPageTransition(true); 
      setFirstPageTransition(true);  
      setTimeout(() => {
        setShowLandingPage(false); 
        setShowFirstPage(true);    
      }, 3000); 

    }, 6000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-container">
      {showLandingPage && (
        <div className={`landing-page-container ${landingPageTransition ? "transition-out" : ""}`}>
          <LandingPage />
        </div>
      )}
      { (
        <div className={`first-page-container ${firstPageTransition ? "transition-in" : ""}`}>
          <FirstPage />
        </div>
      )}
    </div>
  );
}

export default App;

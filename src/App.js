import Landing from "./pages/Landing/landing";
import Work from "./pages/Work/work";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";


const App= () => {
  return (
    <div className="app">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Landing />} />
          <Route path ="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
};
 
export default App;

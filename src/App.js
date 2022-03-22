import Landing from "./pages/Landing/landing";
import Work from "./pages/Work/work";
import About from "./pages/About/about";
import React from "react";
import Layout from "./components/Layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

// const Layout = ({ children }) => (
//   <div>
//     <Header />
//       {children}
//     <Footer />
//   </div>
// );



const App= () => {
  return (
    <div className="app">

      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Layout> */}
            <Route path ="/" element={<Landing />} />
            <Route path ="/work" element={<Work />} />
            <Route path ="/about" element={<About />} />
          {/* </Layout> */}
        </Routes>
      </BrowserRouter>
        {/* <Footer/> */}
    </div>
  );
};
 
export default App;

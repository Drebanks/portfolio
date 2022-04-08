import Landing from "./pages/Landing/landing";
import Work from "./pages/Work/work";
import About from "./pages/About/about";
import React from "react";
import Layout from "./components/Layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Scroll from "./components/Scroll/scroll";



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Landing />
              </Layout>
            }
          />
          <Route
            path="/work"
            element={
              <Layout>
                <Work />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

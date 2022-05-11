import Landing from "./pages/Landing/landing";
import Work from "./pages/Work/work";
import Lonne from "./pages/Lonne/lonne";
import Todlr from "./pages/Todlr/todlr";
import Patricia from "./pages/Patricia/patricia";
import About from "./pages/About/about";
import React from "react";
import Layout from "./components/Layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";




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
            path="/lonne"
            element={
              <Layout>
                <Lonne />
              </Layout>
            }
          />
          <Route
            path="/todlr"
            element={
              <Layout>
                <Todlr />
              </Layout>
            }
          />
          <Route
            path="/patricia"
            element={
              <Layout>
                <Patricia />
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

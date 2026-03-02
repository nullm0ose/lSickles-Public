import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- switched to HashRouter
import Layout from "./Layout";
import Home from "./pages/Home";
import Poetry from "./pages/Poetry";
import Essays from "./pages/Essays";
import Fiction from "./pages/Fiction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Manage from "./pages/Manage"; // ✅ Manage page

// Dynamic Post Page
import PostPage from "./pages/PostsPage";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Static pages */}
          <Route path="poetry" element={<Poetry />} />
          <Route path="essays" element={<Essays />} />
          <Route path="fiction" element={<Fiction />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="manage" element={<Manage />} />

          {/* Dynamic posts */}
          <Route path=":type/:slug" element={<PostPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Poetry from "./pages/Poetry";
import Essays from "./pages/Essays";
import Fragments from "./pages/Fragments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Manage from "./pages/Manage";
import PostPage from "./pages/PostsPage";

import "./index.css";

// Use Vite's BASE_URL so paths work on GitHub Pages and custom domains
const BASE_NAME = import.meta.env.BASE_URL;
console.log("Base URL:", BASE_NAME);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="poetry" element={<Poetry />} />
      <Route path="essays" element={<Essays />} />
      <Route path="fragments" element={<Fragments />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="manage" element={<Manage />} />
      <Route path=":type/:slug" element={<PostPage />} />
    </Route>
  </Routes>
</HashRouter>
  </React.StrictMode>
);
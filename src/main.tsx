import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Poetry from "./pages/Poetry";
import TheArchive from "./pages/TheArchive";
import Fragments from "./pages/Fragments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostPage from "./pages/PostsPage";

import "./index.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="poetry" element={<Poetry />} />
      <Route path="archive" element={<TheArchive />} />
      <Route path="fragments" element={<Fragments />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path=":type/:slug" element={<PostPage />} />
    </Route>
  </Routes>
</HashRouter>
  </React.StrictMode>
);
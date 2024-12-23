import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FilterSection from "./components/FilterBar/FilterBar";
import Home from "./pages/Home";
import PostsProvider from "./context/PostProvider";


const App = () => {
  return (
    <PostsProvider>
      <Router>
        <Header />
        <HeroSection />
        <FilterSection />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/:category" element={<Home />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
};

export default App;

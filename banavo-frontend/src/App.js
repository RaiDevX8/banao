import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FilterBar from "./components/FilterBar/FilterBar";
import ArticleCard from "./components/PostCard/ArticleCard";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FilterBar />
      <ArticleCard/>
    </div>
  );
};

export default App;

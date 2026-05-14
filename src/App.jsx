
// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import blogData from './data/blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About 
        image={blogData.image} 
        about={blogData.about} 
      />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
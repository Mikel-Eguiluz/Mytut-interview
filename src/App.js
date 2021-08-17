import "./App.css";
import React, { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";

function App() {
  const ENDPPOINT = "https://www.mytutor.co.uk/api/v1/articles/";

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch(ENDPPOINT);
      const data = await response.json();
      setArticles(data.content);
    }
    getArticles();
  }, []);

  return (
    <div className="App">
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;

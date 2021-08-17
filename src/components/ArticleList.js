import React from "react";
import "./ArticleList.css";

export default function ArticleList({ articles }) {
  return (
    <div className="container">
      {articles.map((article) => (
        <div className="card">
          <h3>{article.question}</h3>
          <span>{article.answerHtmlStripped}</span>
          <span>{article.tutor.abbreviatedName}</span>
        </div>
      ))}
    </div>
  );
}
//article.answerHtmlStripped

import React, { useState } from "react";
import axios from "axios";
import "./article.css";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/new-article",
        {
          title,
          content,
          imageUrl,
        }
      );
      console.log("Response:", response); // Debugging line
      if (response.status === 200) {
        // Check for successful status code
        alert("Article saved successfully!");
        window.location.href = "/articles"; // Redirect to articles page
      } else {
        alert(
          "Article saved, but unexpected response status: " + response.status
        );
      }
    } catch (error) {
      console.error("Error:", error); // Debugging line
      alert("Error saving article: " + error.message);
    }
  };

  return (
    <div className="new-article-container">
      <h2 className="heading">Add New Article</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="textarea"
          />
        </div>
        <div className="form-group">
          <label className="label">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewArticle;

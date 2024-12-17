import React, { useState } from "react";
import { uploadImage } from "../../api/upload";
import { createQuote } from "../../api/quotes";
import { useNavigate } from "react-router-dom";
import "./style.css";

const QuoteCreationPage = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    try {
      const mediaUrl = await uploadImage(file);
      console.log('mediaUrl',mediaUrl)
      await createQuote(token, text, mediaUrl);
      alert("Quote created!");
      navigate("/quotes");
    } catch (error) {
      alert("Failed to create quote.");
    }
  };

  return (
    <div className="create-quote-container">
  <div className="create-quote-form">
    <h1>Create Quote</h1>
    <input 
      placeholder="Enter quote" 
      onChange={(e) => setText(e.target.value)} 
    />
    <input 
      type="file" 
      onChange={(e) => setFile(e.target.files[0])} 
    />
    <button onClick={handleSubmit}>Submit</button>
  </div>
</div>

  );
};

export default QuoteCreationPage;

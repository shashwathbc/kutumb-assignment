import React, { useState } from "react";
import { uploadImage } from "../../api/upload";
import { createQuote } from "../../api/quotes";
import { useNavigate } from "react-router-dom";

const QuoteCreationPage = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    try {
      const mediaUrl = await uploadImage(file);
      await createQuote(token, text, mediaUrl);
      alert("Quote created!");
      navigate("/quotes");
    } catch (error) {
      alert("Failed to create quote.");
    }
  };

  return (
    <div>
      <h1>Create Quote</h1>
      <input placeholder="Enter quote" onChange={(e) => setText(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuoteCreationPage;

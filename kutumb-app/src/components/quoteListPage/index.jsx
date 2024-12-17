import React, { useState, useEffect } from "react";
import { getQuotes } from "../../api/quotes";
import FloatingButton from "../floatingButton";
import QuoteCard from "../quoteCardPage";
import { useNavigate } from "react-router-dom";

const QuoteListPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const loadQuotes = async () => {
    const data = await getQuotes(token, 20, offset);
    if (data.length === 0) {
      setHasMore(false);
    } else {
      console.log('Fetched Quotes:', data, data?.data);
      setQuotes(prevQuotes => [...prevQuotes, ...data?.data]); // Use a callback to avoid state conflicts
      setOffset(prevOffset => prevOffset + 20);
    }
  };
  

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div>
      {/* {quotes.map((quote) => ( */}
        <QuoteCard quotes={quotes} />
      {/* ))} */}
      {hasMore && <button onClick={loadQuotes}>Load More</button>}
      <FloatingButton onClick={() => navigate("/create")} />
    </div>
  );
};

export default QuoteListPage;

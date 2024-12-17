import "./style.css";

const QuoteCard = ({ quotes }) => (
    <div className="quote-grid">
       {
        quotes?.map((quote) => (
          <div className="quote-card-container" key={quote.id}>
          <div className="quote-image">
            <img
              src={quote?.mediaUrl || "https://via.placeholder.com/300x200"}
              alt="Quote"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200";
              }}
            />
          </div>
          <div className="quote-text">
            <p>{quote?.text || "No quote text available"}</p>
          </div>
          <div className="quote-footer">
            <small>
              {quote?.username} |{" "}
              {new Date(quote?.createdAt).toLocaleDateString()}
            </small>
          </div>
        </div>
        ))
       }
    </div>
  );
  export default QuoteCard;
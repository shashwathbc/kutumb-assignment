import "./style.css";

const QuoteCard = ({ quote }) => (
    <div className="quote-card-container">
      <img src={quote?.mediaUrl} alt="Quote" style={{ width: "100%" }} />
      <p>{quote?.text}</p>
      <small>{quote?.username} | {quote?.created_at}</small>
    </div>
  );
  export default QuoteCard;
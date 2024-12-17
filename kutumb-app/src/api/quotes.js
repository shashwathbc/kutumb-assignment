import axios from "axios";

export const createQuote = async (token, text, mediaUrl) => {
    const response = await axios.post(
      "https://assignment.stage.crafto.app/postQuote",
      { text, mediaUrl },
      { headers: { Authorization: token } }
    );
    return response.data;
  };
  
  export const getQuotes = async (token, limit, offset) => {
    const response = await axios.get(
      `https://assignment.stage.crafto.app/getQuotes?limit=${limit}&offset=${offset}`,
      { headers: { Authorization: token } }
    );
    return response.data; // Returns paginated list
  };
  
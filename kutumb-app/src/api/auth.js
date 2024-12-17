import axios from "axios";

 const login = async (username, otp) => {
  const response = await axios.post("https://assignment.stage.crafto.app/login", {
    username,
    otp,
  });
  return response.data; // Returns token
};

export default login;

require("dotenv").config();

export const config = {
  API_URL: process.env.REACT_APP_URL_API || "http://localhost:5000",
};

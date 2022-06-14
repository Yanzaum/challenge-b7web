require("dotenv").config();

export const config = {
  env: {
    API_URL:
      process.env.REACT_APP_URL_API ||
      "https://challenge-b7web.herokuapp.com/api",
  },
};

const axios = require("axios");

async function getAuthToken(
  email,
  name,
  rollNo,
  accessCode,
  clientID,
  clientSecret
) {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/auth",
      {
        email,
        name,
        rollNo,
        accessCode,
        clientID,
        clientSecret,
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Authentication Error:");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    return null;
  }
}

module.exports = getAuthToken;
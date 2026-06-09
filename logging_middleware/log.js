const axios = require("axios");

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      }
    );

    console.log("Log sent:", response.data);
  } catch (error) {
    console.log("Logging failed");
  }
}

module.exports = Log;
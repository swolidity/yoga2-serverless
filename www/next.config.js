const withTypescript = require("@zeit/next-typescript");

const prod = process.env.NODE_ENV === "production";

module.exports = withTypescript({
  target: "serverless",
  env: {
    API_URL: prod
      ? "https://api.yoga2-serverless.now.sh"
      : "http://localhost:4000"
  }
});

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();

  response.send(
    `${todayDate.getDate()}-${
      todayDate.getMonth() + 1
    }-${todayDate.getFullYear()}`
  );
});

module.exports = app;

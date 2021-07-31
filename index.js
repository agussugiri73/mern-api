const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello");
  console.log("Hello1");
});

port = 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

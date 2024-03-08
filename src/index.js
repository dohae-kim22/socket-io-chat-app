const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "../pulic")));

const port = 4000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

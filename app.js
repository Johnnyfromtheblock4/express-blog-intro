// importo express
const express = require("express");

// definisco app
const app = express();

// definisco la porta dove deve rimanare in ascolto il server
const port = 3000;

// definisco la rotta base
app.get("/menu", (req, res) => {
  console.log("Server del mio blog");
});

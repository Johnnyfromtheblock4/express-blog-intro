// importo express
const express = require("express");

// definisco app
const app = express();

// definisco la porta dove deve rimanare in ascolto il server
const port = 3000;

// inserisco il middleware per i file statici
app.use(express.static("public"));

// definisco la rotta base
app.get("/", (req, res) => {
  console.log("Server del mio blog");
});

//definisco la rotta dei post
app.get("/posts", (req, res) => {
  const posts = [
    {
      titolo: "Welcome",
      contenuto: "Benvenuto nel mio blog!",
      image: "/imgs/welcome.jpg",
      tags: ["welcome", "benvenuto", "welcome aboard", "benvenuto a bordo"]
    },
  ];
});

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server della pizzeria in ascolto sulla porta ${port}`);
});

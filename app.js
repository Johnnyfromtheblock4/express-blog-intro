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
      tags: ["welcome", "benvenuto", "welcome aboard", "benvenuto a bordo"],
    },
    {
      titolo: "Gitignore",
      contenuto: "Come nascondere i file a github",
      image: "/imgs/gitignore.png",
      tags: ["git", "github", "ignore"],
    },
    {
      titolo: "Porta",
      contenuto:
        "In Express.js, una porta è un numero (es. 3000, 8080) che identifica un punto di comunicazione sul server dove l'applicazione ascolta le richieste HTTP. È specificata quando il server viene avviato con app.listen(porta)",
      image: "/imgs/porta.jpg",
      tags: ["porta", "door", "3000"],
    },
    {
      titolo: "Rotta",
      contenuto:
        "In Express.js, una rotta è una combinazione di un metodo HTTP (es. GET, POST) e un percorso URL (es. /users) che definisce come il server risponde a una richiesta specifica. È gestita da una funzione middleware che elabora la richiesta e restituisce una risposta",
      image: "/imgs/rotta.avif",
      tags: ["rotta", "express", "js", "expressJS"],
    },
    {
      titolo: "File Statici",
      contenuto:
        "In Express.js, un file statico è un file (es. HTML, CSS, JavaScript, immagini) servito direttamente dal server senza elaborazione dinamica. Si configura usando il middleware express.static, che mappa una directory ai file accessibili tramite URL.",
      image: "/imgs/file-statici",
      tags: ["file statici", "html", "json", "css"],
    },
  ];
  // restituisco l'array contenente il menù
  res.json(posts);
});

// definisco la rotta bacheca
app.get("/bacheca", (req, res) => {
  res.json(posts);
});

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server della pizzeria in ascolto sulla porta ${port}`);
});

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
  res.send("Server del mio blog in ascolto");
});

//definisco la rotta dei post
app.get("/bacheca", (req, res) => {
  // const param = req.query;
  // console.log(param);

  // const title = param.title;

  //con reconstructuring
  const { title } = req.query;

  const posts = [
    {
      title: "Welcome",
      content: "Benvenuto nel mio blog!",
      image: "/imgs/welcome.jpg",
      tags: ["welcome", "benvenuto", "welcome aboard", "benvenuto a bordo"],
    },
    {
      title: "Gitignore",
      content: "Come nascondere i file a github",
      image: "/imgs/gitignore.png",
      tags: ["git", "github", "ignore"],
    },
    {
      title: "Porta",
      content:
        "In Express.js, una porta è un numero (es. 3000, 8080) che identifica un punto di comunicazione sul server dove l'applicazione ascolta le richieste HTTP. È specificata quando il server viene avviato con app.listen(porta)",
      image: "/imgs/porta.jpg",
      tags: ["porta", "door", "3000"],
    },
    {
      title: "Rotta",
      content:
        "In Express.js, una rotta è una combinazione di un metodo HTTP (es. GET, POST) e un percorso URL (es. /users) che definisce come il server risponde a una richiesta specifica. È gestita da una funzione middleware che elabora la richiesta e restituisce una risposta",
      image: "/imgs/rotta.avif",
      tags: ["rotta", "express", "js", "expressJS"],
    },
    {
      title: "File Statici",
      content:
        "In Express.js, un file statico è un file (es. HTML, CSS, JavaScript, immagini) servito direttamente dal server senza elaborazione dinamica. Si configura usando il middleware express.static, che mappa una directory ai file accessibili tramite URL.",
      image: "/imgs/file-statici",
      tags: ["file statici", "html", "json", "css"],
    },
  ];

  let filteredPosts;
  //eseguo un controllo per verificare se title è definito o meno
  if (title != undefined) {
    filteredPosts = posts.filter((item) => {
      return item.title === title;
    });
  } else {
    filteredPosts = posts;
  }
  // con operatore ternario
  // let filteredPosts = title != undefined ? posts.filter(item => item.title === title) : posts;

  // restituisco l'array contenente il menù
  res.json(filteredPosts);
});

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server del blog in ascolto sulla porta ${port}`);
});

const fs = require('fs')
let data = fs.readFileSync('words.json')
let words = JSON.parse(data);
console.log(words)


const express = require('express')

const app = express();

const server = app.listen(3000, listening);

function listening() {
  console.log("listening on port 3000");
}

app.use(express.static('public'));

app.get('/add/:word/:score?', addWord);

function addWord(req, res) {
  const data = req.params;
  const word = data.word
  const score = data.score
  if(!score) {
    let reply = { msg: "score is required"}
  } else {
    words[word] = parseInt(score);
    let data = JSON.stringify(words, null, 2)
    fs.writeFile('words.json', data, finished)
    function finished(err) {
      console.log("all set")
    }
  }



  res.send(reply)
}

app.get('/all', sendAll);

function sendAll(req, res) {
  res.send(words)
}

app.get('/search/:word/', searchWord);

function searchWord(req, res) {
  const word = req.params.word;
  let reply;
  if(words[word]) {
    reply = {
      status: "found",
      word: word,
      score: words[word]
    }
  } else {
    reply = {
      status: "not found",
      word: word
    }
  }
  res.send(reply)
}

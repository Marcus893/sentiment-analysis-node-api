let table;
let afinn = {}

function preload() {
  table = loadTable('AFINN-111.txt', 'tsv');
}

function setup() {
  noCanvas();

  let txt = select('#txt');
  txt.input(typing);

  function typing() {
    let textinput = txt.value();
    let words = textinput.split(/\W/);
    let score = 0;
    for(let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      if(afinn.hasOwnProperty(word)) {
        score += Number(afinn[word]);
      }
    }

    let scoreP = select('#score');
    scoreP.html(score);

  }
}

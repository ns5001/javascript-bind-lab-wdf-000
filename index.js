const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking(){
    return setInterval(() => this.time++, 1000);
  }
}

function censor(word, string){
  return string.replace(new RegExp(word, 'g'), 'BLEEP');
}

const violenceCensor = censor.bind(null,'violence');

const drugsCensor = censor.bind(null,'drugs');

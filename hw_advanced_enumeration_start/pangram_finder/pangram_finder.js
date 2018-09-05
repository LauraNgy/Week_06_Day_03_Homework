const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  let pangram = false;
  const result = [];
  this.alphabet.forEach( (letter) => {
    if (this.phrase.includes(letter)) {
      result.push(letter);
    }
  });
  if (result.toString() === this.alphabet.toString()) {
    pangram = true;
  }
  return pangram;
}

module.exports = PangramFinder;

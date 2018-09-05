const AnagramFinder = function (word) {
  this.word = word;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const letterCount = function (word) {
    const wordArr = word.split('');
    const letters = {};
    wordArr.forEach( (letter) => {
      let lowerCaseLetter = letter.toLowerCase();
      if (!letters[lowerCaseLetter]) {
        letters[lowerCaseLetter] = 1;
      }
      else {
        letters[lowerCaseLetter]++;
      }
    });
    return letters;
  };

  const compareLetters = function (letters1, letters2) {
    let lettersAreSame = true;
    const keys1 = Object.keys(letters1);
    const keys2 = Object.keys(letters2);
    keys1.forEach( (key) => {
      if (!letters2.hasOwnProperty(key) || letters1[key] !== letters2[key]) {
        lettersAreSame = false;
      }
    });
    keys2.forEach( (key) => {
      if (letters1[key] === undefined) {
        lettersAreSame = false;
      }
    });
    return lettersAreSame;
  };

  const result = otherWords.filter( (wordToCompare) => {
    if (wordToCompare !== this.word) {
     return compareLetters(letterCount(wordToCompare), letterCount(this.word));
   };
  });
  return result;
};



module.exports = AnagramFinder;

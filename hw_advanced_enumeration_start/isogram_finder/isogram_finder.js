const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
  const wordCopy = this.word.split('');
  let isogram = true;
  const result = wordCopy.reduce( (uniques, letter) => {
    if ( !uniques.includes(letter) ) {
      uniques.push(letter);
    };
    return uniques;
  }, []);
  if (result.length < wordCopy.length) {
    isogram = false;
  };
  return isogram;
}

module.exports = IsogramFinder;

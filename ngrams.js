var fs = require('fs');
/**
 * Finds the longest compound word. Written as a callback to fs.readFile.
 * @param  {[type]} err  [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
var findLongestCompound = function(err, data) {
  if (err) throw err;
  var wordList = data.split('\n');

  //Sort the list.
  var sortedWords = wordList.sort(function(word1, word2) {
    return (word1.length > word2.length) ? 1 :
      (word1.length < word2.length) ? -1 : 0
  });
  //Create the hash table.
  var wordHashTable = wordList.reduce(function(accumulator, value, index) {
    accumulator[value] = true;
    return accumulator;
  },{});

  /**
   * Checks if a given word is compound.
   * Uses wordHashTable.
   * @param  {[string]}  word [word to be checked]
   * @return {Boolean}      [description]
   */
  var isCompound = function(word) {
    for (var i = word.length; i > -1; i--){
      var prefix = word.slice(0,i);
      var suffix = word.slice(i, word.length);
      if (wordHashTable[prefix] === true){
        if (suffix.length === 0) {
          return true; // base case
        }
        return isCompound(suffix); //recursive increment
      }
    }
    return false;
  };

  while (sortedWords.length !== 0) {
    var largestWord = sortedWords.pop();
    wordHashTable[largestWord] = false;
    if (isCompound(largestWord)) {
      return largestWord;
    }
  }

  return null; // no words are compounds
}

fs.readFile('./list.txt', 'utf8', function(err, data) {
  console.log("Largest Word ('Null' if none found): ", findLongestCompound(err, data));
});

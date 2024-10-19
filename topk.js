let words = ["i", "hate", "eveything", "i", "word", "hate"];
let k = 2;

var topKFrequent = function (words, k) {
  let map = new Map();
  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  let arr = new Array();
  for (let key of map.keys()) {
    arr.push(key);
  }
  arr.sort(); //sorting by alphabetical order
  arr.sort((a, b) => map.get(b) - map.get(a)); //sorting by frequency
  return arr.slice(0, k);
};
topKFrequent(words, k);

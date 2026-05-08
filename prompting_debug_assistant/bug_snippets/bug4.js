// Intended: Count how many times each word appears in a sentence
// Bug Type: Misuse of data types

function wordCount(sentence) {
  const counts = {};
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (counts[word] == false) {
      counts[word] = 1;
    } else {
      counts[word] = counts[word] + 1;
    }
  }
  return counts;
}

console.log(wordCount("the cat sat on the mat"));
console.log(wordCount("hello hello hello"));

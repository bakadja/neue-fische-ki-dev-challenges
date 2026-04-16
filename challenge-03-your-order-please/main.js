function findNumber(word) {
  //console.log("split", word.split(""));
  return word.split("").find((char) => Number(char));
}
//console.log("findNumber",findNumber('is2'))

function getSortedWords(words) {
  const wordsObj = words.split(" ").map((word) => {
    const foundNum = findNumber(word);
    if (foundNum) {
      return { word, position: Number(foundNum) };
    }
  });

  //console.log("wordsObj",wordsObj)
  return wordsObj
    .sort((a, b) => a.position - b.position)
    .map(({ word }) => word)
    .join(" ");
}

console.log(getSortedWords("is2 Thi1s T4est 3a"));

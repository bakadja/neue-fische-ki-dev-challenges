function findMissingLetter(letters) {
  const length = letters.length;
  const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
  const indexOfFirst = alphabetStr.indexOf(String(letters[0]).toLowerCase());
  const sliceStr = alphabetStr.slice(indexOfFirst, indexOfFirst + length);
  //console.log("indexOfFirst",indexOfFirst)
  //console.log("sliceStr",sliceStr)
  //console.log("foundLetter",foundLetter)
  
  const result = sliceStr
    .split("")
    .find((char) => !letters.join("").toLowerCase().includes(char));
  return String(letters[0]) === String(letters[0]).toLowerCase() ? result : result.toUpperCase();
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
//findMissingLetter(['c','d','f'])

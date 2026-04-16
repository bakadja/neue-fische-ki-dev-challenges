function displayLikes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return names.join() + " likes this";
  if (names.length === 2) return names.join(" and ") + " likes this";
  if (names.length === 3)
    return (
      names.slice(0, 1).join() +
      ", " +
      names.slice(1).join(" and ") +
      " likes this"
    );

  return (
    names.slice(0, 1).join() +
    ", " +
    names.slice(1, 2).join() +
    " and " +
    names.slice(2).length +
    " others like this"
  );
}

console.log(displayLikes([]));
console.log(displayLikes(["Peter"]));
console.log(displayLikes(["Jacob", "Alex"]));
console.log(displayLikes(["Max", "John", "Mark"]));
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max"]));

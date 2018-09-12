const isPalindrom = word => {
  let reverseWord = word
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  if (reverseWord === word) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isPalindrom("tacocat");
//  a more advance solution.
function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join("") === lettersArr.reverse().join("");
}

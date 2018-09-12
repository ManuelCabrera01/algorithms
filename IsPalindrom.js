const isPalindrom = word => {
  let reverseWord = word
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

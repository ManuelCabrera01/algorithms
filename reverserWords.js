const reverseWords = str => {
  let splitArr = str.toLowerCase().split();
  let ReverseWordsArr = [];
  splitArr.forEach(word => {
    let reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    ReverseWordsArr.push(reverseWord);
  });
  return ReverseWordsArr.joing("");
};
reverseWords("this is a string of words");

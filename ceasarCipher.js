// not working
const ceasarCipher = (alphabet, num) => {
  let encriptedObj = {};
  let reversealphabet = alphabet.split(",").reverse();
  let alphabetArray = alphabet.split(",");
  alphabetArray.forEach(letter => {
    reversealphabet.forEach(Rletter => {
      encriptedObj[Rletter] = reversealphabet[Rletter];
    });
    encriptedObj[letter] = 0;
  });

  reversealphabet.forEach(Rletter => {
    encriptedObj[Rletter] = reversealphabet[Rletter];
  });
  console.log(reversealphabet);
  console.log(encriptedObj);
};
ceasarCipher("a,b,c,d,e,f,g");
//  the good solution
const ceasarCipher = (str, num) => {
  // if num is grater that 26 we use the module operator
  num = num % 26;
  let lowercasestr = str.toLowerCase();
  let alphabet = "abcbdbefghijklmnopqrstuvwxyz".split("");
  let newStrn = "";
  // now we loop our srting and shift the corrent nomber of places in the alphabet
  for (var i = 0; i < lowercasestr.length; i++) {
    // in every interation of the loop we want to add our newly shifty letter to a new string
    // first think to do is finf the current letter
    let currentLetter = lowercasestr[i];
    if (currentLetter === " ") {
      newStrn += currentLetter;
      continue;
    }
    // now we need to know where out current letter is in our alphabet
    let currentIndex = alphabet.indexOf(currentLetter);
    //  now we want to change our current letter by the letter that ocupy the position in the alphabet of our letter plus the num
    let newIndex = currentIndex + num;
    // what if our current letter is grater than 25 and num is 5
    // so we take the new index and we set it iqual to the begguinnig of the alphabet
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    // if we get a negative number  we do it backwards
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    // now we have to get the letter that ocupy tha new index
    newStrn += alphabet[newIndex];
  }
  return newStrn;
};

// function caesarCipher(str,num) {
//     num = num % 26;
//     var lowerCaseString = str.toLowerCase();
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     var newString = '';

//     for (var i = 0; i < lowerCaseString.length; i++) {
//       var currentLetter = lowerCaseString[i];
//       if (currentLetter === ' ') {
//         newString += currentLetter;
//         continue;
//       }
//       var currentIndex = alphabet.indexOf(currentLetter);
//       var newIndex = currentIndex + num;
//       if (newIndex > 25) newIndex = newIndex - 26;
//       if (newIndex < 0) newIndex = 26 + newIndex;
//       if (str[i] === str[i].toUpperCase()) {
//         newString += alphabet[newIndex].toUpperCase();
//       }
//       else newString += alphabet[newIndex];
//     };

//     return newString;
//   }
//   caesarCipher('Zoo Keeper', 2);

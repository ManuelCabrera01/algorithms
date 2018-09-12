const ceasarCipher = alphabet => {
  let encriptedObj = {};
  let reversealphabet = alphabet.split(",").reverse();
  let alphabetArray = alphabet.split(",");
  alphabetArray.forEach(letter => {
    encriptedObj[letter] = 0;
  });
  reversealphabet.forEach(Rletter => {
    encriptedObj[Rletter] = Rletter;
  });
  console.log(reversealphabet);
  //   console.log(encriptedObj);
};
ceasarCipher("a,b,c,d,e,f,g");

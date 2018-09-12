const ceasarCipher = alphabet => {
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

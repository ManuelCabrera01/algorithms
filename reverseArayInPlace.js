const reverArrayInPlace = stri => {
  let arr = stri.split(" ");
  let myObj = {};
  //   for (var i = 0; i <= arr.legth - 1; i++) {

  //   }
  for (var j = arr.length; j >= 0; j--) {
    console.log();
    myObj[arr[j]] = 0;
    myObj[arr[j]]++;
  }
  console.log(myObj);
};

reverArrayInPlace(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum similique"
);

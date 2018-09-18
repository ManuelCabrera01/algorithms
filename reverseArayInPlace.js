// not working solution

const reverArrayInPlace = stri => {
  let arr = stri.split(" ");
  let myObj = {};

  for (var j = arr.length; j >= 0; j--) {
    console.log();
    myObj[arr[j]] = myObj;
  }
};

reverArrayInPlace(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum similique"
);

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);

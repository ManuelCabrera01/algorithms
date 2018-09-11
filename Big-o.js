// constant runtime
//Big o notation : '0(1)'

// is when the imput size increase the number of operatione that we perfom never changes we still log out the first two element of the array no matter how mutch increase the array
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4, 5, 6]);

//linear runtime
//Big o notation  : "o(n)"
// we have to do a aporation in evre single element in the array so if the size of the input increase also the runtime and for this function the runtime increase proportionally as the input increase
function logAll(array) {
  for (var i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}
logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 7, 8, 9, 0]);

// Exponential runtime
// Big O notation :"o (n^2)"
// it is not efficiente
function addAndLog(array) {
  for (var i = 0; i <= array.length; i++) {
    for (var j = 0; j <= array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}
addAndLog(["a", "b", "c"]); // 9 pairs logged out
addAndLog(["a", "b", "c", "d"]); // 16 pairs logged out
addAndLog(["a", "b", "c", "d", "e"]); // 25 pairs logged out

//Logarithmic runtime
// Big O notation : O(log n)
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;
  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid - 1;
    } else if (element > key) {
      high = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

//  my solution
function fizzBuzz(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// sexy solution
const coolFizzBuzz = num => {
  for (var i = 1; i <= num; i++) {
    console.log(
      i % 15 === 0
        ? "fizzbuzz"
        : i % 5 === 0
          ? "buzz"
          : i % 3 === 0
            ? "fizz"
            : i
    );
  }
};

coolFizzBuzz(20);

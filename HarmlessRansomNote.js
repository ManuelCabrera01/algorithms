// to solve this is important to understand BigO notation and time complexity

//  this is my solution  but is not eficient   becousei use a exponential runtime
function harmlessRansomNote(noteText, magazineText) {
  var newnoteText = noteText.split(" ");
  var newmagazineText = magazineText.split(" ");
  var compare = [];
  console.log(compare);

  for (var i = 0; i <= newnoteText.length; i++) {
    for (var j = 0; j < newmagazineText.length; j++) {
      if (newnoteText[i] === newmagazineText[j]) {
        compare.push(newmagazineText[j]);
      }
    }
  }
  if (compare.length === newnoteText.length) {
    console.log(true);
  } else console.log(false);
  console.log(compare);
}

var note = "this is the note";
var magazing = "this is the note";
harmlessRansomNote(note, magazing);

// PRACTIAL SOLUSION
function harmlessRansomNote(noteText, magazineText) {
  // first thing to do is to  pass the magazineText and our aaray tex into a array of words
  var newnoteText = noteText.split(" ");
  var newmagazineText = magazineText.split(" ");
  //   now we need to figure aout what words we hae availabe in our magazinfg and how many  we have we are going to use a object to do that call magazingObj
  var magazingObj = {};
  //  and for that we are using a hashTable
  // for this we want to have avery word in the magazing array as property in the object and the value will be how many times apear in the magazing array usig a forEach

  newmagazineText.forEach(word => {
    // if the corrent word is not present as a property in the magazingObj we want to make it a property in the object
    if (!magazingObj[word]) magazingObj[word] = 0;
    // then we want to increment that word by one every time the word apear in the array
    magazingObj[word]++;
  });

  // the first thing to do is set a boolean variable for wether or not we can wright our not
  var isPosible = true;

  //  now we want to check if we have the necesary word in our magazing to rwigh our note
  //  lets start  by looping avery word word in our note array
  newnoteText.forEach(word => {
    // as we loop in our note array we want to check if every word is present in our magazing object
    //  if the word is not present  we now that we cant wright oru note if the word is present we want to decrement that value by one becouse we are going to use it to wright our note

    if (magazingObj[word]) {
      magazingObj[word]--;
      // now we need to node that  if the word is present in the magazing objc that we have enought to wrgit the note
      if (magazingObj[word] < 0) isPosible = false;
    } else isPosible = false;
  });
  //  then we just return the variable
  return isPosible;
}
//  this solution has alinear time complexity we do have two loops but they are note nested
// lineat Time Complexity O(n)+)(m) or O(m+n)

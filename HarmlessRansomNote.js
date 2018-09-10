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
var magazing = "this is the note ";
harmlessRansomNote(note, magazing);

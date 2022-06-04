var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
   var firstLetter = 'J';
  if (names[i].charAt(0) === firstLetter || names[i].charAt(0) === firstLetter.toLowerCase()) {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

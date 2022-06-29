function reverseString(word) {
  let string = "";
  for (let i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return console.log(string);
}

/* coloque qualquer string para reverter*/
reverseString("morangos com chocolate");

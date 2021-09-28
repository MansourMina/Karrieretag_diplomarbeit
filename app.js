function isPal(word) {
  let rw = '';

  for (var i = 0; i < word.length; i++) {
    rw += word[word.length - i - 1];
  }

  if (rw == word) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPal('gdggdfggg')

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      var value = "I am 1 strange loop."
    } else {
      var value = "I am ${i} strange loops."
    }
    array[i] = value
  }
}

function forLoop(array) {
  var value = "";
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      value = "I am 1 strange loop."
    } else {
      value = "I am ${i} strange loops."
    }
    array[i] = value
  }
  return array
}

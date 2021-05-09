function addBorder(picture) {
  let frame = []
  let topString = ''
  let stars = picture[0].length
  for (let i = 0; i < stars + 2; i++) {
    topString = topString + '*'
  }
  frame.push(topString)
  for (i = 0; i < picture.length; i++) {
    let string;
    string = "*" + picture[i] + "*"
    frame.push(string)
  }
  frame.push(topString)
  return frame
}

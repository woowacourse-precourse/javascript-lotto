function setArray(string) {
  return string.split(',').map(element => parseInt(element));
}

module.exports = { setArray };

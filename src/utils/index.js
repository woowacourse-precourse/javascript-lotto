function stringToNumberArray(string) {
  return Array.from(string.split(','),(stringNumber)=>Number(stringNumber));
}

module.exports = {stringToNumberArray}
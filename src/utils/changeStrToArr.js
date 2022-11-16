function changeStrToArr(str) {
  let resultArr = str
    .replace(/ /gi, '')
    .split(',')
    .map(v => +v);
  return resultArr;
}

module.exports = changeStrToArr;

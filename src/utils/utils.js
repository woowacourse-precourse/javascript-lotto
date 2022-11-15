function setArray(string) {
  return string.split(',').map(element => parseInt(element));
}

function checkMatchNum(array1, array2) {
  return array1.filter(num => array2.includes(num)).length;
}

function checkBonus(array, bonusNum) {
  return array.includes(bonusNum);
}

module.exports = { setArray, checkMatchNum, checkBonus };

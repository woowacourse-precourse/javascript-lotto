function setArray(string) {
  return string.split(',').map(element => parseInt(element));
}

function checkMatchNum(array1, array2) {
  return array1.filter(num => array2.includes(num)).length;
}

function allMatchNum(doubleArr, checkArr) {
  const map = new Map();
  doubleArr.forEach(object => {
    const arr = object.getLottoNum();
    const result = checkMatchNum(arr, checkArr);
    map.set(result, map.get(result) ? map.get(result) + 1 : 1);
  });
  return map;
}

module.exports = { setArray, allMatchNum };

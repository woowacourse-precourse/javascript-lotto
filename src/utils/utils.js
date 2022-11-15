const isDuplicated = (arr) => {
  const set = new Set(arr);

  if (arr.length !== set.size) return true;
};

const isOutOfRange = (numberOrNumbers) => {
  if (typeof numberOrNumbers === "object") {
    const numbersArr = numberOrNumbers;
    for (let i = 0; i < numbersArr.length; i++) {
      if (numbersArr[i] < 1 || numbersArr[i] > 45) {
        return true;
      }
    }
  }

  if (typeof numberOrNumbers === "string") {
    const number = numberOrNumbers;
    if (Number(number) < 1 || Number(number) > 45) return true;
  }

  return false;
};

module.exports = { isDuplicated, isOutOfRange };

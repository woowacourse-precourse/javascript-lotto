const isDuplicated = (arr) => {
  const set = new Set(arr);

  if (arr.length !== set.size) return true;
};

const isOutOfRange = (numberOrNumbers) => {
  if (typeof numberOrNumbers === "object") {
    const numbersArr = numberOrNumbers;
    for (const number of numbersArr) {
      if (number < 1 || number > 45) {
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

const { Random } = require("@woowacourse/mission-utils");

const createRandomNumbers = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
  }
  return arr;
};

module.exports = createRandomNumbers;

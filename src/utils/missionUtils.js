const { Console, Random } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, LOTTO_VALUE } = require("../constants/index");

const generateRandomNumbers = () =>
  Random.pickUniqueNumbersInRange(
    LOTTO_VALUE.MIN,
    LOTTO_VALUE.MAX,
    LOTTO_VALUE.LENGTH
  ).sort((a, b) => a - b);

const inputUserValue = (message, callback) => {
  Console.readLine(message, callback);
};

const printMessage = (message) => {
  Console.print(message);
};

module.exports = { generateRandomNumbers, inputUserValue, printMessage };

const { Console } = require("@woowacourse/mission-utils");

const print = (value) => {
  Console.print(value);
};
Console.close();
module.exports = { print };

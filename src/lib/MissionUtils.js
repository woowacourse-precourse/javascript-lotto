const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const Print = (str) => {
  return Console.print(str);
};
const ReadLine = (str, resolve) => {
  return Console.readLine(str, resolve);
};
const RandomNumInRange = (start, end) => {
  return Random.pickNumberInRange(start, end);
};

module.exports = { Console, Random, Print, ReadLine, RandomNumInRange };

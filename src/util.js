const MissionUtils = require('@woowacourse/mission-utils');

const print = content => {
  MissionUtils.Console.print(content.trim());
};

const readLine = (content, func) => {
  MissionUtils.Console.readLine(content, func);
};

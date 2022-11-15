const MissionUtils = require("@woowacourse/mission-utils");
const {
  MESSAGES,
  ProfitMessage,
  StatisticsMessage,
} = require("./constant/Constant");

const printNumber = (purchased) => {
  MissionUtils.Console.print(`${purchased}${MESSAGES.PURCHASEDLOTTO}`);
};


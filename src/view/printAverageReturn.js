const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/inputDataObject');
const inputMessage = require('../model/InputMessage');

const printAverageReturn = {
  printAverageReturn() {
    const result = Object.values(inputDataObject.averageReturn);

    MissionUtils.Console.print('\n당첨 통계\n---');
    Object.values(inputMessage.STATS_MESSAGE).forEach((key, value) => {
      MissionUtils.Console.print(`${key} ${result[value][0]}개`);
    });

    MissionUtils.Console.print(`총 수익률은 ${inputDataObject.profit}%입니다.`);

    return MissionUtils.Console.close();
  },
};

module.exports = printAverageReturn;

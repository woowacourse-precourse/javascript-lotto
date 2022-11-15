const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/inputDataObject');
const inputMessage = require('../model/InputMessage');

const printAverageReturn = {
  printAverageReturn(value, profit) {
    MissionUtils.Console.print('\n당첨 통계\n---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${Object.values(value)[0][0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${Object.values(value)[1][0]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${Object.values(value)[3][0]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${Object.values(value)[4][0]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${Object.values(value)[2][0]}개`);
    MissionUtils.Console.print(`총 수익률은 ${(profit / inputDataObject.inputMoney) * 100}%입니다.`);
    return MissionUtils.Console.close();
  },
};

module.exports = printAverageReturn;

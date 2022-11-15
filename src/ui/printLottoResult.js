const { Console } = require('@woowacourse/mission-utils');
const {
  RESULT_MESSAGE,
  RESULT_START_MESSAGE,
} = require('../components/lotto-data/Constant');
const {
  LottoRanking,
  LottoNumberData,
} = require('../components/lotto-data/LottoNumberData');

function printLottoResult() {
  console.log(`${RESULT_START_MESSAGE}`);
  for (let message in RESULT_MESSAGE) {
    Console.print(`${RESULT_MESSAGE[message]} - ${LottoRanking[message]}개`);
  }
  Console.print(`총 수익률은 ${LottoNumberData['RateOfReturn']}%입니다.`);
  Console.close();
}

module.exports = printLottoResult;

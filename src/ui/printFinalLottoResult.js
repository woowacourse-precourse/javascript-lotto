const { Console } = require('@woowacourse/mission-utils');
const {
  RESULT_MESSAGE,
  RESULT_START_MESSAGE,
} = require('../components/lotto-data/Constant');
const {
  LottoRanking,
  LottoNumberData,
} = require('../components/lotto-data/LottoNumberData');

function printFinalLottoResult() {
  printResultStartMessage();
  printWinningHistory();
  printRateOfReturn();
  Console.close();
}

function printResultStartMessage() {
  console.log(`${RESULT_START_MESSAGE}`);
}

function printWinningHistory() {
  for (let message in RESULT_MESSAGE) {
    Console.print(`${RESULT_MESSAGE[message]} - ${LottoRanking[message]}개`);
  }
}

function printRateOfReturn() {
  Console.print(`총 수익률은 ${LottoNumberData['RateOfReturn']}%입니다.`);
}

module.exports = printFinalLottoResult;

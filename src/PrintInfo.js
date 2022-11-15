const { Console } = require('@woowacourse/mission-utils');
const {
  USER_MONEY_INPUT_REQUEST,
  WINNING_LOTTO_REQUEST,
  BONUS_NUMBER_REQUEST,
  PRINT_STRING,
  PRIZE_RESULT_PRINT,
} = require('./constants.js');

class PrintInfo {
  requestUserMoneyInput() {
    Console.print(USER_MONEY_INPUT_REQUEST);
  }

  printLottoNumbers(lottoNumbers) {
    Console.print(`[${lottoNumbers}]`);
  }

  requestWinningLotto() {
    Console.print(WINNING_LOTTO_REQUEST);
  }

  requestBonusNumber() {
    Console.print(BONUS_NUMBER_REQUEST);
  }

  printPrizeResult() {
    Console.print(PRIZE_RESULT_PRINT);
  }

  printWinResult(idx, element) {
    Console.print(`${PRINT_STRING[idx]}${element}개`);
  }

  printRateOfReturn(rateOfReturnString) {
    Console.print(`총 수익률은 ${rateOfReturnString}%입니다.`);
  }

  printLotteryQuantity(lotteryQuantity) {
    Console.print(`\n${lotteryQuantity}개를 구매했습니다.`);
  }
}

module.exports = PrintInfo;

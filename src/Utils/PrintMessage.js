const { Console } = require('@woowacourse/mission-utils');
const { INGAME_MESSAGE } = require('../Constants/MESSAGE');
const { RANK_INDEX, RANK_PRINT } = require('../Constants/RANK');

function printBuyMessage() {
  return INGAME_MESSAGE.buy;
}

function printPickMainMessage() {
  return INGAME_MESSAGE.pickMain;
}

function printPickBonusMessage() {
  return INGAME_MESSAGE.pickBonus;
}

function printWinLottery(winList) {
  Console.print(`${INGAME_MESSAGE.statistic}`);
  Console.print(`${RANK_PRINT.fifth}${winList[RANK_INDEX.fifth]}개`);
  Console.print(`${RANK_PRINT.fourth}${winList[RANK_INDEX.fourth]}개`);
  Console.print(`${RANK_PRINT.third}${winList[RANK_INDEX.third]}개`);
  Console.print(`${RANK_PRINT.second}${winList[RANK_INDEX.second]}개`);
  Console.print(`${RANK_PRINT.first}${winList[RANK_INDEX.first]}개`);
}

function printProfit(total, money) {
  // const money = this.#Consumer.getMoney();
  const profit = ((total / money) * 100).toFixed(1);
  Console.print(`총 수익률은 ${profit}%입니다.`);
}

module.exports = {
  printBuyMessage,
  printPickMainMessage,
  printPickBonusMessage,
  printWinLottery,
  printProfit,
};

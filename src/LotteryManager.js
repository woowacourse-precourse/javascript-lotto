const { Console } = require('@woowacourse/mission-utils');
const { INGAME_MESSAGE } = require('./Constants/MESSAGE');
const { RANK_INDEX, RANK_REWARD, RANK_PRINT } = require('./Constants/RANK');
const Lotto = require('./Lotto');
const Consumer = require('./Consumer');

class LotteryManager {
  #Consumer;

  #Lotto;

  start() {
    this.create();
  }

  create() {
    Console.readLine(INGAME_MESSAGE.buy, (money) => {
      this.#Consumer = new Consumer(money);
      this.pickMain();
    });
  }

  pickMain() {
    Console.readLine(INGAME_MESSAGE.pickMain, (mainPick) => {
      this.pickBonus(mainPick);
    });
  }

  pickBonus(mainPick) {
    Console.readLine(INGAME_MESSAGE.pickBonus, (bonusPick) => {
      this.#Lotto = new Lotto(mainPick, bonusPick);
      this.checkWinLottery();
    });
  }

  checkWinLottery() {
    const winList = [0, 0, 0, 0, 0, 0];
    let total = 0;

    this.#Consumer.lotteryList.forEach((lotto) => {
      const [winCount, winBonusCount] = this.#Lotto.checkWin(lotto);
      const { winIndex, reward } = this.countWinLottery(winCount, winBonusCount);
      winList[winIndex] += 1;
      total += reward;
    });

    this.printWinLottery(winList);
    this.printProfit(total);
  }

  countWinLottery(winCount, winBonusCount) {
    if (winCount === 6) return { winIndex: RANK_INDEX.first, reward: RANK_REWARD.first };
    if (winCount === 5 && winBonusCount) return { winIndex: RANK_INDEX.second, reward: RANK_REWARD.second };
    if (winCount === 5) return { winIndex: RANK_INDEX.third, reward: RANK_REWARD.third };
    if (winCount === 4) return { winIndex: RANK_INDEX.fourth, reward: RANK_REWARD.fourth };
    if (winCount === 3) return { winIndex: RANK_INDEX.fifth, reward: RANK_REWARD.fifth };
    return { winIndex: RANK_INDEX.lose, reward: RANK_REWARD.lose };
  }

  printWinLottery(winList) {
    // 추후 수정 필요
    Console.print(`${INGAME_MESSAGE.statistic}`);
    Console.print(`${RANK_PRINT.fifth}${winList[RANK_INDEX.fifth]}개`);
    Console.print(`${RANK_PRINT.fourth}${winList[RANK_INDEX.fourth]}개`);
    Console.print(`${RANK_PRINT.third}${winList[RANK_INDEX.third]}개`);
    Console.print(`${RANK_PRINT.second}${winList[RANK_INDEX.second]}개`);
    Console.print(`${RANK_PRINT.first}${winList[RANK_INDEX.first]}개`);
  }

  printProfit(total) {
    // 추후 수정 필요
    const money = this.#Consumer.getMoney();
    const profit = ((total / money) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

module.exports = LotteryManager;

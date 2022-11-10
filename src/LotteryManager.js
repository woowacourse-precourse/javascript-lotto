const { Console } = require('@woowacourse/mission-utils');
const { INGAME_MESSAGE, PICK_TYPE } = require('./Constants');
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
    Console.readLine(INGAME_MESSAGE.pickMain, (picks) => {
      this.#Lotto = new Lotto(picks, PICK_TYPE.main);
      //   this.pickBonus();
      this.checkWinLottery();
    });
  }

  pickBonus() {
    // this.checkWinLottery();
    Console.readLine(INGAME_MESSAGE.pickBonus, (picks) => {});
  }

  checkWinLottery() {
    const winCountList = [];
    this.#Consumer.LotteryList.forEach((lotto) => {
      const winCount = this.#Lotto.checkWin(lotto);
      winCountList.push(winCount);
    });

    this.printLottery(winCountList);
  }

  printLottery(winCountList) {
    winCountList.forEach((count) => {
      Console.print(`${count}개 맞추었음`);
    });
  }
}

const manager = new LotteryManager();
manager.start();

module.exports = LotteryManager;

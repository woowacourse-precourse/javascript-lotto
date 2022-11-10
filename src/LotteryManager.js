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
      this.pickBonus();
    });
  }

  pickBonus() {
    Console.readLine(INGAME_MESSAGE.pickBonus, (picks) => {
      this.checkWinLottery(picks);
    });
  }

  checkWinLottery(bonusNumber) {
    const winCountList = [];
    const winBonusCountList = [];
    this.#Consumer.LotteryList.forEach((lotto) => {
      const { winCount, winBonusCount } = this.#Lotto.checkWin(lotto, bonusNumber);
      winCountList.push(winCount);
      winBonusCountList.push(winBonusCount);
    });

    this.countLottery(winCountList, winBonusCountList);
  }

  countLottery(winCountList, winBonusCountList) {
    // 추후 수정 필요
    let total = 0;
    const winList = [0, 0, 0, 0, 0];
    for (let index = 0; index < winCountList.length; index += 1) {
      if (winCountList[index] === 3) {
        total += 5000;
        winList[0] += 1;
      } else if (winCountList[index] === 4) {
        total += 50000;
        winList[1] += 1;
      } else if (winCountList[index] === 5 && winBonusCountList[index] === 0) {
        total += 1500000;
        winList[2] += 1;
      } else if (winCountList[index] === 5 && winBonusCountList[index] === 1) {
        total += 30000000;
        winList[3] += 1;
      } else if (winCountList[index] === 6) {
        total += 2000000000;
        winList[4] += 1;
      }
    }

    this.printLottery(winList);
    this.printYield(total);
  }

  printLottery(winList) {
    // 추후 수정 필요
    Console.print(`3개 일치 (5,000원) - ${winList[0]}`);
    Console.print(`4개 일치 (50,000원) - ${winList[1]}`);
    Console.print(`5개 일치 (1,500,000원) - ${winList[2]}`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winList[3]}`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winList[4]}`);
  }

  printYield(total) {
    // 추후 수정 필요
    Console.print(total);
  }
}

const manager = new LotteryManager();
manager.start();

module.exports = LotteryManager;

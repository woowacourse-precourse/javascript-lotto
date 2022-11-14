const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  errorHandler(BONUS_NUMBER) {
    if (this.#numbers.includes(BONUS_NUMBER)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  matchLotto(lotteryTicket, BONUS_NUMBER, MONEY) {
    this.errorHandler(BONUS_NUMBER);

    let prize = [];
    lotteryTicket.forEach((ticket) => {
      prize.push(this.judgeNumber(ticket, BONUS_NUMBER));
    })

    this.printResult(this.makeResult(prize), MONEY);
  }

  judgeNumber(ticket, BONUS_NUMBER) {
    let count = [0, 0];
    ticket.forEach((item) => {
      if (this.#numbers.includes(item)) {
        count[0] += 1;
      }
      else if (item == BONUS_NUMBER) {
        count[1] += 1;
      }
    });

    return count;
  }

  printResult(result, MONEY) {
    let winnigPrize = this.caculatePrize(result);
    let returnRate = ((winnigPrize/MONEY) * 10 / 10) * 100;

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`)
    MissionUtils.Console.print(`총 수익률은 ${returnRate}%입니다.`)
    MissionUtils.Console.close();
  }

  caculatePrize(result) {
    let winnigPrize = 0;
    const prizeBoard = [5000, 50000, 1500000, 30000000, 2000000000]

    result.forEach((item, index) => {
      if (item != 0) {
        winnigPrize = prizeBoard[index];
      }
    })

    return winnigPrize;
  }

  makeResult(prize) {
    let result = [0, 0, 0, 0, 0];
    prize.forEach((item) => {
      if (item[0] == 3) result[0]+=1;
      else if(item[0] == 4) result[1]+=1;
      else if(item[0] == 5 && item[1] == 1) result[3]+=1;
      else if(item[0] == 5) result[2]+=1;
      else if(item[0] == 6) result[4]+=1;
    });

    return result;
  }
}

module.exports = Lotto;
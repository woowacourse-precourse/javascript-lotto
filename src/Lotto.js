const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(MONEY, numbers, BONUS_NUMBER) {
    this.validate(numbers);
    this.errorHandler(MONEY, numbers, BONUS_NUMBER);

    this.#numbers = numbers;
    this.BONUS_NUMBER = BONUS_NUMBER;
    this.MONEY = MONEY;
  }

  sliceNumber(numbers) {
    return numbers.split(',').map((item) => {
      return parseInt(item);
    })
  }

  validate(numbers) {
    let numberArray = this.sliceNumber(numbers);
    const lottoSet = new Set(numberArray);
    if (lottoSet.size != numberArray.length) {
      throw new Error("[ERROR] 중복된 숫자를 입력할 수 없습니다.");
    }

    if (lottoSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (let item of lottoSet.values()) {
      if (item < 1 | item > 45) {
        throw new Error("[ERROR] 1 ~ 45까지의 숫자만 입력할 수 있습니다.")
      }
    }
  }
  
  errorHandler(MONEY, numbers, BONUS_NUMBER) {
    if (BONUS_NUMBER < 1 | BONUS_NUMBER > 45) {
      throw new Error("[ERROR] 1 ~ 45까지의 숫자만 입력할 수 있습니다.");
    }

    if (MONEY%1000 != 0) {
      throw new Error("[ERROR] 복권의 1장당 가격은 1000원입니다.");
    }

    if (numbers.includes(BONUS_NUMBER)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  makeRandomValue(MONEY) {
    let lotteryTicket = [];

    for(let i=0; i<MONEY/1000; i++) {
      let temp = [];
      temp = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotteryTicket.push(temp.sort((a, b) => {
        return a-b;
      }));
    }

    this.printTicket(lotteryTicket, MONEY/1000);
    
    return lotteryTicket
  };

  printTicket(lotteryTicket, MONEY) {
    MissionUtils.Console.print(`${MONEY}개를 구매했습니다.`);

    lotteryTicket.forEach((item) => {
      let temp = '[' + String(item.join(', ')) + ']';
      MissionUtils.Console.print(temp);
    });
  }

  matchLotto(lotteryTicket) {
    let prize = [];
    lotteryTicket.forEach((ticket) => {
      prize.push(this.judgeNumber(ticket));
    })

    this.printResult(this.makeResult(prize));
  }

  judgeNumber(ticket) {
    let count = [0, 0];
    let numberArray = this.#numbers.split(',').map((e) => {
      return parseInt(e);
    })
    ticket.forEach((item) => {
      if (numberArray.includes(item)) {
        count[0] += 1;
      }
      else if (item == this.BONUS_NUMBER) {
        count[1] += 1;
      }
    });

    return count;
  }

  printResult(result) {
    let winnigPrize = this.caculatePrize(result);
    let returnRate = ((winnigPrize/this.MONEY) * 10 / 10) * 100;

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
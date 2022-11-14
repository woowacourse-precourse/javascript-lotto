const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers, BONUS_NUMBER, MONEY) {
    this.validate(numbers);
    this.errorHandler(numbers, BONUS_NUMBER, MONEY);

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
  
  errorHandler(numbers, BONUS_NUMBER, MONEY) {
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
}

const lotto = new Lotto("8, 11, 44, 27, 36, 15", "10", "8000");
lotto.matchLotto(lotto.makeRandomValue(8000));

module.exports = Lotto;

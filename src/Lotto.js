const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  purchased(answer) {
    if (Number(answer) % 1000 !== 0) {
      throw new Error('[ERROR] 잔돈이 남지않게 1,000원 단위로 입력해주세요.');
    }
    let quantity = Number(answer) / 1000;
    const arr = [];
    this.print(`${quantity}개를 구매하셨습니다.`);
    while (quantity > 0) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.print(lotto);
      arr.push(lotto);
      quantity = quantity - 1;
    }
    return arr;
  }

  luckyNumberSplit(answer) {
    const split = answer.split(',');
    return split;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    for (let i = 0; i < numbers.length; i++) {
      let copy = [...numbers];
      let splice = copy.splice(i, 1);
      if (copy.includes(...splice)) {
        throw new Error('[ERROR] 중복된 숫자가 없는지 확인해주세요.');
      }
      if (Number(splice) < 1 || Number(splice) > 45) {
        throw new Error('[ERROR] 1~45 숫자만 입력가능합니다.');
      }
    }
  }

  validateBonusNumber(bonusNumber, luckyNumbers) {
    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error('[ERROR] 1~45 숫자만 입력가능합니다.');
    }
    if (luckyNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 중복된 숫자가 없는지 확인해주세요.');
    }
  }

  async calculationProcess(luckyNumbers, buyNumbers, bonus) {
    let arr = await this.luckyNumberCheck(luckyNumbers, buyNumbers, bonus);
    let result = await this.winResultList(arr);
    let avg = await this.sumResult(result, buyNumbers);
    let strResult = await this.printResult(result, avg);
    this.print(strResult);
    this.close();
  }
  luckyNumberCheck(luckyNumbers, buyNumbers, bonus) {
    let arr = [];
    for (let i = 0; i < buyNumbers.length; i++) {
      let count = 0;
      for (let j = 0; j < luckyNumbers.length; j++) {
        luckyNumbers.includes(String(buyNumbers[i][j])) && (count = count + 1);
      }
      if (count === 5) {
        luckyNumbers.includes(String(bonus)) && (count = count + 0.5);
      }
      arr.push(count);
    }
    return arr;
  }

  winResultList(result) {
    let arr = new Array(5).fill(0);
    for (let i = 0; i < result.length; i++) {
      switch (result[i]) {
        case 3:
          arr[0]++;
          break;
        case 4:
          arr[1]++;
          break;
        case 5:
          arr[2]++;
          break;
        case 5.5:
          arr[3]++;
          break;
        case 6:
          arr[4]++;
          break;
      }
    }
    return arr;
  }

  printResult(result, avg) {
    return `  3개 일치 (5,000원) - ${result[0]}개
 4개 일치 (50,000원) - ${result[1]}개
 5개 일치 (1,500,000원) - ${result[2]}개
 5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개
 6개 일치 (2,000,000,000원) - ${result[4]}개
 총 수익률은 ${avg}%입니다.
 `;
  }

  sumResult(result, buyLottos) {
    let sum =
      5000 * result[0] +
      50000 * result[1] +
      1500000 * result[2] +
      30000000 * result[3] +
      2000000000 * result[4];
    let avg = (sum / (buyLottos.length * 1000)) * 100;
    return Math.round(avg * 100) / 100;
  }

  close() {
    return MissionUtils.Console.close();
  }

  print(str) {
    return MissionUtils.Console.print(str);
  }
}

module.exports = Lotto;

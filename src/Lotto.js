class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateLengthIsSix(numbers);
    this.validateIsDuplication(numbers);
    this.validateInNumberRange(numbers);
  }

  validateLengthIsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateIsDuplication(numbers) {
    const duplicationCheck = new Set(numbers);
    if (duplicationCheck.size !== numbers.length) {
      throw new Error('[ERROR] 중복이 없는 서로 다른 숫자를 입력하세요.');
    }
  }

  validateInNumberRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error('[ERROR] 로또 번호는 숫자 1 ~ 45 범위 내에서 입력하세요.');
      }
    }
  }

  compareWithWinNumbers(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호와 당첨 번호는 중복되지 않아야 합니다.');
    }
  }

  checkLottoWinResult(userBuyedTickets, bonusNumber) {
    const lottoResult = [0, 0, 0, 0, 0];
    userBuyedTickets.forEach((numbers) => {
      switch (this.checkMatchLottoNumber(numbers)) {
        case 3:
          lottoResult[0] += 1;
          break;
        case 4:
          lottoResult[1] += 1;
          break;
        case 5:
          this.checkHasBonusNumber(numbers, bonusNumber)
            ? (lottoResult[3] += 1)
            : (lottoResult[2] += 1);
          break;
        case 6:
          lottoResult[4] += 1;
          break;
      }
    });
    return lottoResult;
  }

  checkMatchLottoNumber(numbers) {
    return numbers.filter((number) => this.#numbers.includes(String(number))).length;
  }

  checkHasBonusNumber(numbers, bonusNumber) {
    return numbers.includes(bonusNumber);
  }

  calculratePrizeMoney(lottoResult) {
    const prizeMoneys = [5000, 50000, 1500000, 30000000, 2000000000];
    return lottoResult.reduce((acc, cur, index) => acc + cur * prizeMoneys[index], 0);
  }

  calculrateEarningsRate(budget, reward) {
    return reward == 0 ? 0 : Math.round((reward / budget) * 1000) / 10;
  }

  printLottoStatistics(lottoWinResult, earningsRate) {
    const resultWords = [
      '당첨 통계',
      '---',
      ...this.printRewardList(lottoWinResult),
      this.printEarningsRate(earningsRate),
    ];
    return resultWords;
  }

  printRewardList(lottoWinResult) {
    const RewardResult = new Array();
    const labels = [
      '3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - ',
    ];
    lottoWinResult.forEach((list, index) => {
      RewardResult.push(labels[index] + list + '개');
    });
    return RewardResult;
  }

  printEarningsRate(earningsRate) {
    return (
      '총 수익률은 ' + earningsRate.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%입니다.'
    );
  }
}

module.exports = Lotto;

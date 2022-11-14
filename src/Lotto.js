const LottoPurchase = require("../src/LottoPurchase");
const lottoPurchase = new LottoPurchase();

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.lottoNumberMax = 45;
    this.lottoNumberMin = 1;
    this.winningNumber = [0, 0, 0, 0, 0];
    this.validate(numbers);
    this.duplicate(numbers);
    this.numberLimit(numbers);
    this.#numbers = numbers;
    this.bonusDuplicate(bonusNumber);
    this.bonusLimit(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  duplicate(numbers) {
    if ([...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  numberLimit(numbers) {
    numbers.forEach((number) => {
      if (number > this.lottoNumberMax || number < this.lottoNumberMin) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })
  }

  bonusDuplicate(bonuseNumber) {
    if (this.#numbers.includes(bonuseNumber)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 같을 수 없습니다.");
    }
  }

  bonusLimit(bonusNumber) {
    if (bonusNumber > this.lottoNumberMax || bonusNumber < this.lottoNumberMin) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  lottoCompare(lottoNumbers) {
    let sameNumber = lottoNumbers.filter(num => this.#numbers.includes(num));
    let matchNumber = sameNumber.length

    if (matchNumber === 5) {
      return this.bonusCompare(matchNumber, lottoNumbers);
    }
    return this.lottoWinning(matchNumber);
  }

  bonusCompare(matchNumber, lottoNumbers) {
    if (lottoNumbers.includes(this.bonusNumber)) {
      this.winningNumber[4] += 1;
    } else {
      this.winningNumber[matchNumber - 3] += 1;
    }
    return this.winningNumber;
  }

  lottoWinning(matchNumber) {
    if (matchNumber >= 3) {
      this.winningNumber[matchNumber - 3] += 1;
    }
    return this.winningNumber;
  }

  lottoCompareRepeat() {
    let lottoList = lottoPurchase.lottoPublish();

    lottoList.forEach(lottoNumbers => {
      this.lottoCampare(lottoNumbers);
    })
  }
}

module.exports = Lotto;

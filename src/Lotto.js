class Lotto {
  #numbers;
  #bonusNumber

  constructor(numbers) {
    this.validateCount(numbers);
    this.validateDuplicatedLotto(number);
    this.validateDuplicated(numbers);
    this.validateRangeOfNumber(number);
    this.validateRangeofNumbers(numbers);
    this.#numbers = numbers;
  }

  getInputLottoNum() {
    let LOTTO_WINNING_NUM = [];

    MissionUtils.Console.readLine("당첨 번호를 입력해주세요.\n:", (numbers) => { 
      LOTTO_WINNING_NUM = String(numbers).split(",");

      this.validateCount(numbers);
      this.validateDuplicated(numbers);
      this.validateRangeofNumbers(numbers);

      return LOTTO_WINNING_NUM;      
    });

    this.getInputBonusNum();
  }

  getInputBonusNum() {
    let LOTTO_BONUS_NUM = [];

    MissionUtils.Console.readLine("보너스 번호를 입력해주세요.\n:", (number) => { 
      this.validateRangeOfNumber(number);
      this.validateDuplicatedLotto(number);

      LOTTO_BONUS_NUM = (this.#bonusNumber = number);
    });
  }

  validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateDuplicatedLotto(number) {
    if (!LOTTO_WINNING_NUM.includes(number)) {
        throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다.");
    }
}

  validateDuplicated(numbers) {
    let numberSet = new Set(numbers);

    if (numberSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }

  validateRangeOfNumber(number) {
    if (number < 1 && number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 수여야 합니다.");
    }
  }

  validateRangeofNumbers(numbers) {
    for (const number of numbers) {
      if (number < 1 && number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 수여야 합니다.");
      }
    }
  }
}

module.exports = Lotto;

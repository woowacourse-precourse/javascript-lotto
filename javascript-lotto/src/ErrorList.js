class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "[ERROR MESSAGE]";
    this.message = "[ERROR] " + message;
  }
}

module.exports = class ErrorList {
  constructor() {
    this.errorState = false;
  }

  throwError(sentence) {
    throw new CustomError(sentence);
  }

  checkMoney(money) {
    parseInt(money) < 999 && this.throwError("최소 금액은 1000원입니다.");
    money % 1000 !== 0
      ? this.throwError("금액이 1000원으로 나누어 떨어지지 않습니다.")
      : (money = money / 1000);
    return money;
  }

  numberMaxMinCheck(numberArray) {
    numberArray.forEach((number) => {
      !(number > 0 && number < 46) &&
        this.throwError("로또 번호는 1부터 45사이의 숫자여야 합니다.");
    });
    return this;
  }

  sixLengthCheck(numberArray) {
    if (numberArray.length !== 6) {
      this.throwError("로또 번호는 6자리여야 합니다.");
    }
    return this;
  }

  oneLengthCheck(bonusArray) {
    if (bonusArray.length !== 1) {
      this.throwError("보너스 번호는 1자리여야 합니다.");
    }
    return this;
  }
  checkPrimeNumber(numberArray) {
    numberArray.forEach((number) => {
      if (typeof number === "number") return;
      number.includes(".") &&
        this.throwError(
          "로또 번호는 1부터 45사이의 정수만 입력할 수 있습니다."
        );
    });
    return this;
  }
  numberCheckInteger(numberArray) {
    numberArray.forEach((number) => {
      const LOTTO_NUMBER = Number(number);
      if (!Number.isInteger(LOTTO_NUMBER)) {
        this.throwError(
          "로또 번호는 1부터 45사이의 정수만 입력할 수 있습니다. "
        );
      }
    });
    return this;
  }

  overlapNumberCheck(numberArray) {
    const OVERLAP_SET = new Set(numberArray);
    if (OVERLAP_SET.size !== 6) {
      this.throwError(
        "로또 번호는 중복되지 않은 6자리의 숫자만 입력할 수 있습니다."
      );
    }
    return this;
  }

  lottoArrayIncludesBonusNumberCheck(lottoArray, bonusArray) {
    if (lottoArray.includes(bonusArray[0])) {
      this.throwError(
        "보너스 번호는 로또 번호와 중복되지 않은 숫자만 입력할 수 있습니다."
      );
    }
    return this;
  }

  errorCheckLottoSixNumber(LottoArray) {
    this.sixLengthCheck(LottoArray);
    this.numberMaxMinCheck(LottoArray);
    this.overlapNumberCheck(LottoArray);
    this.numberCheckInteger(LottoArray);
    this.checkPrimeNumber(LottoArray);
    return true;
  }
  errorCheckLottoBonusNumber(LottoArray, BonusArray) {
    this.oneLengthCheck(BonusArray);
    this.numberMaxMinCheck(BonusArray);
    this.lottoArrayIncludesBonusNumberCheck(LottoArray, BonusArray);
    this.numberCheckInteger(BonusArray);
    this.checkPrimeNumber(BonusArray);

    return true;
  }
};

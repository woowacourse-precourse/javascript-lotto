class Validation {
  static validLottoNumber(lottoNumbers) {
    if (lottoNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(lottoNumbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
  static validPurchase(purchase) {
    if (isNaN(purchase)) {
      throw new Error("[ERROR] 문자열이 포함되었습니다.");
    }
    const result = parseInt(purchase, 10) % 1000;
    if (result !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요");
    }
  }

  static validWinning(inputNumber) {
    const splitInputNumber = inputNumber.split(",");
    if (!splitInputNumber.every((num) => !isNaN(num))) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (splitInputNumber.length !== 6) {
      throw new Error("[ERROR] 6개를 입력하지 않았습니다.");
    }
    if (new Set(splitInputNumber).size !== 6) {
      throw new Error("[ERROR] 중복된 데이터가 있습니다.");
    }
  }

  static validBonus(BonusNumber) {
    if (isNaN(BonusNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
  }

  static validWinningAndBonus(data) {
    if (new Set(data).size !== 7) {
      throw new Error("[ERROR] 중복된 데이터가 있습니다.");
    }
  }
}
module.exports = Validation;

//에러 전부 상수화 필요
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  isMoneyValid(money) {
    if (isNaN(money)) throw new Error("[ERROR] 숫자를 입력해 주세요.");
    if (!/[0-9]{4,}/.test(money)) throw new Error("[ERROR] 4자리 이상의 숫자를 입력해 주세요.");
    if (parseInt(money) % 1000 !== 0) throw new Error("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
    return true;
  }

  isLottoNumberInputValid() {
    const NUMBERS_FROM_INPUT = this.#numbers.split(",");
    if (/[^\d,]/g.test(this.#numbers)) throw new Error("[ERROR] 숫자+',' 형태로 입력해 주세요. ex) 1,2,3,4,5,6");
    if (NUMBERS_FROM_INPUT.length !== 6) throw new Error("[ERROR] 중복되는 숫자가 있습니다.");
    if (NUMBERS_FROM_INPUT.find((arrayElement) => parseInt(arrayElement) < 1 || parseInt(arrayElement) > 45))
      throw new Error("[ERROR] 숫자는 1-45 사이의 수여야 합니다.");
    return true;
  }

  isBonusNumberValid(bonusNumber) {
    if (+bonusNumber < 1 || +bonusNumber > 45) throw new Error("[ERROR] 보너스 숫자는 1-45 사이의 수여야 합니다.");
    if (numbers.includes(bonusNumber)) throw new Error("[ERROR] 이전에 입력한 번호가 보너스 숫자와 중복됩니다.");
    return true;
  }
}

module.exports = Lotto;

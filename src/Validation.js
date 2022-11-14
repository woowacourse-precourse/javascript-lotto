class Validation {
  static checkVaildLottoAmount(input) {
    if (/[^0-9]/g.test(input))
      throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
    const AMOUNT = Number(input);

    if (AMOUNT % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위의 금액을 입력하세요.");

    if (AMOUNT < 0)
      throw new Error("[ERROR] 구입급액이 0원 이상이어야 합니다.");

    return AMOUNT;
  }

  static checkVaildWinNumber(input) {
    if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(input))
      throw new Error("[ERROR] 입력된 형식이 올바르지 않습니다.");

    const NUMBER = input.split(",").map((number) => {
      if (number < 1 || 45 < number)
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      return Number(number);
    });

    if (new Set(NUMBER).size !== 6)
      throw new Error("[ERROR] 번호는 중복되지 않아야 합니다.");

    return NUMBER;
  }
}

module.exports = Validation;

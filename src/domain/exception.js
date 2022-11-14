class Exceptions {

  checkPriceNotThousands(price) {
    if (price % 1000 !== 0)
      throw new Error("[ERROR] 금액이 1000원 단위가 아님");
  }

  checkInputNotNumber(input) {
    if (!Number(input)) throw new Error("[ERROR] 입력값에 숫자만 입력해주세요");
  }
  checkInputCount(input) {
    const LOTTO_INPUT_COUNT = 6;
    if (input.length !== LOTTO_INPUT_COUNT)
      throw new Error("[ERROR] 입력값의 개수를 확인해 주세요");
  }
  checkInputDuplicate(input) {
    let uniqueInput = [...new Set(input)];
    if (uniqueInput.length !== input.length)
    throw new Error("[ERROR] 입력값에 중복이 있습니다");
  }
  checkInputRange(input) {
    const FIRST_NUMBER = 1;
    const LAST_NUMBER = 45;
    if (input < FIRST_NUMBER || input > LAST_NUMBER)
      throw new Error("[ERROR] 1-45의 숫자를 입력해 주세요.");
  }
  checkBonusInLotto(bonus, lotto) {
    if (lotto.indexOf(bonus) !== -1)
      throw new Error("[ERROR] 당첨번호에 보너스번호가 있습니다");
  }
}

module.exports = Exceptions;

const { WINNING_NUMBER_MESSAGE } = require("../constants/messages");

class Lotto {
  #numbers;

  /**
   * Lotto class constructor
   * @param numbers {number[]} [당첨 번호]
   */
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 번호가 6개인지, 정수로 이루어져 있는지 검증하는 메서드
   * @param userSplitInput {number[]} [당첨 번호]
   */
  isInputSplitByComma(userSplitInput) {
    const checkingNumberInput = userSplitInput.map((userSingleInput) => userSingleInput.toString());

    // 6개가 아니라면
    if (userSplitInput.length !== 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.COMMA_NUMBER_ERROR);
    }
    // 정수가 아니라면
    for (const singleElement of checkingNumberInput) {
      if (!/^\d+$/.test(singleElement)) {
        throw new Error(WINNING_NUMBER_MESSAGE.COMMA_NUMBER_ERROR);
      }
    }
  }

  /**
   * 번호가 1~45 범위의 숫자인지 검증하는 메서드
   * @param userSplitInput {number[]} [당첨 번호]
   */
  isSingleLottoElementInRange(userSplitInput) {
    for (const singleElement of userSplitInput) {
      if (1 > singleElement || singleElement > 45) {
        throw new Error(WINNING_NUMBER_MESSAGE.RANGE_ERROR);
      }
    }
  }

  /**
   * 번호들이 겹치지 않는 6개의 수로 이루어져 있는지 검증하는 메서드
   * @param userSplitInput {number[]} [당첨 번호]
   */
  isLottoUnique(userSplitInput) {
    const numbersSet = new Set(userSplitInput);
    if (numbersSet.size !== 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.UNIQUE_ERROR);
    }
  }

  /**
   * 유저 인풋에 대한 전체적인 검증 메서드
   * @param userSplitInput {number[]} [당첨 번호]
   */
  validate(userSplitInput) {
    this.isInputSplitByComma(userSplitInput);
    this.isSingleLottoElementInRange(userSplitInput);
    this.isLottoUnique(userSplitInput);
  }

  /**
   * 당첨 번호 반환 메서드
   * @return {number[]} [당첨 번호]
   */
  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;

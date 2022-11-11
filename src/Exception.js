const { MESSAGES } = require("./Constants");

class Exception {
  /**
   * 플레이어가 게임 중 입력 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  checkAmountExceptions(playerInput) {
    if (Number(playerInput) % 1000 !== 0) {
      throw new Error(MESSAGES.ERROR_AMOUNT_UNIT);
    }
  }
}

module.exports = Exception;

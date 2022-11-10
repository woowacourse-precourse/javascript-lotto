class ValidCheckUtils {
  constructor() {}

  static checkPay(pay) {
    if (pay.replace(/[0-9]/g, "").length > 0)
      throw new Error("[ERROR] 구입금액은 숫자만 입력할 수 있습니다.");

    if (Number(pay) % 1000 > 0)
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야합니다.");
  }

  static checkWinningNumber(winningNum) {
    const winningNumberArray = String(winningNum).split(",");

    if (new Set(winningNumberArray).size !== winningNumberArray.length)
      throw new Error("[ERROR] 당첨 번호는 중복을 포함할 수 없습니다.");

    if (
      winningNumberArray.filter((num) => Number(num) < 1 || Number(num) > 45)
        .length > 0
    )
      throw new Error(
        "[ERROR] 당첨 번호는 1에서 45 사이의 번호만 사용할 수 있습니다."
      );

    if (winningNumberArray.length !== 6)
      throw new Error("[ERROR] 당첨 번호는 총 6개입니다.");

    if (winningNum.replace(/[0-9]|\,/g, "").length > 0)
      throw new Error("[ERROR] 당첨 번호는 숫자만을 사용할 수 있습니다.");
  }
}

module.exports = ValidCheckUtils;

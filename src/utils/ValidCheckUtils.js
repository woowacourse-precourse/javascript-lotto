class ValidCheckUtils {
  constructor() {}

  static checkPay(pay) {
    if (pay.replace(/[0-9]/g, "").length > 0)
      throw new Error("[ERROR] 구입금액은 숫자만 입력할 수 있습니다.");

    if (Number(pay) % 1000 > 0)
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야합니다.");
  }
}

module.exports = ValidCheckUtils;

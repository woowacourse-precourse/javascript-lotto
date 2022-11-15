class CheckVaild {
  static isValidMoney(money) {
    if (Number.isNaN(money)) {
      throw `[ERROR] 입력 금액이 숫자형태가 아닙니다.`;
    }
    if (money % 1000 !== 0) {
      throw `[ERROR] 천원 단위로 금액을 지불해주세요.`;
    }
    if (money > 1000000) {
      throw `[ERROR] 최대 구입 가능 금액은 100만원 입니다. 다시 시작하세요. 입력한 금액: ${money}`;
    }
    if (money < 1000) {
      throw `[ERROR] 로또 한장의 가격은 1000원입니다. 1000원 보다 높은 금액을 입력하세요. 입력한 금액: ${money}`;
    }
  }
}

module.exports = CheckVaild;

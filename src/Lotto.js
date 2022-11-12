const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입 금액을 입력해주세요.\n",
      (inputMoney) => {
        return checkPurchaseAmount(inputMoney);
      }
    );
  }
}

function checkPurchaseAmount(inputMoney) {
  //금액 입력 예외 처리
  if (isNaN(inputMoney)) throw new Error("[ERROR] 숫자만 입력하세요.");

  const INPUT_MONEY = parseInt(inputMoney);
  if (INPUT_MONEY < 1000)
    throw new Error("[ERROR] 1000원 이상으로 입력하세요.");
  if (INPUT_MONEY % 1000 != 0)
    throw new Error("[ERROR] 1000 단위로 입력하세요.");

  printLottoNumber(INPUT_MONEY / 1000);
}

function printLottoNumber(lottoCnt) {
  MissionUtils.Console.print(`${lottoCnt}개를 구매했습니다.`);
}

// TODO: 추가 기능 구현
module.exports = new Lotto();

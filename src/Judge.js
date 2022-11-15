const MissionUtils = require("@woowacourse/mission-utils");
const { RANGE } = require("./Constant");

class Judge {
  constructor() {}

  isBuyerInputValid(buyerInput) {
    if (buyerInput % 1000 !== 0) {
      MissionUtils.Console.print(
        "[ERROR] 로또 한 장은 1000원 입니다. 1000의 배수로만 입력해주세요."
      );
      throw new Error(
        "[ERROR] 로또 한 장은 1000원 입니다. 1000의 배수로만 입력해주세요."
      );
    }
    return buyerInput;
  }

  isLottoInputNaN(lottoInput) {
    for (let i = 0; i < lottoInput.length; i++) {
      if (isNaN(lottoInput[i])) {
        MissionUtils.Console.print(
          "[ERROR] 당첨 번호는 숫자로 입력해야합니다."
        );
        throw new Error("[ERROR] 당첨 번호는 숫자로 입력해야합니다.");
      }
    }
  }
}

module.exports = Judge;

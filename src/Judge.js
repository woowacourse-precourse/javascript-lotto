const MissionUtils = require("@woowacourse/mission-utils");
const { RANGE } = require("./Constant");

class Judge {
  #lottoArr;
  #bonusNum;

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

  lottoInputValid(lottoInput) {
    const lottoArr = lottoInput.split(",");
    this.isLottoInputNaN(lottoArr);
    this.isLottoInputInRange(lottoArr);
    this.isLottoInputLengthValid(lottoArr);
    this.isLottoInputDuplicate(lottoArr);
    this.#lottoArr = lottoArr;
    return this.#lottoArr;
  }

  bonusInputValid(bonusInput) {
    this.isLottoInputNaN(bonusInput);
    this.isLottoInputInRange(bonusInput);
    this.isBonusNumDuplicate(bonusInput);
    this.#bonusNum = bonusInput;
    return this.#bonusNum;
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

  isLottoInputInRange(lottoInput) {
    for (let i = 0; i < lottoInput.length; i++) {
      if (lottoInput[i] < RANGE.MIN || lottoInput[i] > RANGE.MAX) {
        MissionUtils.Console.print(
          `[ERROR] 당첨 번호는 ${RANGE.MIN}-${RANGE.MAX} 범위 안의 숫자여야 합니다.`
        );
        throw new Error(
          `[ERROR] 당첨 번호는 ${RANGE.MIN}-${RANGE.MAX} 범위 안의 숫자여야 합니다.`
        );
      }
    }
  }

  isLottoInputLengthValid(lottoInput) {
    if (lottoInput.length !== 6) {
      MissionUtils.Console.print(
        "[ERROR] 당첨 번호는 6개로 이루어져야 합니다."
      );
      throw new Error("[ERROR] 당첨 번호는 6개로 이루어져야 합니다.");
    }
  }

  isLottoInputDuplicate(lottoInput) {
    const lottoSet = new Set(lottoInput);
    if (lottoInput.length !== lottoSet.size) {
      MissionUtils.Console.print("[ERROR] 당첨 번호는 중복될 수 없습니다.");
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  }

  isBonusNumDuplicate(bonusInput) {
    if (this.#lottoArr.includes(bonusInput)) {
      MissionUtils.Console.print(
        "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다."
      );
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

module.exports = Judge;

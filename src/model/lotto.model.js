const MissionUtils = require("@woowacourse/mission-utils");

class LottoModel {
  inputValidCheck(input) {
    if (/[^\d]/g.test(input)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호에 문자가 포함 되있습니다.");
    }

    if (input % 1000 !== 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1,000원 단위가 아닙니다");
    }

    return input;
  }

  countLotto(input) {
    return input / 1000;
  }

  getLottoNumPrint(countLotto) {
    for (let i = 0; i < countLotto; i++) {
      const sortNumbers = MissionUtils.Random.pickUniqueNumbersInRange( 1, 45, 6 ).sort((prevNum, nextNum) => prevNum - nextNum);
      let stringSortNumber = `[${sortNumbers.join(", ").trim()}]`;
      MissionUtils.Console.print(stringSortNumber);
    }
  }

  lottoNumberError(inputNumber) {
    let convertNumber = inputNumber.split(",").map((string) => +string);
    let isNan = convertNumber.some((item) => isNaN(item));
    let lessCount = convertNumber.some((item) => item < 1);
    let muchCount = convertNumber.some((item) => item > 45);

    if (isNan) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호에 문자가 포함 되있습니다.");
    }

    if (lessCount && muchCount) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1 ~ 45 숫자에 포함되지 않습니다.");
    }

    if (new Set(convertNumber).size < convertNumber.length) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 중복된 수가 포함 돼 있습니다.");
    }

    return inputNumber;
  }

  lottoBonusNumberError(bonusInputNumber) {
    let convertNumber = bonusInputNumber.split(",").map((string) => +string);
    let isNan = convertNumber.some((item) => isNaN(item));

    if (isNan) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호에 문자가 포함 돼 있습니다.");
    }

    if (convertNumber > 45 && convertNumber < 1) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1 ~ 45 숫자에 포함되지 않습니다.");
    }

    if (convertNumber.length > 1) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 보너스 번호가 2개 이상 되었습니다");
    }

    return bonusInputNumber;
  }
}

module.exports = LottoModel;

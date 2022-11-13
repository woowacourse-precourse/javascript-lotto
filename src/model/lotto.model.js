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
    let stringSortNumber = `${countLotto}개를 구매했습니다\n`;

    for (let i = 0; i < countLotto; i++) {
      const sortNumbers = MissionUtils.Random.pickUniqueNumbersInRange( 1, 45, 6 ).sort((prevNum, nextNum) => prevNum - nextNum);
      stringSortNumber += `[${sortNumbers.join(", ").trim()}]\n`;
    }

    return MissionUtils.Console.print(stringSortNumber);
  }
}

module.exports = LottoModel;

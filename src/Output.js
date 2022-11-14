const { Console } = require("@woowacourse/mission-utils");

class Output {
  constructor() {}

  static createLottoString(numbers) {
    let lottoStr = "";
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        lottoStr += "[";
        lottoStr += numbers[i];
        lottoStr += ", ";
        continue;
      }
      if (i === numbers.length - 1) {
        lottoStr += numbers[i];
        lottoStr += "]";
        continue;
      }
      lottoStr += numbers[i];
      lottoStr += ", ";
    }
    return lottoStr;
  }

  static printLottos(lottoArr) {
    for (let i = 0; i < lottoArr.length; i++) {
      const result = Output.createLottoString(lottoArr[i]);
      Console.print(result);
    }
  }
}

module.exports = Output;

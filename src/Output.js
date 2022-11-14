const { Console } = require("@woowacourse/mission-utils");

class Output {
  static createLottoString(numbers) {
    let lottoStr = "";
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        lottoStr += `[${numbers[i]}, `;
        continue;
      }
      if (i === numbers.length - 1) {
        lottoStr += `${numbers[i]}]`;
        continue;
      }
      lottoStr += `${numbers[i]}, `;
    }
    return lottoStr;
  }

  static printLottos(lottoArr) {
    for (let i = 0; i < lottoArr.length; i++) {
      const result = Output.createLottoString(lottoArr[i].getLottoNumber());
      Console.print(result);
    }
  }
}

module.exports = Output;

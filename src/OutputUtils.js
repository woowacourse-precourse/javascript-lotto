const { Console } = require("@woowacourse/mission-utils");

class OutputUtils {
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

  static printLottos(lottos) {
    const lottosForPrint = lottos.getLottos();
    for (let i = 0; i < lottosForPrint.length; i++) {
      const result = OutputUtils.createLottoString(
        lottosForPrint[i].getLottoNumber()
      );
      Console.print(result);
    }
  }
}

module.exports = OutputUtils;

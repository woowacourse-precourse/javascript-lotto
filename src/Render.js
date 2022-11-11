const { Console } = require('@woowacourse/mission-utils');

class Render {
  static issuedLottoList(count, lottoList) {
    Console.print(`${count}개를 구매했습니다.`);
    lottoList.forEach((lottoNumber) => {
      Console.print(`[${lottoNumber.join(', ')}]`);
    });
  }

  static winningResult(prizeResult) {
    Console.print(`3개 일치 (5,000원) - ${prizeResult.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeResult.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeResult.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeResult.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeResult.first}개`);
  }
}

module.exports = Render;

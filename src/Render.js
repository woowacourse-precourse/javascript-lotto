const { Console } = require('@woowacourse/mission-utils');

class Render {
  static issuedLottoList(count, lottoList) {
    Console.print(`${count}개를 구매했습니다.`);
    lottoList.forEach((lottoNumber) => {
      Console.print(`[${lottoNumber.join(', ')}]`);
    });
  }
}

module.exports = Render;

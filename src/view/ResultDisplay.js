const { Console } = require('@woowacourse/mission-utils');

class ResultDisplay {
  printRandomNum(result) {
    Console.print(`\n${result.lottoQuantity}개를 구매했습니다.`);

    result.lottoNums.forEach((nums) => {
      let sortedNum = nums.sort((a, b) => a - b).join(', ');
      Console.print(`[${sortedNum}]\n`);
    });
  }
}

module.exports = ResultDisplay;

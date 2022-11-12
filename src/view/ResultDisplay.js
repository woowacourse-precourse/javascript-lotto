const { Console } = require('@woowacourse/mission-utils');

class ResultDisplay {
  printRandomNum(result) {
    Console.print(`${result.lottoQuantity}개를 구매했습니다.`);

    result.lottoNums.forEach((nums) => {
      let sortedNum = nums.sort((a, b) => a - b);
      Console.print(sortedNum);
    });
  }
}

module.exports = ResultDisplay;

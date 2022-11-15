const { MESSAGE, CORRECT, REWARD } = require('./constants/constants');
const { Console } = require('@woowacourse/mission-utils');

const MessageFunc = {
  BOUGHTLOTTO: (n, list) => {
    Console.print(`${n}개를 구매했습니다.`);
    list.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    });
  },
  YIELD: (result, count) => {
    let total = 0;
    result.forEach((grade) => {
      if (grade != null) {
        total += Number(REWARD[grade].split(',').join(''));
      }
    });
    Console.print(`총 수익률은 ${total / (count * 10).toFixed(1)}%입니다.`);
  },

  RESULT: (result, count) => {
    Console.print(MESSAGE.ANALYTIC);
    for (let grade = 5; grade >= 1; grade--) {
      Console.print(
        `${CORRECT[grade]} (${REWARD[grade]}원) - ${
          result.filter((e) => e == grade).length
        }개`
      );
    }
    MessageFunc.YIELD(result, count);
    Console.close();
  },
};

module.exports = MessageFunc;

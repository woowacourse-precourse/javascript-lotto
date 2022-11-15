const { MESSAGE, CORRECT, REWARD } = require('./constants/constants');
const { Console } = require('@woowacourse/mission-utils');

const MessageFunc = {
  BOUGHTLOTTO: (n, list) => {
    Console.print(`${n}개를 구매했습니다.`);
    list.forEach((element) => {
      Console.print(`[${element.join(', ')}]`);
    });
  },
};

module.exports = MessageFunc;

const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  message: { COUNT: '개를 구매했습니다.' },

  printPurchase(count, issueLottos) {
    const { COUNT } = OutputView.message;
    const countMessage = `${count}${COUNT}`;
    const issuedLottosMessage = issueLottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`\n${countMessage}\n${issuedLottosMessage}`);
  },
};

module.exports = OutputView;

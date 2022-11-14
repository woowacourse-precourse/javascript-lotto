const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('../constants/constants');

const printGeneratedLottos = (generatedLottos) => {
  generatedLottos.map((lotto) => Console.print(`[${lotto.join(', ')}]`));
};

const printNumOfLottos = (numOflottos) => {
  Console.print(`\n${numOflottos}개를 구매했습니다.`);
};

const printLottoResult = (score, profit) => {
  Console.print(RESULT.TITLE);
  Console.print(RESULT.SCORE.FIFTH_RANK(score['3']));
  Console.print(RESULT.SCORE.FOURTH_RANK(score['4']));
  Console.print(RESULT.SCORE.THIRD_RANK(score['5']));
  Console.print(RESULT.SCORE.SECOND_RANK(score['bonus']));
  Console.print(RESULT.SCORE.FIRST_RANK(score['6']));
  Console.print(RESULT.PROFIT(profit));
};

module.exports = { printLottoResult, printGeneratedLottos, printNumOfLottos };

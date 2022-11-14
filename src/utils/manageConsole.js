const { Console } = require('@woowacourse/mission-utils');

const printGeneratedLottos = (generatedLottos) => {
  generatedLottos.forEach((lotto) => Console.print(lotto));
};

const printLottoResult = (score, yield) => {
  Console.print(`\n당첨 통계\n---
3개 일치 (5,000원) - ${score['3']}개
4개 일치 (50,000원) - ${score['4']}개
5개 일치 (1,500,000원) - ${score['5']}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${score['bonus']}개
6개 일치 (2,000,000,000원) - ${score['6']}개
총 수익률은 ${yield}%입니다.`);
};

module.exports = { printLottoResult, printGeneratedLottos };

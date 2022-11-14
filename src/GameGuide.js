const { Console } = require('@woowacourse/mission-utils');
const {
  ENTER_PURCHASE_AMOUNT,
  ENTER_WINNING_NUMBERS,
  ENTER_BONUS_NUMBER,
  PLEASE_ENTER_TEXT
} = require('./constans');

const title = {
  [ENTER_PURCHASE_AMOUNT]: '구입금액',
  [ENTER_WINNING_NUMBERS]: '당첨 번호',
  [ENTER_BONUS_NUMBER]: '보너스 번호'
};

const winningPrize = ['', '2,000,000,000', '30,000,000', '1,500,000', '50,000', '5,000'];

// 출력을 담당
class GameGuide {
  #makeInputGuideText(inputType) {
    return `${title[inputType]}${PLEASE_ENTER_TEXT}`;
  }

  printInputGuideText(inputType) {
    console.log(this.#makeInputGuideText(inputType));
  }

  printGeneratedLottoQuantity(quantity) {
    console.log();
    Console.print(`${quantity}개를 구매했습니다.`);
  }

  printGeneratedLotto(generatedLotto) {
    const text = generatedLotto.reduce((acc, cur) => {
      return acc + `[${cur.join(', ')}]\n`;
    }, '');

    Console.print(text);
  }

  createMatchText(rank, count) {
    if (rank === 2) {
      return `5개 일치, 보너스 볼 일치 (${winningPrize[2]}원) - ${count}개`;
    }

    const match = 7 - rank === 6 ? 6 : 7 - rank + 1;
    return `${match}개 일치 (${winningPrize[rank]}원) - ${count}개`;
  }

  printWinningResult(result) {
    console.log('당첨 통계\n---');
    for (let i = 5; i >= 1; i--) {
      Console.print(this.createMatchText(i, result[i]));
    }
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

module.exports = GameGuide;

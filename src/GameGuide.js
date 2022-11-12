const { Console } = require('@woowacourse/mission-utils');
const { ENTER_PURCHASE_AMOUNT, ENTER_WINNING_NUMBERS, PLEASE_ENTER_TEXT } = require('./constans');

const title = {
  [ENTER_PURCHASE_AMOUNT]: '구입금액',
  [ENTER_WINNING_NUMBERS]: '당첨 번호'
};

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
}

module.exports = GameGuide;

const { PRIZE, WIN_MONEY } = require('./constants/prize');

class Message {
  static getLottoCountMessage(lottoCount) {
    return `${lottoCount}개를 구매했습니다.`;
  }

  static getLottoNumbersMessage(numbers) {
    return `[${numbers.join(', ')}]`;
  }

  static getResultMessage(prize, prizeCount) {
    const matchCountMessage = Message.#getMatchCountMessage(prize);
    const winMoneyMessage = Message.#getWinMoneyMessage(prize);
    const prizeCountMessage = Message.#getPrizeCountMessage(prizeCount);

    if (prize === PRIZE.SECOND) {
      return `${matchCountMessage}, 보너스 볼 일치 ${winMoneyMessage} - ${prizeCountMessage}`;
    }

    return `${matchCountMessage} ${winMoneyMessage} - ${prizeCountMessage}`;
  }

  static #getMatchCountMessage(prize) {
    const matchCount = prize > PRIZE.SECOND ? 8 - prize : 7 - prize;

    return `${matchCount}개 일치`;
  }

  static #getWinMoneyMessage(prize) {
    const winMoney = WIN_MONEY[prize];
    const winMoneyString = winMoney.toLocaleString('ko-KR');

    return `(${winMoneyString}원)`;
  }

  static #getPrizeCountMessage(prizeCount) {
    return `${prizeCount}개`;
  }

  static getProfitRateMessage(profitRate) {
    return `총 수익률은 ${profitRate}%입니다.`;
  }
}

module.exports = Message;

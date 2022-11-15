class Message {
  static ASK_BUDGET = "구입금액을 입력해 주세요.\n";

  static ASK_WINNING_NUMBER = "\n당첨 번호를 입력해 주세요.\n";

  static ASK_BONUS_NUMBER = "\n보너스 번호를 입력해 주세요.\n";

  static WINNING_STATS = "\n당첨통계\n---";

  static returnHowManyLotto(count) {
    return `\n${count}개를 구매했습니다.`;
  }

  static returnFifthPrizeResult(count) {
    return `3개 일치 (5,000원) - ${count}개`;
  }

  static returnFourthPrizeResult(count) {
    return `4개 일치 (50,000원) - ${count}개`;
  }

  static returnThirdPrizeResult(count) {
    return `5개 일치 (1,500,000원) - ${count}개`;
  }

  static returnSecondPrizeResult(count) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
  }

  static returnFirstPrizeResult(count) {
    return `6개 일치 (2,000,000,000원) - ${count}개`;
  }

  static returnYield(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn}%입니다.`;
  }
}

module.exports = Message;

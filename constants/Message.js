
class Message {
  static LOTTO_LENGTH = 6;
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 45;

  static INPUT_PURCHASE_PRICE = '구입금액을 입력해 주세요.\n';
  static WIN_NUMBER = '\n당첨 번호를 입력해 주세요.\n';
  static BONUS_NUMBER = '\n보너스 번호를 입력해 주세요.\n';

  static WIN_STAT = '\n당첨 통계\n---';
  static UNIT = '개';

  static THREE_MATCH = '3개 일치 (5,000원) - ';
  static FOUR_MATCH = '4개 일치 (50,000원) - ';
  static FIVE_MATCH = '5개 일치 (1,500,000원) - ';
  static FIVE_BONUS_MATCH = '5개 일치, 보너스 볼 일치 (30,000,000원) - ';
  static SIX_MATCH = '6개 일치 (2,000,000,000원) - ';

  static COUNT_LOTTO = '개를 구매했습니다.';
  static TOTAL_REVENUE = '총 수익률은 ';
  static PERCENT = '%입니다.';

  static getCountLottery(price) {
    return `\n${parseInt(price / 1000)}`;
  }

  static getTotalMatch(rank) {
    return `${this.THREE_MATCH}${rank.rankFive}${this.UNIT}\n${this.FOUR_MATCH}${rank.rankFour}${this.UNIT}\n${this.FIVE_MATCH}${rank.rankThree}${this.UNIT}\n${this.FIVE_BONUS_MATCH}${rank.rankTwo}${this.UNIT}\n${this.SIX_MATCH}${rank.rankOne}${this.UNIT}`;
  }

  static getTotalRevenue(revenue) {
    return `${this.TOTAL_REVENUE}${revenue}${this.PERCENT}`;
  }
}

module.exports = Message;

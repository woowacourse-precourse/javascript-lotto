const PRIZE_MESSAGE = {
  STATS: '당첨 통계\n---',
  BUY(number) {
    return `${number}개를 구매했습니다.`;
  },
  PRIZE(cnt, prizeMoney, prizeCnt) {
    return `${cnt}개 일치 (${prizeMoney}원) - ${prizeCnt}개`;
  },
  PRIZE_BONUS(prizeMoney, prizeCnt) {
    return `5개 일치, 보너스 볼 일치 (${prizeMoney}원) - ${prizeCnt}개`;
  },
  PROFIT(percent) {
    return `총 수익률은 ${percent}%입니다.`;
  },
};

const ERROR_MESSAGE = {
  ONLY_INPUT_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  LOTTO_PRICE_CEHCK: '[ERROR] 로또는 1000원 단위로 구매할 수 있습니다.',
  INPUT_PRICE: '[ERROR] 금액은 0원 이상 입력햊주세요.',
  COMMA: '[ERROR] 쉼표(,)로 구분하여 입력해주세요.',
  LENGTH(cnt) {
    return `[ERROR] ${cnt}개의 숫자를 입력해주세요.`;
  },
  RANGE(min, max) {
    return `[ERROR] ${min} ~ ${max} 사이의 숫자를 입력해주세요.`;
  },
  OVERLAP: '[ERROR] 중복되는 숫자가 있습니다.',
  DUPNUMER: '[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.',
};

const INPUT_MESSAGE = {
  MONEY: '구입금액을 입력해주세요.\n',
  WIN_NUMS: '당첨 번호를 입력해주세요.\n',
  BONUS_NUM: '보너스 번호를 입력해주세요.\n',
};

module.exports = { PRIZE_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };

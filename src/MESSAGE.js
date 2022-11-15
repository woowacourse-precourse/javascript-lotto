const MESSAGE = {
  INPUT: {
    MONEY: '구입금액을 입력해 주세요.\n',
    WINNUMBER: '당첨 번호를 입력해 주세요.\n',
    BONUSNUMBER: '보너스 번호를 입력해 주세요.\n',
  },
  ERROR: {
    MONEY: {
      NUMBER: '[ERROR] 구입금액은 숫자여야 합니다.',
      THOUSAND: '[ERROR] 구입금액은 1000단위여야 합니다.',
      ZERO: '[ERROR] 구입금액은 0이상 이여야 합니다.',
    },
    LOTTO: {
      NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
      BONUSLENGTH: '[ERROR] 보너스 번호는 1개여야 합니다.',
      LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
      DUPLICATE: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
      RANGE: '[ERROR] 로또 번호는 1부터 45 사이여야 합니다.',
    },
  },
};

module.exports = MESSAGE;

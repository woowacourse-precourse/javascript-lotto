const ERROR = {
    LOTTO: {
      DUPLICATE_NUMBER: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
      OUT_OF_RANGE: '[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.',
      NOT_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
    },
    BUDGET: {
      NOT_INTEGER: '[ERROR] 금액은 정수 값이어야 합니다.',
      NOT_IN_RANGE: '[ERROR] 금액은 1000원 단위이어야 합니다.',
    },
    BONUS: {
      OUT_OF_RANGE: '[ERROR] 보너스 번호는 1에서 45 사이의 숫자만 가능합니다.',
      DUPLICATE_NUMBER: '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.',
      NOT_INTEGER: '[ERROR] 보너스 번호는 정수이어야 합니다.',
    },
  };
  
  const INPUT_MESSAGE = {
    BUDGET: '구입금액을 입력해 주세요.\n',
    LOTTO: '당첨 번호를 입력해주세요.\n',
    BONUS: '보너스 번호를 입력해주세요.\n',
  };
  
  const PRIZE = [0, 5000, 50000, 1500000, 30000000, 2000000000];
  
  const RANK_NOTICE = [
    '',
    '3개 일치 (5,000원) - ',
    '4개 일치 (50,000원) - ',
    '5개 일치 (1,500,000원) - ',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6개 일치 (2,000,000,000원) - ',
  ];

  const PRINT = {
    REVENUE: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
    WINNER_HEADER: '당첨 통계\n---',  }
  
  module.exports = {
    ERROR,
    INPUT_MESSAGE,
    PRIZE,
    RANK_NOTICE,
    PRINT,
  };
  
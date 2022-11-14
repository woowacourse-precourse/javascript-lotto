module.exports = {
  MESSAGES: Object.freeze({
    PAYMONEY: '구입금액을 입력해 주세요.',
    NO_MONEY: '돈이 없으시군요?',
    NOT_ACCEPTABLE: '1000원 단위로만 구매가능합니다.',
    NOT_A_NUMBER: '숫자만 넣어주세요.',
    ASK_WINNING: '당첨 번호를 입력해 주세요.',
    ASK_BONUS: '보너스 번호를 입력해 주세요.',
    ZERO_VALUE: '0 혹은 공백을 입력값에 넣지 마세요.',
    DUPLICATED_INPUT: '입력값이 중첩되었습니다.',
    WRONG_LENGTH: '1 ~ 45 사이 서로 다른 수 6개를 입력해주세요.',
    WRONG_RANGE: '1 ~ 45 사이에 숫자를 넣어주세요.',
  }),

  CONSTANTS: Object.freeze({
    PRIZE: [5000, 50000, 1500000, 30000000, 2000000000],
    STATTEXT: [
      '3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - ',
    ],
    PREFIX: '[ERROR] ',
    BEGIN: 1,
    END: 6,
    ZERO: 0,
    FINISH: 5,
    MAX: 45,
  }),
};

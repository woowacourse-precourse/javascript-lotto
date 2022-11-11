const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  SPLIT_WITH: ',',
  NUM_OF_PRIZE: 5,
});

const ERROR_MESSAGE = Object.freeze({
  MONEY_FORM: '[ERROR] 음이아닌 정수를 입력해야 합니다.',
  MONEY_MULTIPLE: '[ERROR] 1000의 배수를 입력해야 합니다.',
  INT_FORM: '[ERROR] 정수 앞에 0이 올 수 없습니다.',
  WINNING_NUM_FORM: '[ERROR] 숫자를 ,로 구분해 입력해야 합니다.',
  LOTTO_NUM_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUM_RANGE: '[ERROR] 1에서 45까지의 숫자를 입력해야 합니다.',
  WINNING_NUM_DUPLICATION: '[ERROR] 중복된 숫자를 입력할 수 없습니다.',
  INCLUDED_WINNING_NUM:
    '[ERROR] 이미 당첨 번호에 포함된 번호를 입력할 수 없습니다.',
});

const MESSAGE = Object.freeze({
  ASK_BUDGET: '구입금액을 입력해 주세요.',
  ASK_WINNING_NUM: '당첨 번호를 입력해 주세요.',
  ASK_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  NULL: '',
});

const PRIZE_MONEY = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

const PLACES_OF_DECIMALS = 1;

const RENDER_MESSAGE = Object.freeze({
  purchaseNotification: (count) => `${count}개를 구매했습니다`,
  issuedLotto: (numbers) => `[${numbers.join(', ')}]`,
  matchThree: (count) => `3개 일치 (5,000원) - ${count}개`,
  matchFour: (count) => `4개 일치 (50,000원) - ${count}개`,
  matchFiveAndBonus: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  matchFive: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  matchSix: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  rateOfReturn: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
});

module.exports = {
  LOTTO,
  ERROR_MESSAGE,
  MESSAGE,
  PRIZE_MONEY,
  PLACES_OF_DECIMALS,
  RENDER_MESSAGE,
};

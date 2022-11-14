const MESSAGE = {
  SETINPUT: '구입금액을 입력해 주세요. \n',
  PRINTLOTTONUMBER: lottoNumber => `\n${lottoNumber}개를 구매했습니다.`,
  GETWINNINGNUMBER: '\n당첨 번호를 입력해 주세요.\n',
  GETBONUSNUMBER: '\n보너스 번호를 입력해 주세요.\n',
  3: n => `3개 일치 (5,000원) - ${n}개`,
  4: n => `4개 일치 (50,000원) - ${n}개`,
  5: n => `5개 일치 (1,500,000원) - ${n}개`,
  '5+': n => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  6: n => `6개 일치 (2,000,000,000원) - ${n}개`,
  RESULT: `\n당첨통계\n---`,
  REWARD: reward => `총 수익률은 ${reward}%입니다.`,
};

const REWARD = {
  3: 5000,
  4: 50000,
  5: 1500000,
  '5+': 30000000,
  6: 2000000000,
};

const ERROR_MESSAGE = {
  INPUT_MONEY: '[ERROR] 1000원 단위로 구입할 수 있습니다.',
  LOTTO_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  INPUT_OVERLAP: '[ERROR] 모두 다른 번호를 입력해 주세요.',
  INPUT_TYPE_ERROR: '[ERROR] 숫자만 입력하세요.',
  INPUT_RANGE: `[ERROR] 1에서 45사이의 숫자만 입력하세요.`,
};

const INPUT_MONEY_UNIT = 1000;
module.exports = { MESSAGE, ERROR_MESSAGE, INPUT_MONEY_UNIT, REWARD };

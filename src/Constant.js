const MESSAGE = {
  SETINPUT: '구입금액을 입력해 주세요. \n',
  PRINTLOTTONUMBER: lottoNumber => `\n${lottoNumber}개를 구매했습니다.`,
  GETWINNINGNUMBER: '\n당첨 번호를 입력해 주세요.\n',
  GETBONUSNUMBER: '\n보너스 번호를 입력해 주세요.\n',
  FIFTH: n => `3개 일치 (5,000원) - ${n}개`,
  FORTH: n => `4개 일치 (50,000원) - ${n}개`,
  THIRD: n => `5개 일치 (1,500,000원) - ${n}개`,
  SECOND: n => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  FIRST: n => `6개 일치 (2,000,000,000원) - ${n}개`,
  RESULT: `\n당첨통계\n---`,
  SUM: sum => `총 수익률은 ${sum}%입니다.`,
};

const ERROR_MESSAGE = {
  INPUT_MONEY: '[ERROR] 1000원 단위로 구입할 수 있습니다.',
  LOTTO_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  INPUT_OVERLAP: '[ERROR] 보너스 번호는 당첨번호와 달라야 합니다..',
  INPUT_TYPE_ERROR: '[ERROR] 숫자만 입력하세요.',
};

const INPUT_MONEY_UNIT = 1000;
module.exports = { MESSAGE, ERROR_MESSAGE, INPUT_MONEY_UNIT };

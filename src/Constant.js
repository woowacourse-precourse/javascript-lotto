const MESSAGE = {
  SETINPUT: '구입금액을 입력해 주세요. \n',
  PRINTLOTTONUMBER: lottoNumber => `\n${lottoNumber}개를 구매했습니다.`,
};

const ERROR_MESSAGE = {
  INPUT_MONEY: '[ERROR] 1000원 단위로 구입할 수 있습니다.',
  LOTTO_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
};

const INPUT_MONEY_UNIT = 1000;
module.exports = { MESSAGE, ERROR_MESSAGE, INPUT_MONEY_UNIT };

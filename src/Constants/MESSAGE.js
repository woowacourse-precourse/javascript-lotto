const INGAME_MESSAGE = {
  buy: '구입금액을 입력해 주세요.\n',
  pickMain: '당첨 번호를 입력해 주세요.\n',
  pickBonus: '보너스 번호를 입력해 주세요.\n',
  statistic: '당첨 통계\n ---',
};

const ERROR_MESSAGE = {
  appropriateUnit: '[ERROR] : 구입금액은 천원단위로 입력해야합니다.',
  splitSymbol: '[ERROR] : 당첨번호는 , 단위로 구분하여 입력해야합니다.',
  mainNumberOfDigit: '[ERROR] : 당첨번호는 6자를 입력해야합니다.',
  bonusNumberOfDigit: '[ERROR] : 보너스 번호는 1자를 입력해야합니다.',
  numberInRange: '[ERROR] : 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  mainNumberOverlap: '[ERROR] : 당첨번호는 중복된 번호를 입력할 수 없습니다.',
  bonusNumberOverlap: '[ERROR] : 보너스번호가 중복되었습니다.',
};

module.exports = {
  INGAME_MESSAGE,
  ERROR_MESSAGE,
};

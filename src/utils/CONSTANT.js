// good
const TICKET_PRICE = 1000;
const MESSAGE = {
  inputMoney: '구입금액을 입력해 주세요.',
  paid: '개를 구매했습니다.',
  inputNumbers: '당첨 번호를 입력해 주세요.',
  inputBonusNumber: '보너스 번호를 입력해 주세요.',
  calculateTickets: '당첨 통계',
  hit: '개 일치',
  bonus: ', 보너스 볼 일치',
  profitPrefix: '총 수익률은 ',
  profitPostfix: '%입니다.',
};
const ERROR_MESSAGE = {
  duplicated: '중복된 숫자가 있습니다.',
  isSixNumbers: '로또 번호는 6개여야 합니다.',
  isNumbersUnique: '로또 번호에 중복된 숫자가 없어야 합니다.',
  isNumbersInRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  isNumber: '숫자여야 합니다.',
  isThousands: '원 단위로 입력하세요',
  isNumberSorted: '배열이 되지 않았습니다.',
};
const RANK = [
  {
    rank: 'FIFTH',
    hit: 3,
    bonus: false,
    money: 5000,
  },
  {
    rank: 'FOURTH',
    hit: 4,
    bonus: false,
    money: 50000,
  },
  {
    rank: 'THIRD',
    hit: 5,
    bonus: false,
    money: 1500000,
  },
  {
    rank: 'SECOND',
    hit: 5,
    bonus: true,
    money: 30000000,
  },
  {
    rank: 'FIRST',
    hit: 6,
    bonus: false,
    money: 2000000000,
  },

];
module.exports = {
  TICKET_PRICE, RANK, MESSAGE, ERROR_MESSAGE,
};

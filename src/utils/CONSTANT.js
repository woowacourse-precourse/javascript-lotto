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
module.exports = { TICKET_PRICE, RANK, MESSAGE };

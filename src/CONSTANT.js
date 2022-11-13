// good
const TICKET = {
  price: 1000,
};
const RANK = [
  {
    rank: 'FIFTH',
    hit: 3,
    bonus: false,
    money: 5000,
    description: '3개 일치 (5,000원)',
  },
  {
    rank: 'FOURTH',
    hit: 4,
    bonus: false,
    money: 50000,
    description: '4개 일치 (50,000원)',
  },
  {
    rank: 'THIRD',
    hit: 5,
    bonus: false,
    money: 1500000,
    description: '5개 일치 (1,500,000원)',
  },
  {
    rank: 'SECOND',
    hit: 5,
    bonus: true,
    money: 30000000,
    description: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  },
  {
    rank: 'FIRST',
    hit: 6,
    bonus: false,
    money: 2000000000,
    description: '6개 일치 (2,000,000,000원)',
  },

];
module.exports = { TICKET, RANK };

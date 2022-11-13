// good
const TICKET_PRICE = 1000;
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
module.exports = { TICKET_PRICE, RANK };

const LOTTO = {
  LOTTO_COST: 1000,
  LOTTO_SIZE: 6,
  LOTTO_SMALL_VALUE: 1,
  LOTTO_BIG_VALUE: 45,
  PRIZE_SIZE: 5,
};

const LOTTO_PRIZE = [
  { PLACE: "FIRST", MONEY: 2000000000, MATCHED: 6, BONUS: false },
  { PLACE: "SECOND", MONEY: 30000000, MATCHED: 5, BONUS: true },
  { PLACE: "THIRD", MONEY: 1500000, MATCHED: 5, BONUS: false },
  { PLACE: "FOURTH", MONEY: 50000, MATCHED: 4, BONUS: false },
  { PLACE: "FIFTH", MONEY: 5000, MATCHED: 3, BONUS: false },
];

Object.freeze(LOTTO);
Object.freeze(LOTTO_PRIZE);
for (let prize of LOTTO_PRIZE) {
  Object.freeze(prize);
}

module.exports = { LOTTO, LOTTO_PRIZE };

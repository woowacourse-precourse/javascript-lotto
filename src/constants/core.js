// const { RESULT } = require("./constants")

// const LOTTO_RESULT = {
//     RESULT.THREE : {
//         RESULT.MONEY: RESULT.THREE_CORRECT_MONEY,
//         RESULT.COUNT : 0
//     },
//     RESULT.FOUR : {
//         RESULT.MONEY: RESULT.FOUR_CORRECT_MONEY,
//         RESULT.COUNT : 0
//     },
//     RESULT.FIVE : {
//         RESULT.MONEY: RESULT.FIVE_CORRECT_MONEY,
//         RESULT.COUNT : 0
// },
// RESULT.SIX : {
//     RESULT.MONEY: RESULT.SI_CORRECT_MONEY,
//     RESULT.COUNT : 0
// }
// }

const LOTTO_RESULT = {
  3: {
    money: 5000,
    count: 0,
  },
  4: {
    money: 50000,
    count: 0,
  },
  5: {
    money: 1500000,
    count: 0,
  },
  6: {
    money: 2000000000,
    count: 0,
  },
};

const BONUS_RESULT = {
  money: 30000000,
  count: 0,
};

module.exports = {
  LOTTO_RESULT,
  BONUS_RESULT,
};

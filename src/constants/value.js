const RANKING_FROM_MATCH_COUNT = Object.freeze({
  6: 1,
  5: 3,
  4: 4,
  3: 5
});

const RANK_ACCORDING_REWARD = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000
});

const NUMBER_TYPE = Object.freeze({
  WINNING_NUMBER: "winningNumber",
  BONUS_NUMBER: "bonusNumber"
});

const RANKING = Object.freeze({
  FIFTH_PLACE: 5,
  FOURTH_PLACE: 4,
  THIRD_PLACE: 3,
  SECOND_PLACE: 2,
  FIRST_PLACE: 1
});

module.exports = { RANKING_FROM_MATCH_COUNT, RANK_ACCORDING_REWARD, NUMBER_TYPE, RANKING };

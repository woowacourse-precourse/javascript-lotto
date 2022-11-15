const LOTTO_RANKING_REWARD = Object.freeze({
  '1등': 2_000_000_000,
  '2등': 30_000_000,
  '3등': 1_500_000,
  '4등': 50_000,
  '5등': 5_000,
});

const RANKING_ACCORDING_MATCH_COUNT = Object.freeze({
  6: '1등',
  '5+bonus': '2등',
  5: '3등',
  4: '4등',
  3: '5등',
});

module.exports = { LOTTO_RANKING_REWARD, RANKING_ACCORDING_MATCH_COUNT };

const { RANK_INDEX, RANK_REWARD } = require('../Constants/RANK');

function countWinLottery(winCount, winBonusCount) {
  if (winCount === 6) return { winIndex: RANK_INDEX.first, reward: RANK_REWARD.first };
  if (winCount === 5 && winBonusCount) return { winIndex: RANK_INDEX.second, reward: RANK_REWARD.second };
  if (winCount === 5) return { winIndex: RANK_INDEX.third, reward: RANK_REWARD.third };
  if (winCount === 4) return { winIndex: RANK_INDEX.fourth, reward: RANK_REWARD.fourth };
  if (winCount === 3) return { winIndex: RANK_INDEX.fifth, reward: RANK_REWARD.fifth };
  return { winIndex: RANK_INDEX.lose, reward: RANK_REWARD.lose };
}

function checkWinLottery(Consumer, Lotto) {
  const winList = [0, 0, 0, 0, 0, 0];
  let total = 0;

  Consumer.lotteryList.forEach((lottoNumber) => {
    const [winCount, winBonusCount] = Lotto.checkWin(lottoNumber);
    const { winIndex, reward } = countWinLottery(winCount, winBonusCount);
    winList[winIndex] += 1;
    total += reward;
  });

  return [winList, total];
}

module.exports = {
  checkWinLottery,
};

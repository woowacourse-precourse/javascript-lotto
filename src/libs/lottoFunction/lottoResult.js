const MissionUtils = require('@woowacourse/mission-utils');

const lottoStatistics = (lottos, winningNumber, bonusNumber) => {
  const totalNumber = [...winningNumber, Number(bonusNumber)];
  MissionUtils.Console.print('\n당첨 통계\n---');
  calculateMatch(lottos, totalNumber, bonusNumber);
};

const calculateMatch = (lottos, totalNumber, bonusNumber) => {
  const rank = calculateRank(lottos, totalNumber, bonusNumber);
  const account = lottos.length * 1000;

  printLottoResult(rank);
  calculateProfit(account, rank);

  MissionUtils.Console.close();
};

const checkRank = (count, bonusNumber) => {
  if (count === 3) {
    return '5등';
  }
  if (count === 4) {
    return '4등';
  }
  if (count === 5) {
    return '3등';
  }
  if (count === 6 && lotto.includes(bonusNumber) === -1) {
    return '2등';
  }
  if (count === 6 && lotto.includes(bonusNumber) !== -1) {
    return '1등';
  }
  return undefined;
};

const calculateRank = (lottos, totalNumber, bonusNumber) => {
  const rank = {
    '1등': 0,
    '2등': 0,
    '3등': 0,
    '4등': 0,
    '5등': 0,
  };

  for (let i = 0; i < lottos.length; i++) {
    let count = 0;
    for (let j = 0; j < totalNumber.length; j++) {
      if (lottos[i].includes(totalNumber[j])) {
        count += 1;
      }
    }
    rank[checkRank(count, bonusNumber)] += 1;
  }

  return rank;
};

const printLottoResult = (rank) => {
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank['5등']}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank['4등']}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank['3등']}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank['2등']}개`
  );
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank['1등']}개`);
};

const calculateProfit = (account, rank) => {
  MissionUtils.Console.print(
    `총 수익률은 ${
      Math.round(
        ((rank['5등'] * 5000 +
          rank['4등'] * 50000 +
          rank['3등'] * 1500000 +
          rank['2등'] * 30000000 +
          rank['1등'] * 30000000) /
          account) *
          1000
      ) / 10
    }%입니다.`
  );
};

module.exports = {
  lottoStatistics,
};

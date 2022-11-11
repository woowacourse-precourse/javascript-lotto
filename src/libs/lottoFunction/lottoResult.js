const MissionUtils = require("@woowacourse/mission-utils");

const lottoStatistics = (lottos, winningNumber, bonusNumber) => {
  const totalNumber = [...winningNumber, Number(bonusNumber)];
  MissionUtils.Console.print("당첨 통계\n---");
  calculateMatch(lottos, totalNumber, bonusNumber);
};

const calculateMatch = (lottos, totalNumber, bonusNumber) => {
  const rank = {
    "1등": 0,
    "2등": 0,
    "3등": 0,
    "4등": 0,
    "5등": 0,
  };

  for (const lotto of lottos) {
    let count = 0;
    for (const num of totalNumber) {
      if (lotto.includes(num)) {
        count += 1;
      }
    }
    if (count === 3) {
      rank["5등"] += 1;
      continue;
    }
    if (count === 4) {
      rank["4등"] += 1;
      continue;
    }
    if (count === 5) {
      rank["3등"] += 1;
      continue;
    }
    if (count === 6 && lotto.includes(bonusNumber) === -1) {
      rank["2등"] += 1;
      continue;
    }
    if (count === 6 && lotto.includes(bonusNumber) !== -1) {
      rank["1등"] += 1;
      continue;
    }
  }
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank["5등"]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank["4등"]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank["3등"]}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank["2등"]}개`
  );
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank["1등"]}개`);
};

module.exports = {
  lottoStatistics,
};

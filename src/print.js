const MissionUtils = require("@woowacourse/mission-utils");
const utils = require("./utils.js");
function lottoInfo(lottoCount, lottos) {
  MissionUtils.Console.print(lottoCount + "개를 구매했습니다.");
  lottos.map((lotto) =>
    MissionUtils.Console.print("[" + lotto.join(", ") + "]")
  );
}

function lottoResult(countEachWinningCost, purchasePrice) {
  MissionUtils.Console.print("\n당첨 통계");
  MissionUtils.Console.print("---");
  MissionUtils.Console.print(
    `3개 일치 (5,000원) - ${countEachWinningCost[0]}개`
  );
  MissionUtils.Console.print(
    `4개 일치 (50,000원) - ${countEachWinningCost[1]}개`
  );
  MissionUtils.Console.print(
    `5개 일치 (1,500,000원) - ${countEachWinningCost[2]}개`
  );
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${countEachWinningCost[3]}개`
  );
  MissionUtils.Console.print(
    `6개 일치 (2,000,000,000원) - ${countEachWinningCost[4]}개`
  );

  const revenuePercent = utils.getRevenuePrecent(
    countEachWinningCost,
    purchasePrice
  );
  MissionUtils.Console.print(`총 수익률은 ${revenuePercent}%입니다.`);
  MissionUtils.Console.close();
}

module.exports.lottoInfo = lottoInfo;
module.exports.lottoResult = lottoResult;

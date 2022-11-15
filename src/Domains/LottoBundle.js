const MissionUtils = require("@woowacourse/mission-utils");
class LottoBundle {
  createLottoBundle(piece) {
    const bundle = [];
    for (let i = 0; i < piece; i++) {
      bundle.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
    }
    const bundleString = bundle.map((x) => JSON.stringify(x));
    const bundleForPrint = bundleString.map((x) => x.replaceAll(",", ", "));
    return [bundle, bundleForPrint];
  }
}
module.exports = LottoBundle;

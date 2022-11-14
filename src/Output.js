const { Print } = require("./lib/MissionUtils.js");

const printUserPurchaseAmount = (amount) => {
  return Print(`\n${amount / 1000}개를 구매했습니다.\n`);
};

module.exports = { printUserPurchaseAmount };

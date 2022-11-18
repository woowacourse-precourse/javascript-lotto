const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const { mapKey, priceMap } = require("./constant.js");


function calProfit(map) {

  let profit = 0;

  for (const [key, value] of map) {
    if (key === mapKey.THREE) profit += value * priceMap.THREE;
    if (key === mapKey.FOUR) profit += value * priceMap.FOUR;
    if (key === mapKey.FIVE) profit += value * priceMap.FIVE;
    if (key === mapKey.FIVE_BOUNS) profit += value * priceMap.FIVE_BOUNS;
    if (key === mapKey.SIX) profit += value * priceMap.SIX;
  }

  return profit;
}


function printMap(map) {
  Console.print("\n당첨 통계\n---");
  for (const [key, value] of map) {
    Console.print(`${key} - ${value}개`);
  }
}


function printProfit(profit, input) {
  const profitRate = (profit * 100 / input).toFixed(1);
  Console.print(`총 수익률은 ${profitRate}%입니다.`);
}


module.exports = { calProfit, printMap, printProfit }
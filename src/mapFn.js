const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const { mapKey } = require("./constant.js");

function initMap(map) {
    map.set(mapKey.THREE, 0);
    map.set(mapKey.FOUR, 0);
    map.set(mapKey.FIVE, 0);
    map.set(mapKey.FIVE_BOUNS, 0);
    map.set(mapKey.SIX, 0);
}


function makeMap(map, result) {
    for (let i = 0; i < result.length; i++) {
        const [winCount, bonusCount] = result[i];
        if (winCount + bonusCount < 3) continue;
        if (winCount + bonusCount === 3) map.set(mapKey.THREE, map.get(mapKey.THREE) + 1);
        if (winCount + bonusCount === 4) map.set(mapKey.FOUR, map.get(mapKey.FOUR) + 1);
        if (winCount + bonusCount === 5) map.set(mapKey.FIVE, map.get(mapKey.FIVE) + 1);
        if (winCount + bonusCount === 6 && bonusCount === 1) map.set(mapKey.FIVE_BOUNS, map.get(mapKey.FIVE_BOUNS) + 1);
        if (winCount + bonusCount === 6 && bonusCount === 0) map.set(mapKey.SIX, map.get(mapKey.SIX) + 1);
    }
}

function printMap(map) {
    Console.print("당첨 통계\n---");
    for (const [key, value] of map) {
        Console.print(`${key} - ${value}개`);
    }
}



module.exports = { initMap, makeMap, printMap }
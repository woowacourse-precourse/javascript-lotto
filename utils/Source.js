const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;

const generateRandom = (amount) => {
    const lottos = [];
    for(let i=0; i<amount; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort(function compare(a,b){
        return a-b;
      });
      lottos.push(numbers);
    }
    return lottos;
}
module.exports = { generateRandom };
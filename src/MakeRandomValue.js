const MissionUtils = require("@woowacourse/mission-utils");

class MakeRandomValue{
    makeRandomValue(MONEY) {
        let lotteryTicket = [];
    
        for(let i=0; i<MONEY/1000; i++) {
          let temp = [];
          temp = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
          lotteryTicket.push(temp.sort((a, b) => {
            return a-b;
          }));
        }
        
        return lotteryTicket
      };
}

module.exports = MakeRandomValue
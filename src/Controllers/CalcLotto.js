const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_PRINT_MENTION, LOTTO_REWARD } = require("../constant");

const CalcLotto = {
  calcLottoResultMoney(lottoResult) {
    let resultMoney = 0;
    LOTTO_REWARD.forEach((reward, index) => {
      resultMoney += reward * Number(lottoResult[index]);
    })
    return resultMoney;
  },
      
  calcRevenuePercent(lottoRevenue, lottoTicketCount) {
    return lottoRevenue / (lottoTicketCount * 1000) * 100;
  },
      
  calcLottoResultCount(lottoResult) {
    lottoResult.forEach((count, index) => {
      Console.print(LOTTO_PRINT_MENTION.lotto_reward[index] +` ${count}개`);
    })
  },
      
  compareLottoNumber(lottoNumber, jackpotNumber) {
    let count = 0;
      
    jackpotNumber.forEach((number) => {
      if (lottoNumber.includes(number)) {
        count++;
      }
    })
    return count;
  }     
}

module.exports = CalcLotto;

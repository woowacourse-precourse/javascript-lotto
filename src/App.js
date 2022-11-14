const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor(){
    this.lottoCount = 0;
    this.lottoInfo = [];
    this.BonusNumber = '';
    this.lottoResult = [0,0,0,0,0];
  };

  printLottoRevenuePercent(lottoRevenue) {
    let investMoney = 1000 * this.lottoCount;
    let RevenuePercent = lottoRevenue / investMoney;
    Console.print(`총 수익률은 ${RevenuePercent * 100}%입니다.`)
  }

  printLottoJackpotResult() {
    let countAmount = 0;
    Console.print('당첨 통계\n---')
    this.lottoResult.forEach((count, index) => {
      switch(true) {
        case index === 0:
          Console.print(`3개 일치 (5,000원) - ${count}개`);
          countAmount += count * 5000;
          break;
        case index === 1:
          Console.print(`4개 일치 (50,000원) - ${count}개`);
          countAmount += count * 50000;
          break;
        case index === 2:
          Console.print(`5개 일치 (1,500,000원) - ${count}개`);
          countAmount += count * 1500000;
          break;
        case index === 3:
          Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
          countAmount += count * 30000000;
          break;
        case index === 4:
          Console.print(`6개 일치 (2,000,000,000원) - ${count}개`);
          countAmount += count * 2000000000;
          break;
      }
    })
    this.printLottoRevenuePercent(countAmount);
  }

  compareLottoNumber(lottoNumber, jackpotNumber) {
    let count = 0;
    Console.print(count);
    jackpotNumber.forEach((number) => {
      if (lottoNumber.includes(number)) {
        count++;
      }
    })

    return count;
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해주세요\n",(Bonus) => {
      this.BonusNumber = Bonus;
    })
  }

module.exports = App;

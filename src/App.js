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

  inputJackpotNumber() {
    Console.readLine("당첨 번호를 입력해 주세요\n",(jackpotNumber) => {
      const lottoNumber = jackpotNumber.split(',');
      this.inputBonusNumber();
      this.lottoInfo.forEach((lotto) => {
        let correctCount = this.compareLottoNumber(String(lotto).split(','), lottoNumber);
        switch(true){
          case correctCount === 3:
            this.lottoResult[0]++;
            break;
          case correctCount === 4:
            this.lottoResult[1]++;
            break;
          case correctCount === 5:
            if (lotto.includes(this.BonusNumber)) {
              this.lottoResult[3]++;
              break;
            }
            this.lottoResult[2]++;
            break;
          case correctCount === 6:
            this.lottoResult[4]++;
            break;
          default:
            break;
        }
      });
      this.printLottoJackpotResult();
    })
  }

  setRandomLottoNumber() {
    let randomLotto;

    for(let i = 0; i<this.lottoCount; i++) {
      randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoInfo.push(randomLotto);
    }
  }

  printLottoCount(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`)
  }

  printRandomLottoNumber() {
    this.lottoInfo.forEach((randomLotto) => {
      let randomLottoString = String(randomLotto).split(',').join(', ');
      Console.print(`[${randomLottoString}]`);
    })
  }

  isInputValidate(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 수를 입력해야합니다!");
    }
  }

  inputBuyLottoMoney() {
    Console.readLine("구입금액을 입력해주세요\n",(money) => {
      this.isInputValidate(money);
      this.lottoCount = Number(money) / 1000;
      this.printLottoCount(this.lottoCount);
      this.setRandomLottoNumber();
      this.printRandomLottoNumber();
      this.inputJackpotNumber();
    });
  };

  play() {
    this.inputBuyLottoMoney();
  }
}

module.exports = App;

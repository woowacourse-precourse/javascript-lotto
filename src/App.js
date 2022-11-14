const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_ERROR_MENTION, LOTTO_PRINT_MENTION, LOTTO_REWARD } = require("./constant");

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
    Console.close();
  }

  calcLottoResultMoney(lottoResult) {
    let resultMoney = 0;
    LOTTO_REWARD.forEach((reward, index) => {
      resultMoney += reward * Number(lottoResult[index]);
    })
    return resultMoney;
  }

  calcLottoResultCount(lottoResult) {
    lottoResult.forEach((count, index) => {
      Console.print(LOTTO_PRINT_MENTION.lotto_reward[index] +` ${count}개`);
    })
  }

  printLottoJackpotResult() {
    let countAmount = 0;
    Console.print(LOTTO_PRINT_MENTION.result_header);
    this.calcLottoResultCount(this.lottoResult);
    countAmount = this.calcLottoResultMoney(this.lottoResult);
    this.printLottoRevenuePercent(countAmount);
  }

  compareLottoNumber(lottoNumber, jackpotNumber) {
    let count = 0;
  
    jackpotNumber.forEach((number) => {
      if (lottoNumber.includes(number)) {
        count++;
      }
    })

    return count;
  }

  inputBonusNumber() {
    Console.readLine(LOTTO_PRINT_MENTION.input_bonus_number,(Bonus) => {
      this.BonusNumber = Bonus;
    })
  }

  inputJackpotNumber() {
    Console.readLine(LOTTO_PRINT_MENTION.input_jackpot_number,(jackpotNumber) => {
      const lottoNumber = new Lotto(jackpotNumber.trim().split(','));
      this.inputBonusNumber();
      this.lottoInfo.forEach((lotto) => {
        let correctCount = this.compareLottoNumber(String(lotto).split(','), lottoNumber.getLottoNumber());
        if (correctCount === 0) return;
        lottoNumber.calcLottoResultCount(correctCount, lotto, this.lottoResult, this.BonusNumber);
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
      Console.close();
      throw new Error(LOTTO_ERROR_MENTION.money_size_thousand);
    }
  }

  inputBuyLottoMoney() {
    Console.readLine(LOTTO_PRINT_MENTION.input_money,(money) => {
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

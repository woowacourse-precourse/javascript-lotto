const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_ERROR_MENTION, LOTTO_PRINT_MENTION, LOTTO_REWARD } = require("./constant");

function printLottoRevenuePercent(lottoRevenue, lottoCount) {
  let investMoney = 1000 * lottoCount;
  let RevenuePercent = lottoRevenue / investMoney;
  Console.print(`총 수익률은 ${RevenuePercent * 100}%입니다.`)
  Console.close();
}

function calcLottoResultMoney(lottoResult) {
  let resultMoney = 0;
  LOTTO_REWARD.forEach((reward, index) => {
    resultMoney += reward * Number(lottoResult[index]);
  })
  return resultMoney;
}

function calcLottoResultCount(lottoResult) {
  lottoResult.forEach((count, index) => {
    Console.print(LOTTO_PRINT_MENTION.lotto_reward[index] +` ${count}개`);
  })
}

function compareLottoNumber(lottoNumber, jackpotNumber) {
  let count = 0;

  jackpotNumber.forEach((number) => {
    if (lottoNumber.includes(number)) {
      count++;
    }
  })

  return count;
}

function setRandomLottoNumber(lottoInfo, lottoCount) {
  let randomLotto;

  for(let i = 0; i<lottoCount; i++) {
    randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoInfo.push(randomLotto);
  }
}

function isInputValidate(money) {
  if (money % 1000 !== 0) {
    Console.close();
    throw new Error(LOTTO_ERROR_MENTION.money_size_thousand);
  }
}

class App {
  constructor(){
    this.lottoCount = 0;
    this.lottoInfo = [];
    this.BonusNumber = '';
    this.lottoResult = [0,0,0,0,0];
  };

  printLottoJackpotResult() {
    let countAmount = 0;
    Console.print(LOTTO_PRINT_MENTION.result_header);
    calcLottoResultCount(this.lottoResult);
    countAmount = calcLottoResultMoney(this.lottoResult);
    printLottoRevenuePercent(countAmount, this.lottoCount);
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
        let correctCount = compareLottoNumber(String(lotto).split(','), lottoNumber.getLottoNumber());
        if (correctCount === 0) return;
        lottoNumber.calcLottoResultCount(correctCount, lotto, this.lottoResult, this.BonusNumber);
      });
      this.printLottoJackpotResult();
    })
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

  inputBuyLottoMoney() {
    Console.readLine(LOTTO_PRINT_MENTION.input_money,(money) => {
      isInputValidate(money);
      this.lottoCount = Number(money) / 1000;
      this.printLottoCount(this.lottoCount);
    });
  };

  play() {
    this.inputBuyLottoMoney();
    setRandomLottoNumber(this.lottoInfo, this.lottoCount);
    this.printRandomLottoNumber();
    this.inputJackpotNumber();
  }
}

module.exports = App;

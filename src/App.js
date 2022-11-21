const { Console, Random } = require("@woowacourse/mission-utils");
const { LOTTO_PRINT_MENTION } = require("./constant");
const { 
  calcLottoResultCount,
  calcRevenuePercent,
  calcLottoResultMoney,
  compareLottoNumber,
} = require('./Controllers/CalcLotto');
const {
  isValidateBonusNumber,
  isValidateInputMoney,
} = require('./Controllers/Validate');
const Lotto = require("./Lotto"); 

function printLottoRevenuePercent(lottoRevenue, lottoTicketCount) {
  let RevenuePercent= calcRevenuePercent(lottoRevenue, lottoTicketCount);
  Console.print(`총 수익률은 ${(RevenuePercent).toLocaleString('en')}%입니다.`)
  Console.close();
}

function setRandomLottoNumber(lottoInfo, lottoCount) {
  let randomLotto;

  for(let i = 0; i<lottoCount; i++) {
    randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoInfo.push(randomLotto);
  }
}

class App {
  constructor(){
    this.lottoTicketCount = 0;
    this.lottoInfo = [];
    this.BonusNumber = '';
    this.lottoResult = [0,0,0,0,0];
  };

  printLottoJackpotResult() {
    let countAmount = 0;
    Console.print(LOTTO_PRINT_MENTION.result_header);
    calcLottoResultCount(this.lottoResult);
    countAmount = calcLottoResultMoney(this.lottoResult);
    printLottoRevenuePercent(countAmount, this.lottoTicketCount);
  }

  printLottoTicketCount(lottoTicketCount) {
    Console.print(`${lottoTicketCount}개를 구매했습니다.`)
  }

  printRandomLottoNumber() {
    this.lottoInfo.forEach((randomLottoNumber) => {
      let randomLottoNumberString = String(randomLottoNumber).split(',').join(', ');
      Console.print(`[${randomLottoNumberString}]`);
    })
  }

  inputBonusNumber() {
    Console.readLine(LOTTO_PRINT_MENTION.input_bonus_number,(Bonus) => {
      isValidateBonusNumber(Bonus);
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
    })
  }

  inputBuyLottoMoney() {
    Console.readLine(LOTTO_PRINT_MENTION.input_money,(money) => {
      isValidateInputMoney(money);
      this.lottoTicketCount = Number(money) / 1000;
      this.printLottoTicketCount(this.lottoTicketCount);
    });
  };

  play() {
    this.inputBuyLottoMoney();
    setRandomLottoNumber(this.lottoInfo, this.lottoTicketCount);
    this.printRandomLottoNumber();
    this.inputJackpotNumber();
    this.printLottoJackpotResult();
  }
}

module.exports = App;

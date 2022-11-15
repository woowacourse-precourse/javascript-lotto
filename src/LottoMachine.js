const { Console, Random } = require('@woowacourse/mission-utils');
const Message = require('./Message');
const Validate = require('./Validate');
const LottoGenerator = require('./LottoGenerator');

class LottoMachine {
  constructor() {
    this.lottos = [];
    this.inputMoney = 0;
    this.lottosCount = 0;
    this.prize = [];
    this.bonus = 0;
  }

  startGame() {
    this.setMoney();
  }

  setMoney() {
    Console.readLine(Message.TEXT.INPUT_MONEY, (input) => {
      const money = Number(input);
      Validate.validateInput(money);

      this.setInput(money);
      this.printLottos();
      this.setLotto();
    });
  }

  setInput(money) {
    this.inputMoney = money;
    this.lottosCount = money / Message.LOTTO.PRICE;
    this.lottos = LottoGenerator.purchase(this.lottosCount);
  }

  printLottos() {
    Console.print(Message.TEXT.BUY_COUNT(this.lottosCount));
    this.lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  setLotto() {
    this.inputLotto();
    this.inputBonus();
  }

  inputLotto() {
    Console.readLine(Message.TEXT.LOTTO_NUMBER, (numbers) => {
      const lottoNumArr = numbers.split(', ').map(Number);
      Validate.validateLottoNumber(lottoNumArr);
      this.prize = lottoNumArr;
      this.inputBonus();
    });
  }

  inputBonus() {
    Console.readLine(Message.TEXT.BONUS_NUMBER, (number) => {
      const bonusNumber = Number(number);
      Validate.validateNumber(bonusNumber);
      this.bonus = bonusNumber;
      this.calculate();
      Console.close();
    });
  }

  calculate() {
    const result = this.getResult();
  }

  getResult() {
    const lottoResult = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    };

    this.lottos.forEach((lotto) => {
      this.compareLotto(lotto, lottoResult);
    });
    this.printResult(lottoResult);
  }

  compareLotto(lotto, lottoResult) {
    let cnt = 0;
    for (let i = 0; i < Message.LOTTO.COUNT; i += 1) {
      if (lotto.includes(this.prize[i])) cnt += 1;
    }

    return this.addResult(cnt, lottoResult, lotto);
  }

  addResult(cnt, lottoResult, lotto) {
    if (cnt === 6) {
      lottoResult[cnt + 1] += 1;
    } else if (lotto.includes(Number(this.bonus)) && cnt === 5) {
      lottoResult[cnt + 1] += 1;
    } else if (cnt >= 3) {
      lottoResult[cnt] += 1;
    }
    return lottoResult;
  }

  printResult(lottoResult) {
    Console.print(Message.TEXT.RESULT);

    Message.RESULT_TEXT.forEach((text, index) => {
      Console.print(`${text} ${lottoResult[index]}개`);
    });

    let average = this.getAverage(lottoResult);

    Console.print(`총 수익률은 ${average}%입니다.`);
  }

  getAverage(lottoResult) {
    let sum = 0;

    for (let i = 3; i <= 7; i += 1) {
      sum += Message.PRIZE[i] * lottoResult[i];
    }

    return ((sum / this.inputMoney) * 100).toFixed(1);
  }
}

module.exports = LottoMachine;

const test = new LottoMachine();
test.startGame();

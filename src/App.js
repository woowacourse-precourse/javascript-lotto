const { Console } = require('@woowacourse/mission-utils');
const {
  MESSAGE,
  EXCEPTION,
  RANK,
} = require('./constant/constant');
const Lotto = require('./Lotto');
const computeReturn = require('./util/compute/computeReturn');
const countPurchasedTicket = require('./util/count/countPurchasedTicket');
const computeReturnRate = require('./util/compute/computeReturnRate');
const examineCountLotto = require('./util/examine/examineCountLotto');
const calculateRandomNumber = require('./util/calculate/calculateRandomNumber');
const examineNumberCheck = require('./util/examine/examineNumberCheck');
const examineAmount = require('./util/examine/examineAmount');
const checkException = require('./util/check/checkException');

class App {
  #startMoney;
  #earnedMoney;
  #LotteryNum;
  #LottoList;
  #LottoPrintList;
  #winNumber;
  #bonusNumber;
  #LottoRank;
  #returnRate;

  constructor() {
    this.#myLotteryRank = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  play() {
    return this.buy();
  }

  buy() {
    Console.readLine(MESSAGE.INSERT_COST, (input) => {
      if (!examineNumberCheck(input))
        checkException(EXCEPTION.INPUT_NOT_NUMBER);
      if (!examineAmount(Number(input)))
        checkException(EXCEPTION.MONEY_UNIT_INCORRECT);
      this.#startMoney = Number(input);
      this.#LotteryNum = countPurchasedTicket(this.#startMoney);
      this.#LottoList = Array(this.#LotteryNum).fill(0); // 처음부터 Array(Object) 모양 고정시켜 V8 Map Space에 불필요한 hiddenClass 생성을 막기 위함 (push 사용 x)
      this.#myLotteryPrintList = Array(this.#LotteryNum).fill(0); // 위와 동일한 이유로 생성
      this.breakLine();
      return this.makeLotteries();
    });
  }

  makeLotteries() {
    this.#LottoList = this.#LottoList.map((blankObject) => {
      const myLottery = calculateRandomNumber();
      blankObject = new Lotto(myLottery); // 내 로또 리스트에 로또 객체들 생성 후 할당.
      return blankObject;
    });
    return this.myLottoResult();
  }

  myLottoResult() {
    Console.print(MESSAGE.PURCHASE_AMOUNT(this.#LotteryNum));
    this.#LottoList.forEach((lottery, i) => {
      this.#LottoPrintList[i] = lottery.returnMyLottery(); // 매번 Console.print()를 하게되면 속도가 매우 느려질 수 있기에, 배열에 로또 번호들을 저장해두고 한번에 Print()
    });
    Console.print(this.#LottoPrintList.join('\n')); // 내 로또 리스트 출력
    this.breakLine();
    return this.winNumber();
  }

  winNumber() {
    Console.readLine(MESSAGE.INSERT_WIN_NUMBER, (input) => {
      const answerLottery = input.split(',').map((ripInput) => {
        ripInput = Number(separateInput.trim());
        return ripInput;
      });

      const validCheck = examineCountLotto(answerLottery);
      if (validCheck !== true) return checkException(validCheck);

      this.#winNumber = answerLottery;
      this.breakLine();
      return this.makeBonusNumber();
    });
  }

  makeBonusNumber() {
    Console.readLine(MESSAGE.INSERT_BONUS_NUMBER, (input) => {
      const inputBonusNumber = Number(input);
      if (this.#winNumber.includes(inputBonusNumber))
        return checkException(EXCEPTION.INPUT_OVERLAPPED);

      this.#bonusNumber = inputBonusNumber;
      this.breakLine();
      return this.calculateResult();
    });
  }

  calculateResult() {
    this.#LottoList.forEach((lottery) => {
      const result = lottery.returnmyLotteryRank(
        this.#winNumber,
        this.#bonusNumber
      );
      this.#LottoRank[result] += 1;
    });
    return this.computeReturnRate();
  }

  computeReturnRate() {
    this.#earnedMoney = computeReturn(this.#LottoRank);
    this.#returnRate = computeReturnRate(this.#startMoney, this.#earnedMoney);
    return this.printResult();
  }

  printResult() {
    Console.print(MESSAGE.GET_RANK_STATISTICS);
    for (let rank = 5; rank >= 1; rank -= 1) {
      const myRankData = this.#LottoRank[rank];
      Console.print(RANK[rank](myRankData));
    }
    Console.print(RANK.PROFIT_RATE(this.#returnRate));
    return this.endGame();
  }

  endGame() {
    return Console.close();
  }

  breakLine() {
    return Console.print('');
  }
}

const app = new App();
app.play();

module.exports = App;

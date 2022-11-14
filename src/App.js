// run `node index.js` in the terminal
//npm i @woowacourse/mission-utils

const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
import { exceptLottoPrice, exceptBonusNumber } from './Exception';

const winningPrice = [0, 2000000000, 30000000, 1500000, 50000, 5000];

class App {
  #lotteryTicketNumber; //로또 수량
  #lotteryTickets = [[]];
  #winningNumbers = [];
  #bonusNumber = 0;
  #winningCount = [];

  play() {
    this.#inputLottoPrice();
  }

  #inputLottoPrice() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (lottoPrice) => {
      exceptLottoPrice(Number(lottoPrice));
      this.#lotteryTicketNumber = parseInt(Number(lottoPrice) / 1000);

      this.#lotteryTickets = this.#makeLotteryTickets(
        this.#lotteryTicketNumber
      );

      this.#inputWinningNumbers();
    });
  }

  #makeLotteryTickets(lotteryTicketNumber) {
    let lotteryTickets = new Array(lotteryTicketNumber);
    lotteryTickets.map((lotteryTicket) => {
      lotteryTicket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotteryTicket.sort();
    });

    this.#printLotteryTickets(lotteryTicketNumber, lotteryTickets);
    return lotteryTickets;
  }

  #printLotteryTickets(lotteryTicketNumber, lotteryTickets) {
    MissionUtils.Console.print(`${lotteryTicketNumber}개를 구매했습니다.`);
    lotteryTickets.map((lotteryTicket) => {
      MissionUtils.Console.print(`${lotteryTicket}`);
    });
  }

  #inputWinningNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요', (winNum) => {
      //예외사항
      const lotto = new Lotto(winNum.split(','));
      this.#winningNumbers = lotto.getLottoNumber();

      this.#inputBonusNumber();
    });
  }

  #inputBonusNumber() {
    MissionUtils.Console.readLine(
      '보너스 번호를 입력해 주세요.',
      (bonusNum) => {
        exceptBonusNumber(this.#winningNumbers, bonusNum);
        this.#bonusNumber = bonusNum;

        this.#winningCount = this.#makeWinningCount(
          this.#lotteryTicketNumber
        );

        this.#printWinningCounts(this.#winningCount)
        this.#printYield(this.#winningCount, this.#lotteryTicketNumber)

        //프로그램 종료
        MissionUtils.Console.close();
      }
    );
  }

  #printWinningCounts(winningCount){
    MissionUtils.Console.print('당첨 통계')
    MissionUtils.Console.print('---')
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningCount[5]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningCount[4]}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningCount[3]}개`)
    MissionUtils.Console.print(`5개, 보너스 볼 일치 (30,000,000원) - ${winningCount[2]}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningCount[1]}개`)
  }

  #printYield(winningCount, lotteryTicketNumber){
    let amount = 0;
    winningCount.map((count,countIdx)=>{
      amount += count * winningPrice[countIdx]
    })
    let yield = amount / lotteryTicketNumber * 10

    MissionUtils.Console.print(`총 수익률은 ${yield}입니다.`)

  }

  #makeWinningCount(lotteryTicketNumber) {
    let winningHistorys = new Array(lotteryTicketNumber);
    winningHistorys.map((winningHistory, historysIdx) => {
      winningHistory = this.#confirmLottery(
        this.#lotteryTickets[historysIdx],
        this.#winningNumbers,
        this.#bonusNumber
      );
    });

    return this.#convertWinningCount(winningHistorys)
  }

  //각각 로또마다 몇등을 했는지에서 몇 등을 몇 번 했는지로 변환한다
  #convertWinningCount(winningHistorys){
    let winningCount = new Array(6).fill(0)
    winningCount.map((count,countIdx)=>{
      winningHistorys.map((winningHistory)=>{
        if(countIdx===winningHistory){count++}
      })
    })
  }

  #confirmLottery(lotteryTicket = [], winningNumbers = [], bonusNumber = 0) {
    let winning = []
    let countSameNumber = 0;
    let countBonus = 0;

    lotteryTicket.map((lottoNumber) => {
      if (winningNumbers.includes(lottoNumber) === true) {
        countSameNumber++;
      }
    });

    if (countSameNumber === 5) {
      if (lotteryTicket.includes(bonusNumber) === true) {
        countBonus++;
      }
    }

    winning = this.#convertToWinningHistory(countSameNumber, countBonus);
  }

  //각각 몇등 했는지로 변환
  #convertToWinningHistory(countSameNumber, countBonus) {
    if (countBonus === 1) {
      return 2;
    }

    switch (countSameNumber) {
      case 6:
        return 1;
      case 5:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }

  #convertToWinningHistory(winning){

  }
  
}

const app = new App();
app.play();

module.exports = App;

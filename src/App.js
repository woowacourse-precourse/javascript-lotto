// run `node index.js` in the terminal
//npm i @woowacourse/mission-utils

const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
import { exceptLottoPrice, exceptBonusNumber } from './Exception';

class App {
  #lotteryTicketNumber; //로또 수량
  #lotteryTickets

  play() {
    this.#inputLottoPrice();
  }

  #inputLottoPrice() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (lottoPrice) => {
      exceptLottoPrice(Number(lottoPrice));
      this.#lotteryTicketNumber = Number(lottoPrice) / 1000;

      this.#makeLotteryTickets(this.#lotteryTicketNumber, this.#lotteryTickets);
    });
  }

  #makeLotteryTickets(lotteryTicketNumber, lotteryTickets) {
    lotteryTickets = new Array(lotteryTicketNumber);
    lotteryTickets.map((lotteryTicket) => {
      lotteryTicket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotteryTicket.sort();
    });

    this.#printLotteryTickets(lotteryTicketNumber, lotteryTickets)
  }

  #printLotteryTickets(lotteryTicketNumber, lotteryTickets=[]){
    MissionUtils.Console.print(`${lotteryTicketNumber}개를 구매했습니다.`)
    lotteryTickets.map((lotteryTicket)=>{
      MissionUtils.Console.print(`${lotteryTicket}`)
    })
  }

  #inputWinningNumbers(){

  }

  #inputBonusNumbers(){

  }

  
}

const app = new App();
app.play();

module.exports = App;
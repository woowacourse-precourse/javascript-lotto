// run `node index.js` in the terminal
//npm i @woowacourse/mission-utils

const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');

const WINNING_PRICE = [0, 2000000000, 30000000, 1500000, 50000, 5000];

const START_RANDOM = 1
const END_RANDOM = 45
const RANDOM_NUMBER = 6

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
    MissionUtils.Console.readLine(
      '구입금액을 입력해 주세요.\n',
      (lottoPrice) => {
        new Exception().exceptLottoPrice(Number(lottoPrice));
        this.#lotteryTicketNumber = parseInt(Number(lottoPrice) / 1000);

        this.#lotteryTickets = this.#makeLotteryTickets(
          this.#lotteryTicketNumber
        );

        this.#inputWinningNumbers();
      }
    );
  }

  #makeLotteryTickets(lotteryTicketNumber) {
    let lotteryTickets = new Array(lotteryTicketNumber).fill([]);
    lotteryTickets.map((lotteryTicket, ticketsIdx) => {
      lotteryTickets[ticketsIdx] = MissionUtils.Random.pickUniqueNumbersInRange(
        START_RANDOM,END_RANDOM,RANDOM_NUMBER
        );

      lotteryTickets[ticketsIdx].sort((a, b) => {
        if (a < b) {return -1;}
        if (a > b) {return 1;}
        return 0;
      });
    });

    this.#printLotteryTickets(lotteryTicketNumber, lotteryTickets);
    return lotteryTickets;
  }

  //test에서 array를 string형으로 요구하기에 변환 함수를 만듦
  #convertArrayToString(array = []) {
    let str = array.join(', ');
    return '[' + str + ']';
  }

  #printLotteryTickets(lotteryTicketNumber, lotteryTickets) {
    MissionUtils.Console.print(`${lotteryTicketNumber}개를 구매했습니다.`);

    lotteryTickets.map((lotteryTicket) => {
      MissionUtils.Console.print(
        `${this.#convertArrayToString(lotteryTicket)}`
      );
    });
  }

  #arrayStrToNumber(array = []) {
    array.map((value, idx) => {
      array[idx] = Number(value);
    });
    return array;
  }

  #inputWinningNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요\n', (winNum) => {
      //예외사항 통과
      const lotto = new Lotto(this.#arrayStrToNumber(winNum.split(',')));
      this.#winningNumbers = lotto.getLottoNumber();

      this.#inputBonusNumber();
    });
  }

  #inputBonusNumber() {
    MissionUtils.Console.readLine(
      '보너스 번호를 입력해 주세요.\n',
      (bonusNum) => {
        new Exception().exceptBonusNumber(this.#winningNumbers, bonusNum);
        this.#bonusNumber = Number(bonusNum);

        this.#winningCount = this.#makeWinningCount(this.#lotteryTicketNumber);

        this.#printWinningCounts(this.#winningCount);
        this.#printYield(this.#winningCount, this.#lotteryTicketNumber);

        //프로그램 종료
        MissionUtils.Console.close();
      }
    );
  }

  #printWinningCounts(winningCount) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningCount[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningCount[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningCount[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningCount[1]}개`);
  }

  #printYield(winningCount, lotteryTicketNumber) {
    let amount = 0;
    winningCount.map((count, countIdx) => {
      amount += count * WINNING_PRICE[countIdx];
    });

    let yields = Number((amount / lotteryTicketNumber / 10).toFixed(1));

    MissionUtils.Console.print(`총 수익률은 ${yields}%입니다.`);
  }

  #makeWinningCount(lotteryTicketNumber) {
    let winningHistorys = new Array(lotteryTicketNumber).fill(0);

    winningHistorys.map((winningHistory, historysIdx) => {
      winningHistorys[historysIdx] = this.#confirmLottery(
        this.#lotteryTickets[historysIdx],
        this.#winningNumbers,
        this.#bonusNumber
      );
    });

    return this.#convertWinningCount(winningHistorys);
  }

  //각각 로또마다 몇등을 했는지에서 몇 등을 몇 번 했는지로 변환한다
  #convertWinningCount(winningHistorys) {
    let winningCount = new Array(6).fill(0);

    winningCount.map((count, countIdx) => {
      winningHistorys.map((winningHistory) => {
        if (countIdx === winningHistory) {
          winningCount[countIdx]++;
        }
      });
    });
    return winningCount;
  }

  #confirmLottery(lotteryTicket = [], winningNumbers = [], bonusNumber = 0) {
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

    return this.#convertToWinningHistory(countSameNumber, countBonus);
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
}


module.exports = App;

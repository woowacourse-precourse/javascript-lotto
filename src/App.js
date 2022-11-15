const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");

const prizeInfo = {
  1: 200000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000
};

class App {
  play() {
    const myLottos = this.buyLotto();
    const winningLotto = this.getWinningLotto();
    this.calLottoPrize(myLottos, winningLotto);
    MissionUtils.Console.close();
  }

  buyLotto() {
    let money = 0;

    MissionUtils.Console.readLine("구매금액을 입력해주세요. \n >",
      answer => money = Number(answer)
    );
    this.isValidMoney(money);
    const lottoCount = parseInt(money / 1000);
    const myLottos = this.generateLottoNumber(lottoCount);

    return myLottos;
  }

  isValidMoney(money) {
    if (money % 1000 !== 0 ) {
      throw (`[ERROR] 천원 단위로 금액을 지불해주세요.`);
    }
    if (Number.isNaN(money)) {
      throw (`[ERROR] 입력 금액이 숫자형태가 아닙니다.`);
    }
    if (money < 1000) {
      throw `[ERROR] 로또 한장의 가격은 1000원입니다. 입력한 금액: ${money}`;
    }
    if (money > 1000000) {
      throw `[ERROR] 한 번에 최대로 구입할 수 있는 금액은 100만원 입니다. 입력한 금액: ${money}`;
    }
  }

  generateLottoNumber(lottoCount) {
    const myLottos = [];

    while (myLottos.length < lottoCount) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(lottoNumbers, false);
      myLottos.push(lotto);
    }
    this.showMyLotto(myLottos);

    return myLottos;
  }

  showMyLotto(myLotto) {
    MissionUtils.Console.print(`${myLotto.length}개를 구매했습니다.`);
    myLotto.forEach(lotto => lotto.printLottoNumbers());
  }

  getWinningLotto() {
    let winningNumbers = [];
    let bonusNumber = undefined;

    MissionUtils.Console.readLine("당첨 번호를 입력해주세요. \n >",
      answer => winningNumbers = answer.split(",")
    );
    MissionUtils.Console.readLine("보너스 번호를 입력해주세요. \n >", 
      answer => bonusNumber = Number(answer)
    );
    
    winningNumbers = winningNumbers.map((element) => Number(element));
    const winningLotto = new Lotto(winningNumbers);
    winningLotto.addBonusNumber(bonusNumber);

    return winningLotto;
  }

  calLottoPrize(myLottos, winningLotto) {
    const winningInfo = {};
    const principal = myLottos.length * 1000;
    const winningNums = winningLotto.getNumbers();
    let totalPrize = 0;

    for (let rank = 0; rank <= 5; rank++) {
      winningInfo[rank] = 0;
    }

    myLottos.forEach((lotto) => {
      const rank = lotto.getRankFromLotto([...winningNums]);
      winningInfo[rank] += 1;
      if (prizeInfo[rank] !== undefined) {
        totalPrize += prizeInfo[rank];
      }
    });

    this.showPrizeResult(winningInfo, totalPrize, principal);
  }

  showPrizeResult(winningInfo, totalPrize, principal) {
    const profit = totalPrize / principal;

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningInfo[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningInfo[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningInfo[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningInfo[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningInfo[1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${Math.round(profit * 1000) / 10}%입니다.`);
  }
}

module.exports = App;
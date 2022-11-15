const { Console } = require('@woowacourse/mission-utils');
const checkPriceValidation = require('./checkValid/checkPriceValidation');
const { LottoBuilder } = require('./Lotto');
const checkWinningValidation = require('./checkValid/checkWinningValidation');
const checkBonusValidation = require('./checkValid/checkBonusValidation');

class App {
  constructor() {
    this.LottoBuilder = new LottoBuilder();
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print('구입금액을 입력해 주세요.');
    this.readLine('', input => {
      if (checkPriceValidation(input)) {
        const lottoList = this.LottoBuilder.createLottoList(input);
        this.showLottoList(lottoList);
        this.setWinningNumber();
      }
      // this.close();
    });
  }

  setWinningNumber() {
    this.print('당첨 번호를 입력해 주세요.');
    this.readLine('', input => {
      if (checkWinningValidation(input)) {
        this.LottoBuilder.WinningNumber = input.split(',');
        this.setBonusNumber();
      }
    });
  }

  setBonusNumber() {
    this.print('보너스 번호를 입력해 주세요.');
    this.readLine('', input => {
      if (checkBonusValidation(input, this.LottoBuilder.WinningNumber)) {
        this.LottoBuilder.bonusNumber = input;
        this.setLotto();
        this.close();
      }
    });
  }

  setLotto() {
    const lotto = this.LottoBuilder.build();
    lotto.progress();
    this.setOutputStats(lotto.stats, lotto.yield);
  }

  setOutputStats(lottoRanks, lottoYield) {
    this.print('당첨통계');
    this.print('---');
    this.showRankList(lottoRanks);
    this.showYield(lottoYield);
  }

  showRankList(lottoRanks) {
    this.print(`3개 일치 (5,000원) - ${lottoRanks[4]}개`);
    this.print(`4개 일치 (50,000원) - ${lottoRanks[3]}개`);
    this.print(`5개 일치 (1,500,000원) - ${lottoRanks[2]}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanks[1]}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${lottoRanks[0]}개`);
  }

  showYield(lottoYield) {
    this.print(`총 수익률은 ${lottoYield}%입니다.`);
  }

  showLottoList(lists) {
    this.print(`${lists.length}개를 구매했습니다.`);
    lists.forEach(list => {
      this.print(`[${list.join(', ')}]`);
    });
  }

  readLine(message, callback) {
    return Console.readLine(message, callback);
  }

  print(message) {
    return Console.print(message);
  }

  close() {
    return Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;

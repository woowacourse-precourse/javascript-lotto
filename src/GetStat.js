const { Console } = require("@woowacourse/mission-utils");

class GetStat {
  constructor(lottoInfo) {
    this.putLottoArrayIntoLottoInfo(lottoInfo);
    this.lottosWinningBonus(lottoInfo);
    this.printWinningHistory(lottoInfo);
  }

  putLottoArrayIntoLottoInfo(lottoInfo) {
    Console.print("\n당첨 통계\n---")
    lottoInfo.lottoArray = lottoInfo.buyLotto.getLottoArray();
  }

  lottosWinningBonus(lottoInfo) {
    for (let i = 0; i < lottoInfo['numbersOfLotto']; i++) {
      this.initializeValue(lottoInfo);
      this.countCorrectNumbers(lottoInfo, i);
      this.isSecondPrizeWin(lottoInfo, i);
      this.countWinning(lottoInfo);
    }
  }

  initializeValue(lottoInfo) {
    lottoInfo.numberOfCorrectNumbers = 0;
    lottoInfo.isIncludeBonusNumber = false;
  }

  countCorrectNumbers(lottoInfo, i) {
    lottoInfo['winningNumbers'].forEach((number) => {
      if (lottoInfo['lottoArray'][i].includes(number)) {
        lottoInfo.numberOfCorrectNumbers += 1;
      }
    });
  }

  isSecondPrizeWin(lottoInfo, i) {
    if (lottoInfo.numberOfCorrectNumbers === 5 && lottoInfo['lottoArray'][i].includes(lottoInfo.bonusNumber)) {
      lottoInfo.isIncludeBonusNumber = true;
    }
  }

  countWinning(lottoInfo) {
    if (lottoInfo.numberOfCorrectNumbers === 3) {
      lottoInfo['rank5'] += 1;
    }
    else if (lottoInfo.numberOfCorrectNumbers === 4) {
      lottoInfo['rank4'] += 1;
    }
    else if (lottoInfo.numberOfCorrectNumbers === 5 && lottoInfo.isIncludeBonusNumber === true) {
      lottoInfo['rank2'] += 1;
    }
    else if (lottoInfo.numberOfCorrectNumbers === 5) {
      lottoInfo['rank3'] += 1;
    }
    else if (lottoInfo.numberOfCorrectNumbers === 6) {
      lottoInfo['rank1'] += 1;
    }
  }

  printWinningHistory(lottoInfo) {
    Console.print(`3개 일치 (5,000원) - ${lottoInfo['rank5']}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoInfo['rank4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoInfo['rank3']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoInfo['rank2']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoInfo['rank1']}개`);

    this.printRate(lottoInfo);
  }

  printRate(lottoInfo) {
    const profit =
      lottoInfo['rank5'] * 5000 +
      lottoInfo['rank4'] * 50000 +
      lottoInfo['rank3'] * 1500000 +
      lottoInfo['rank2'] * 30000000 +
      lottoInfo['rank1'] * 2000000000;
    const rate = (lottoInfo.numbersOfLotto === 0) ? 0 : ((profit / (lottoInfo.numbersOfLotto * 1000)) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

module.exports = GetStat;
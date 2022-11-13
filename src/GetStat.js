const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGES, PRIZE_REWARD, LOTTO_INFO_VALUES, INITIALIZE_VALUES } = require("./Constant");

class GetStat {
  constructor(lottoInfo) {
    this.putLottoArrayIntoLottoInfo(lottoInfo);
    this.lottosWinningBonus(lottoInfo);
    this.printWinningHistory(lottoInfo);
  }

  putLottoArrayIntoLottoInfo(lottoInfo) {
    Console.print(OUTPUT_MESSAGES.WINNING_STAT);
    lottoInfo.lottoArray = lottoInfo.buyLotto.getLottoArray();
  }

  lottosWinningBonus(lottoInfo) {
    for (let i = 0; i < lottoInfo['numbersOfLotto']; i++) {
      this.initializeLottoInfoProperty(lottoInfo);
      this.countCorrectNumbers(lottoInfo, i);
      this.isSecondPrizeWin(lottoInfo, i);
      this.countWinning(lottoInfo);
    }
  }

  initializeLottoInfoProperty(lottoInfo) {
    lottoInfo.numberOfCorrectNumbers = INITIALIZE_VALUES.ZERO;
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
      lottoInfo.numberOfCorrectNumbers += 2;
    }
  }

  countWinning(lottoInfo) {
    const correctNumberCheck = {
      3: 'rank5',
      4: 'rank4',
      5: 'rank3',
      6: 'rank1',
      7: 'rank2',
    }
    lottoInfo[correctNumberCheck[lottoInfo.numberOfCorrectNumbers]] += 1;
  }

  printWinningHistory(lottoInfo) {
    Console.print(`${OUTPUT_MESSAGES.PRIZE_5} - ${lottoInfo['rank5']}개`);
    Console.print(`${OUTPUT_MESSAGES.PRIZE_4} - ${lottoInfo['rank4']}개`);
    Console.print(`${OUTPUT_MESSAGES.PRIZE_3} - ${lottoInfo['rank3']}개`);
    Console.print(`${OUTPUT_MESSAGES.PRIZE_2} - ${lottoInfo['rank2']}개`);
    Console.print(`${OUTPUT_MESSAGES.PRIZE_1} - ${lottoInfo['rank1']}개`);

    this.printRate(lottoInfo);
  }

  printRate(lottoInfo) {
    const profit =
      lottoInfo['rank5'] * PRIZE_REWARD.REWARD_PRIZE_5 +
      lottoInfo['rank4'] * PRIZE_REWARD.REWARD_PRIZE_4 +
      lottoInfo['rank3'] * PRIZE_REWARD.REWARD_PRIZE_3 +
      lottoInfo['rank2'] * PRIZE_REWARD.REWARD_PRIZE_2 +
      lottoInfo['rank1'] * PRIZE_REWARD.REWARD_PRIZE_1;
    const rate = (lottoInfo.numbersOfLotto === 0) ?
      0 : ((profit / (lottoInfo.numbersOfLotto * LOTTO_INFO_VALUES.LOTTO_COST)) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

module.exports = GetStat;
const MissionUtils = require("@woowacourse/mission-utils");
const UserError = require("./UserError");
const Judgement = require("./Judgement");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const userError = new UserError();
    userError.includingCharactersError(numbers);
    userError.numbersFormError(numbers);
    userError.validateWinningNumbers(numbers);
    userError.validateNumberRange(numbers);
    userError.validateOverlapNumber(numbers);
  }

  validateBonus(bonus) {
    const userError = new UserError();
    userError.validateBonusNumber(this.#numbers, bonus);
  }

  judgement(lotto, winning, bonus, lottoCount) {
    const judgement = new Judgement();
    const lottoArr = judgement.compare(lotto, winning);
    const winningResult = judgement.countLotto(lottoArr);
    // 당첨 번호 하나도 없는 경우
    if (winningResult.length === 0) {
      const result = judgement.createWinningStatistics(0, 0);
      const ror = judgement.rateOfReturn(result, lottoCount);
      result.ror = ror;
      return result;
    }
    if (winningResult.includes(5)) {
      const fiveNumIdx = judgement.findIndex(winningResult);
      const bonusResult = judgement.bonusCompare(lotto, fiveNumIdx, bonus);
      const result = judgement.createWinningStatistics(
        bonusResult,
        winningResult
      );
      const ror = judgement.rateOfReturn(result, lottoCount);
      result.ror = ror;
      return result;
    }
    const result = judgement.createWinningStatistics(0, winningResult);
    const ror = judgement.rateOfReturn(result, lottoCount);
    result.ror = ror;
    return result;
  }

  printResult(result) {
    const winningStatistics = [
      `당첨 통계`,
      `---`,
      `3개 일치 (5,000원) - ${result.three[1]}개`,
      `4개 일치 (50,000원) - ${result.four[1]}개`,
      `5개 일치 (1,500,000원) - ${result.five[1]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.fiveBonus[1]}개`,
      `6개 일치 (2,000,000,000원) - ${result.six[1]}개`,
      `총 수익률은 ${result.ror}%입니다.`
    ];
    return winningStatistics;
  }
}

module.exports = Lotto;

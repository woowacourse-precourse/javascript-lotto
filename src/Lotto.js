const { EXCEPTION } = require('./constant/constant');
const countNumber = require('./util/count/countNumber');
const examineBonusNumber = require('./util/examine/examineBonusNumber');
const examineCountLotto = require('./util/examine/examineCountLotto');
const calculateTicketRank = require('./util/calculate/calculateTicketRank');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const validCheck = examineCountLotto(numbers);
    if (validCheck !== true) {
      throw new Error(EXCEPTION[validCheck]);
    }
  }

  returnLotto() {
    return `[${String(this.#numbers).split(',').join(', ')}]`;
  }

  returnLottoRank(answer, bonusNum) {
    const basicResult = countNumber(this.#numbers, answer);
    const bonusResult = examineBonusNumber(bonusNum, answer);
    const result = calculateTicketRank(basicResult, bonusResult);

    return result;
  }
}

module.exports = Lotto;

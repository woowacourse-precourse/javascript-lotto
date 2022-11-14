const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map((num) => parseInt(num, 10));
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach(this.checkNumberValidity);
    const UNIQUE_NUMBERS = new Set(numbers);
    if (UNIQUE_NUMBERS.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }

  checkNumberValidity(num) {
    const VALID_NUMBER_REGEX = /^[\d]+$/;
    const LOWER_BOUND = 1;
    const UPPER_BOUND = 45;
    const VALID_BOUND = +num >= LOWER_BOUND && +num <= UPPER_BOUND;
    if (!VALID_NUMBER_REGEX.test(num) || !VALID_BOUND) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
    }
  }

  setBounusNumber(bonus) {
    this.checkBonusNumberValidity(bonus);
    this.#numbers.push(+bonus);
  }

  checkBonusNumberValidity(num) {
    this.checkNumberValidity(num);
    if (this.#numbers.includes(+num)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복되면 안됩니다.');
    }
  }

  printHitStatistics(purchasedLottoNumbers) {
    const HIT_STASTICS = '\n당첨 통계\n---';
    const STATISTICS_TEMPLATE = [
      '3개 일치 (5,000원)',
      '4개 일치 (50,000원)',
      '5개 일치 (1,500,000원)',
      '5개 일치, 보너스 볼 일치 (30,000,000원)',
      '6개 일치 (2,000,000,000원)',
    ];
    MissionUtils.Console.print(HIT_STASTICS);
    const MATCHED_COUNT = this.NumberOfMatchedLotto(purchasedLottoNumbers);
    for (let hit = 0; hit < 5; hit += 1) {
      MissionUtils.Console.print(`${STATISTICS_TEMPLATE[hit]} - ${MATCHED_COUNT[hit]}개`);
    }
    this.printProfitRate(purchasedLottoNumbers.length, MATCHED_COUNT);
  }

  NumberOfMatchedLotto(purchasedLottoNumbers) {
    // 3 4 5 6 5(bonus)
    const MATCHED_COUNT = [0, 0, 0, 0, 0];
    purchasedLottoNumbers.forEach((purchased) => {
      const [HIT_COUNT, BONUS_HIT] = this.countHitNumbers(purchased);
      const NORMAL_MATCHED = () => { MATCHED_COUNT[HIT_COUNT - 3] += 1; };
      const BONUS_MATCHED = () => { MATCHED_COUNT[HIT_COUNT - 1] += 1; };
      const COUNT_MATCHING = BONUS_HIT ? () => BONUS_MATCHED() : () => NORMAL_MATCHED();
      COUNT_MATCHING();
    });
    // 3 4 5 5(bonus) 6
    [MATCHED_COUNT[3], MATCHED_COUNT[4]] = [MATCHED_COUNT[4], MATCHED_COUNT[3]];
    return MATCHED_COUNT;
  }

  countHitNumbers(purchased) {
    const BONUS_NUMBER = this.#numbers.pop();
    const MATCHED_NUMBERS = purchased.filter((num) => this.#numbers.includes(num));
    const HIT_COUNT = MATCHED_NUMBERS.length;
    let bounsHit = false;
    if (HIT_COUNT === 5 && purchased.includes(BONUS_NUMBER)) {
      bounsHit = true;
    }
    this.#numbers.push(BONUS_NUMBER);
    return [HIT_COUNT, bounsHit];
  }

  printProfitRate(tickets, matched) {
    let profitRate = this.computeProfitRate(tickets, matched);
    // Insert comma after every 1000 digits.
    profitRate = profitRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
    MissionUtils.Console.close();
  }

  computeProfitRate(tickets, matched) {
    const PROFIT_TEMPLATE = [5000, 50000, 1500000, 30000000, 2000000000];
    let profit = 0;
    for (let compute = 0; compute < 5; compute += 1) {
      profit += PROFIT_TEMPLATE[compute] * matched[compute];
    }
    // toBeFixed() returns a string
    return ((profit / (tickets * 1000)) * 100).toFixed(1);
  }
}

module.exports = Lotto;

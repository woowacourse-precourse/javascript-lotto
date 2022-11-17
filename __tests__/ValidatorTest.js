const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('../src/Validator');
const ERROR = require('../src/constants/error');

describe('validateTotalPurchaseAmount 테스트', () => {
  afterAll(() => MissionUtils.Console.close());

  test('자연수이면서 천 단위인 경우 통과한다.', () => {
    const answer = [1000, 3000, 10000, 64000, 1230000];
    answer.forEach((totalPurchaseAmount) =>
      expect(() => Validator.validateTotalPurchaseAmount(totalPurchaseAmount)).toBeTruthy()
    );
  });

  test('자연수가 아닌 경우 에러가 발생한다.', () => {
    const answer = ['one', 'two', '1i', -1, 0];
    answer.forEach((totalPurchaseAmount) =>
      expect(() => Validator.validateTotalPurchaseAmount(totalPurchaseAmount)).toThrow(
        ERROR.NATURAL_NUMBER
      )
    );
  });

  test('천 단위가 아닌 경우 에러가 발생한다.', () => {
    const answer = [1001, 100, 1, 999, 1010];
    answer.forEach((totalPurchaseAmount) =>
      expect(() => Validator.validateTotalPurchaseAmount(totalPurchaseAmount)).toThrow(
        ERROR.THOUSANDS_NUMBER
      )
    );
  });
});

describe('validateLottoNumbers 테스트', () => {
  test('중복되지 않는 1~45 사이의 숫자 6개가 담긴 배열인 경우 통과한다.', () => {
    const answer = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 7, 9, 11],
      [45, 24, 35, 15, 25, 41],
    ];
    answer.forEach((lottoNumbers) =>
      expect(() => Validator.validateLottoNumbers(lottoNumbers)).toBeTruthy()
    );
  });

  test('6개가 아닌 경우 에러를 발생한다.', () => {
    const answer = [
      [1, 2, 3, 4, 5],
      [1, 23, 45],
      [1, 2, 3, 4, 5, 6, 7],
      [9, 4],
    ];
    answer.forEach((lottoNumbers) =>
      expect(() => Validator.validateLottoNumbers(lottoNumbers)).toThrow(ERROR.SIX_NUMBERS)
    );
  });

  test('중복된 수가 있는 경우 에러를 발생한다.', () => {
    const answer = [
      [1, 2, 3, 4, 5, 5],
      [1, 1, 1, 1, 1, 1],
      [1, 4, 5, 2, 7, 1],
    ];
    answer.forEach((lottoNumbers) =>
      expect(() => Validator.validateLottoNumbers(lottoNumbers)).toThrow(ERROR.UNIQUE_NUMBERS)
    );
  });

  test('MissionUtils의 pickUniqueNumbersInRange가 정상적으로 동작하는지 검사한다.', () => {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    expect(() => Validator.validateLottoNumbers(randomNumbers).toBeTruthy());
  });
});

describe('validateLottoNumber 테스트', () => {
  test('자연수이면서 1~45 사이의 숫자인 경우 통과한다.', () => {
    const answer = [1, 3, 5, 11, 13, 15, 20, 25, 30, 35, 40, 45];
    answer.forEach((lottoNumber) =>
      expect(() => Validator.validateLottoNumber(lottoNumber)).toBeTruthy()
    );
  });

  test('자연수가 아닌 경우 에러를 발생한다.', () => {
    const answer = [0, -1000, 'abc', 'I'];
    answer.forEach((lottoNumber) =>
      expect(() => Validator.validateLottoNumber(lottoNumber)).toThrow(ERROR.NATURAL_NUMBER)
    );
  });

  test('1~45 사이의 숫자가 아닌 경우 에러를 발생한다.', () => {
    const answer = [46, 50, 100, 3000];
    answer.forEach((lottoNumber) =>
      expect(() => Validator.validateLottoNumber(lottoNumber)).toThrow(
        ERROR.BETWEEN_1_TO_45_NUMBERS
      )
    );
  });
});

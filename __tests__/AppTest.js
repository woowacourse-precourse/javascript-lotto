const App = require('../src/App');
const { ERROR_MESSAGE } = require('../src/constant/constant');
const Lottos = require('../src/Lottos');

describe('메소드 테스트', () => {
  const app = new App();
  test.each([[-1000], [' 1000'], ['500원'], ['1,000']])(
    '구입 가격에 %s 같이 정수가 아닌 다른 문자나 숫자, 공백이 들어있으면 예외가 발생한다.',
    (purchasingPrice) => {
      expect(() => {
        app.validate(purchasingPrice);
      }).toThrow(ERROR_MESSAGE.ONLY_INPUT_NUMBER);
    }
  );

  test.each([['01000']])(
    '구입 가격에 %s 같이 0으로 시작하는 값이 있으면 예외가 발생한다.',
    (purchasingPrice) => {
      expect(() => {
        app.validate(purchasingPrice);
      }).toThrow(ERROR_MESSAGE.START_NUMBER_ZERO);
    }
  );

  test.each([[1500], [3300]])(
    '구입 가격에 %s 같이 1000원 단위가 아닌 경우 예외가 발생한다.',
    (purchasingPrice) => {
      expect(() => {
        app.validate(purchasingPrice);
      }).toThrow(ERROR_MESSAGE.INVALID_UNIT);
    }
  );

  test.each([[500], [300]])(
    '구입 가격에 %s 같이 1000원보다 낮은 값을 입력한 경우 예외가 발생한다.',
    (purchasingPrice) => {
      expect(() => {
        app.validate(purchasingPrice);
      }).toThrow(ERROR_MESSAGE.MIN_PRICE);
    }
  );

  test.each([
    [
      [1, 2, 3, 7, 8, 9],
      [1, 2, 3, 4, 5, 6],
    ],
  ])(
    '로또 번호 %p와 당첨 번호 %p를 비교했을 때 3개가 일치하면 5를 반환한다.',
    (lottoNumbers, winningNumbers) => {
      expect(app.compare(lottoNumbers, winningNumbers)).toEqual(5);
    }
  );

  test.each([
    [
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 4, 5, 6],
    ],
  ])(
    '로또 번호 %p와 당첨 번호 %p를 비교했을 때 4개가 일치하면 4를 반환한다.',
    (lottoNumbers, winningNumbers) => {
      expect(app.compare(lottoNumbers, winningNumbers)).toEqual(4);
    }
  );

  test.each([
    [
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 5, 6],
    ],
  ])(
    '로또 번호 %p와 당첨 번호 %p를 비교했을 때 5개가 일치하면 3을 반환한다.',
    (lottoNumbers, winningNumbers) => {
      expect(app.compare(lottoNumbers, winningNumbers)).toEqual(3);
    }
  );

  test.each([[[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7]])(
    '로또 번호 %p와 당첨 번호 %p를 비교했을 때 5개가 일치하고 보너스 번호 %s가 일치하면 2를 반환한다.',
    (lottoNumbers, winningNumbers, bonusNumber) => {
      expect(app.compare(lottoNumbers, winningNumbers, bonusNumber)).toEqual(2);
    }
  );

  test.each([
    [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ],
  ])(
    '로또 번호 %p와 당첨 번호 %p를 비교했을 때 6개가 일치하면 1을 반환한다.',
    (lottoNumbers, winningNumbers) => {
      expect(app.compare(lottoNumbers, winningNumbers)).toEqual(1);
    }
  );

  test.each([
    [
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 7, 8, 9],
        [1, 2, 3, 8, 9, 10],
        [1, 2, 3, 4, 5, 7],
      ],
      [1, 2, 3, 4, 5, 6],
      7,
    ],
  ])(
    '전체 구매한 로또 번호의 결과가 [1등, 2등, 3등, 4등, 5등] 형식으로 반환된다.',
    (lottoNumbersZip, winningNumbers, bonusNumber) => {
      expect(app.compareTotal(lottoNumbersZip, winningNumbers, bonusNumber)).toEqual([
        1, 1, 0, 0, 2,
      ]);
    }
  );

  test.each([[[0, 0, 0, 1, 1]]])(
    '당첨 결과를 토대로 수익을 반환 받는다.',
    (winningResult) => {
      expect(app.calculateReturn(winningResult)).toEqual(55000);
    }
  );
});

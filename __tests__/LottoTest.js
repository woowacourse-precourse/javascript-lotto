/* eslint-disable no-new */
const Lotto = require('../src/Lotto');
const App = require('../src/App');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});

describe('로또 구입 금액 유효성 검사', () => {
  test('로또 구입 금액은 숫자여야 하고, 1000원 미만일 수 없다.', () => {
    const app = new App();
    const testInput = ['0', '-1000', '990', 'abc', 'a98bc'];
    testInput.forEach((testElement) => {
      const result = app.isValidMoney(testElement);
      expect(result).toEqual(false);
    });
  });

  test('로또 구입 금액은 1000원 단위여야 한다.', () => {
    const app = new App();
    const testInput = ['9900', '9000', '9856', '14000', '1450001', '185000'];
    const testOutput = [false, true, false, true, false, true];
    testInput.forEach((testElement, idx) => {
      const result = app.isValidMoney(testElement);
      expect(result).toEqual(testOutput[idx]);
    });
  });
});

describe('countLotteries 함수 테스트', () => {
  test('구입금액에 해당하는 만큼 로또 발행 검사', () => {
    const app = new App();
    const testInput = ['9000', '10000', '11000', '178000', '959000'];
    const testOutput = [9, 10, 11, 178, 959];
    testInput.forEach((testElement, idx) => {
      const result = app.countLotteries(testElement);
      expect(result).toEqual(testOutput[idx]);
    });
  });
});

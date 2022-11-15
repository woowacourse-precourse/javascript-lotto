const App = require('../src/App');
const { ERROR_MESSAGE } = require('../src/constant/constant');

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
});

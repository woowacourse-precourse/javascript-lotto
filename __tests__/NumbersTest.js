const Numbers = require('../src/Numbers');

const LOTTO_PRICE = 1000;

describe('Numbers 클래스 테스트', () => {
  test('1000의 배수 테스트', () => {
    const number = new Numbers();
    const result = number.validateForMoney('21010');
    expect(result).toEqual(false);
  });

  test('문자열 입력 테스트', () => {
    const number = new Numbers();
    const result = number.validateForMoney('2123a');
    expect(result).toEqual(false);
  });

  test('정상 입력 테스트', () => {
    const number = new Numbers();
    const result = number.validateForMoney('21000');
    expect(result).toEqual(true);
  });
});

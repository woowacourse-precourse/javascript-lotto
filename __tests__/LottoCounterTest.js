const LottoQuantity = require('../src/model/LottoQuantity');

const getLottoQuantity = (cash) => {
  return new LottoQuantity(Number(cash)).getLottosQuantity();
};

describe('LottoQuantity 클래스 테스트', () => {
  test('기능 테스트: 입력한 구입 금액에 해당하는 로또 개수를 구한다.', () => {
    let inputtedCash = '8000';
    expect(getLottoQuantity(inputtedCash)).toEqual(8);
  });

  test('예외 테스트: 입력 받은 금액이 숫자가 아니면 예외가 발생한다.', () => {
    let inputtedCash = 'd134!';
    expect(() => {
      getLottoQuantity(inputtedCash);
    }).toThrow(
      '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.'
    );
  });

  test('예외 테스트: 입력 받은 금액이 1,000원 미만이면 예외가 발생한다.', () => {
    let inputtedCash = '200';
    expect(() => {
      getLottoQuantity(inputtedCash);
    }).toThrow('[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.');
  });

  test('예외 테스트: 입력 받은 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    let inputtedCash = '12345';
    expect(() => {
      getLottoQuantity(inputtedCash);
    }).toThrow('[ERROR] 1,000원 단위의 금액만 입력 가능합니다.');
  });
});

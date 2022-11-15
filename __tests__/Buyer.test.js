const { Console } = require('@woowacourse/mission-utils');

const Buyer = require('../src/Buyer');

describe('입력받은 구입 금액으로 구매할 수 있는 장 수를 게산한다.', () => {
  test('Buyer 생성자의 매개변수를 나누기 1000한 값을 반환한다.', () => {
    expect(new Buyer(10000).buyLotto().quantity).toEqual(10);
    expect(new Buyer(3000).buyLotto().quantity).toEqual(3);
    expect(new Buyer(234000).buyLotto().quantity).toEqual(234);
    expect(new Buyer(5210000).buyLotto().quantity).toEqual(5210);
    expect(new Buyer('10000').buyLotto().quantity).toEqual(10);
    expect(new Buyer('3000').buyLotto().quantity).toEqual(3);
    expect(new Buyer('234000').buyLotto().quantity).toEqual(234);
    expect(new Buyer('5210000').buyLotto().quantity).toEqual(5210);
  });
});

Console.close();

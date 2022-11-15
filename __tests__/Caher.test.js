const Casher = require('../src/domain/Casher');
const { CASHER } = require('../src/constants');
const Io = require('../src/infrastructure/io');

describe('캐셔 테스트', () => {
  test('캐셔는 돈을 받는다.', () => {
    const money = 10000;
    const afterGetMoney = jest.fn();
    Io.input = jest.fn();
    Io.input.mockImplementationOnce((question, callback) => {
      callback(money);
    });

    Casher.getMoney(CASHER.ASK_MONEY, afterGetMoney);
    expect(afterGetMoney).toBeCalledWith(money);
  });

  test('캐셔는 구매금액만큼 로또티켓을 발행한다.', () => {
    const purchaseAmount = 10000;
    const quantity = Casher.getPurchasableQuantity(purchaseAmount);
    expect(quantity).toBe(10);
  });

  test('캐셔는 발행한 티켓의 수량을 알려준다.', () => {
    const quantity = 10;
    Io.output = jest.fn();
    Casher.noticePurchasedQuantity(quantity);
    expect(Io.output).toBeCalledWith(`${quantity}${CASHER.NOTICE_PURCHASE_QUANTITY}`);
  });
});

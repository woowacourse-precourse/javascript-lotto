const MissionUtils = require('@woowacourse/mission-utils');

const Customer = require('../src/Customer');
const Lotto = require('../src/Lotto');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('커스터머 클래스 테스트', () => {
  test('purchaseLotto 메서드를 이용해 #lottos 필드에 새 로또를 추가할 수 있다', () => {
    const customer = new Customer();
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([7, 8, 9, 10, 11, 12]);
    customer.purchaseLotto(lotto1);
    customer.purchaseLotto(lotto2);
    expect(customer.list()).toEqual([lotto1, lotto2]);
  });

  test('printLottoPurchaseResult 메서드를 이용해 로또 구매 결과를 출력할 수 있다.', () => {
    const logs = ['1개를 구매했습니다.', '[1, 2, 3, 4, 5, 6]'];
    const logSpy = getLogSpy();
    const customer = new Customer();
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    customer.purchaseLotto(lotto);
    customer.printLottoPurchaseResult();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

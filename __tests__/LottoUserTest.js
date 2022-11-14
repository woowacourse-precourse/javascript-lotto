const LottoUser = require('../src/LottoUser');

// 테스트 이름 : when_given_then
// when: 어떤 행동을 했는지
// given : 어떤 조건에서 이 일이 일어나는지
// then : given과 같은 조건에서 when을 했을때 어떤 일이 일어날 것인지
describe('LottoUser class test', () => {
  test('inputAmount_inputNotNumber_throwError', () => {
    expect(() => {
      new LottoUser('5000j');
    }).toThrow('[ERROR]');
  });
  test('inputAmount_notDivisble_throwError', () => {
    expect(() => {
      new LottoUser('5500');
    }).toThrow('[ERROR]');
  });
  test('calcLottoCount_returnLottoCount', () => {
    const user = new LottoUser('5000');
    expect(user.calcLottoCount()).toBe(5);
  });
});

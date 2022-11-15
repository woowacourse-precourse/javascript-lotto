/* eslint-disable max-lines-per-function */
const Computer = require('../src/Computer');
const Lotto = require('../src/Lotto');
const WinLotto = require('../src/WinLotto');

describe('로또 결과 테스트', () => {
  test('1등 당첨 1개, 2등 당첨 1개 테스트, 3등 당첨 1개 테스트', () => {
    const userLottoList = [];
    userLottoList.push(new Lotto([1, 2, 3, 4, 5, 6]));
    userLottoList.push(new Lotto([2, 3, 4, 5, 6, 7]));
    userLottoList.push(new Lotto([21, 2, 3, 4, 5, 6]));
    const winLotto = new WinLotto([1, 2, 3, 4, 5, 6]);
    winLotto.setBonusNumber(7);
    const result = Computer.userLottoRankResult(userLottoList, winLotto);
    expect(result).toStrictEqual({ First: 1, Second: 1, Third: 1, Fourth: 0, Fifth: 0 });
  });

  test('3개 모두 당첨 안된 경우 테스트', () => {
    const userLottoList = [];
    userLottoList.push(new Lotto([1, 2, 3, 4, 5, 6]));
    userLottoList.push(new Lotto([2, 3, 4, 5, 6, 7]));
    userLottoList.push(new Lotto([21, 2, 3, 4, 5, 6]));
    const winLotto = new WinLotto([11, 22, 33, 44, 15, 16]);
    winLotto.setBonusNumber(17);
    const result = Computer.userLottoRankResult(userLottoList, winLotto);
    expect(result).toStrictEqual({ First: 0, Second: 0, Third: 0, Fourth: 0, Fifth: 0 });
  });
});

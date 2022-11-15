const Lotto = require('../src/Lotto');
const LottoMachine = require('../src/domain/LottoMachine');
const { getAscending, getRateOfReturn, getEarnedAmount, getMatchedNumberCount } = require('../src/utils/common');
const { LOTTO_PRICE } = require('../src/utils/constants');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});

const Lotto = require('../src/Lotto');
const Bonus = require('../src/domain/Bonus');
const LottoStore = require('../src/domain/LottoStore');
const LottoDrawFactory = require('../src/domain/LottoDrawFactory');

describe('LottoDrawFactory 클래스 테스트', () => {
  test('([1,2,3,4,5,6] / 1) 보너스 번호가 로또 추첨 번호와 겹칠 때 에러 발생', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('1');
    const lottoStore = new LottoStore('1000')

    expect(() => {
      new LottoDrawFactory({ lotto, bonus, lottoStore });
    }).toThrow('[ERROR]');
  });

  test('([1,2,3,4,5,6] / 4) 보너스 번호가 로또 추첨 번호와 겹칠 때 에러 발생', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('4');
    const lottoStore = new LottoStore('1000')

    expect(() => {
      new LottoDrawFactory({ lotto, bonus, lottoStore });
    }).toThrow('[ERROR]');
  });
});

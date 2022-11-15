const AutoLottoMachine = require('./AutoLottoMachine.js');
const { mockRandoms } = require('../../testFunction');

describe('AutoLottoMachine 클래스 테스트', () => {
  test('로또를 생성한다.', () => {
    const lottoMachine = new AutoLottoMachine();
    const lottoNumbersList = [[8, 21, 23, 41, 42, 43]];
    mockRandoms(lottoNumbersList);

    const lotto = lottoMachine.generateLotto();

    expect(lotto.getNumbers()).toBe('[8, 21, 23, 41, 42, 43]');
  });
});

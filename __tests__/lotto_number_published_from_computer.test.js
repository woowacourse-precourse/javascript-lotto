const LottoNumberPublishedFromComputer = require('../src/components/util/LottoNumberIssuedFromComputer');
const MissionUtils = require('@woowacourse/mission-utils');

describe('LottoNumberPublishedFromComputer', () => {
  let lottoNumber;
  beforeEach(() => {
    lottoNumber = new LottoNumberPublishedFromComputer();
  });

  it('오름차순 정렬', () => {
    const lottoNumberOrigin = lottoNumber.return();
    const lottoNumberTest = [...lottoNumberOrigin].sort((a, b) => a - b);
    expect(lottoNumberOrigin).toEqual(lottoNumberTest);
  });

  it('6개의 숫자', () => {
    expect(lottoNumber.return().length).toBe(6);
  });
});

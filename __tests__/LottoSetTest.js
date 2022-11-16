const { isSame, makeLottoSet } = require('../src/utils/makeLottoSet');

describe('발행한 로또 배열을 담은 Set 테스트', () => {
  test('Set의 길이가 요구한 로또의 개수와 같은지 확인한다.', () => {
    const lottoSet = makeLottoSet(3);

    expect([...lottoSet]).toHaveLength(3);
    expect(isSame(3, lottoSet)).toBeTruthy();
  });
});

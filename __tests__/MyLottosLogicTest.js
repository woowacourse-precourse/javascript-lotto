/* eslint-disable */
const { sortRandomLotto } = require('../src/lib/utils/myLottosUtils');

describe('구매한 로또의 테스트', () => {
  test('구매한 로또가 정렬이 되는지 테스트', () => {
    const lottoNumbers = [7, 12, 33, 2, 45, 31];
    const answerNumbers = [2, 7, 12, 31, 33, 45];
    expect(sortRandomLotto(lottoNumbers)).toEqual(answerNumbers);
  });
});

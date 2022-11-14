const MakeLottos = require('../src/lotto-make-and-calculate/MakeLottos');

describe('로또 생성 테스트', () => {
  test('정해진 양만큼만 로또를 생성한다.', () => {
    const lottoList = new MakeLottos(5);
    expect(lottoList.lottoLists).toHaveLength(5);
  });

  test('각 리스트가 중복된 값을 가지지 않는다', () => {
    const lottoList = new MakeLottos(5);
    (lottoList.lottoLists).forEach((eachLotto) => {
      expect(new Set(eachLotto).size).toBe(6);
    });
  });

  test('각 리스트가 오름차순으로 정렬된다.', () => {
    const lottoList = new MakeLottos(1);
    const beforeList = [6,5,4,2,1,3];
    expect(lottoList.sortLotto(beforeList)).toEqual([1,2,3,4,5,6]);
  });
});

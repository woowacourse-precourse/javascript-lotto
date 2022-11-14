const Lotto = require('../src/Lotto');
const { figureLotteryRank } = require('../src/utils/lottery');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });

  test('로또 판별기 1 : FIRST', () => {
    const hit = 6;
    const bonus = false;
    const result = figureLotteryRank(hit, bonus);
    expect(result).toEqual('FIRST');
  });

  test('로또 판별기 2 : SECOND', () => {
    const hit = 5;
    const bonus = true;
    const result = figureLotteryRank(hit, bonus);
    expect(result).toEqual('SECOND');
  });

  test('로또 판별기 3 : THIRD', () => {
    const hit = 5;
    const bonus = false;
    const result = figureLotteryRank(hit, bonus);
    expect(result).toEqual('THIRD');
  });

  test('로또 판별기 4 : FOURTH', () => {
    const hit = 4;
    const bonus = false;
    const result = figureLotteryRank(hit, bonus);
    expect(result).toEqual('FOURTH');
  });

  test('로또 판별기 5 : FIFTH', () => {
    const hit = 3;
    const bonus = false;
    const result = figureLotteryRank(hit, bonus);
    expect(result).toEqual('FIFTH');
  });

  test('로또 판별기 6 : 꽝', () => {
    const hit = 2;
    const bonus = false;
    const result = figureLotteryRank(hit, bonus);
    expect(result).toEqual(null);
  });

  // 아래에 추가 테스트 작성 가능
});

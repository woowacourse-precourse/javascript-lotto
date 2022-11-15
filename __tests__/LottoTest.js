const Lotto = require('../src/Lotto');
const {
  figureLotteryRank, validateMoney, countTickets, profitRate,
} = require('../src/utils/lottery');

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
});
describe('ㅇㅇ', () => {
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

  test('잘못된 돈을 투입했을 때 : 숫자가 아닌 경우', () => {
    expect(() => {
      validateMoney('ㅇㅇ');
    }).toThrow('[ERROR]');
  });

  test('잘못된 돈을 투입했을 때 : 천원 단위가 아닌 경우', () => {
    expect(() => {
      validateMoney(8800);
    }).toThrow('[ERROR]');
  });

  test('티켓 장수 계산 : 14000원', () => {
    const input = 14000;
    const result = countTickets(input);
    expect(result).toEqual(14);
  });

  test('티켓 장수 계산 : 천원 단위가 아닌 경우', () => {
    expect(() => {
      const input = 14400;
      countTickets(input);
    }).toThrow('[ERROR]');
  });

  test('수익률 계산 : 140.0', () => {
    const rewards = 14000;
    const paid = 10000;
    const result = profitRate(rewards, paid);
    expect(result).toEqual('140.0');
  });

  test('수익률 계산 : 35.7', () => {
    const rewards = 5000;
    const paid = 14000;
    const result = profitRate(rewards, paid);
    expect(result).toEqual('35.7');
  });
});

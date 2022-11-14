const { Lotto, buyTicket, insertLottoNumber, start } = require('../src/Lotto');

let lottos = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];
describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(
        [1, 2, 3, 4, 5, 6, 7],
        [
          [8, 13, 26, 28, 36, 37],
          [6, 12, 18, 25, 29, 35],
          [2, 4, 17, 34, 38, 39],
        ],
      );
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(
        [1, 2, 3, 4, 5, 5],
        [
          [8, 13, 26, 28, 36, 37],
          [6, 12, 18, 25, 29, 35],
          [2, 4, 17, 34, 38, 39],
        ],
      );
    }).toThrow('[ERROR] 중복되는 숫자가 없어야 합니다.');
  });

  test('로또 번호는 1~45 까지의 숫자만 가능하다.', () => {
    expect(() => {
      new Lotto(
        [1, 2, 3, 4, 5, 47],
        [
          [8, 13, 26, 28, 36, 37],
          [6, 12, 18, 25, 29, 35],
          [2, 4, 17, 34, 38, 39],
        ],
      );
    }).toThrow('[ERROR] 당첨번호는 1~45 까지의 숫자만 가능합니다.');
  });
});

describe('로또 구입 메소드 테스트', () => {
  test('5등', () => {
    let answers = [1, 3, 5, 14, 22, 45];
    let bonusNum = 9;
    let rankCount = [0, 0, 0, 0, 0];
    const lotto = new Lotto(answers, [1, 3, 5, 6, 7, 8]);

    expect(lotto.winningStatics(3, 0, rankCount)).toEqual([1, 0, 0, 0, 0]);
  });
  test('4등', () => {
    let answers = [1, 3, 5, 14, 22, 45];
    let bonusNum = 9;
    let rankCount = [0, 0, 0, 0, 0];
    const lotto = new Lotto(answers, [1, 3, 5, 14, 7, 8]);

    expect(lotto.winningStatics(4, 0, rankCount)).toEqual([0, 1, 0, 0, 0]);
  });
  test('3등', () => {
    let answers = [1, 3, 5, 14, 22, 45];
    let bonusNum = 9;
    let rankCount = [0, 0, 0, 0, 0];
    const lotto = new Lotto(answers, [1, 3, 5, 14, 22, 8]);

    expect(lotto.winningStatics(5, 0, rankCount)).toEqual([0, 0, 1, 0, 0]);
  });
  test('2등', () => {
    let answers = [1, 3, 5, 14, 22, 45];
    let bonusNum = 9;
    let rankCount = [0, 0, 0, 0, 0];
    const lotto = new Lotto(answers, [1, 3, 5, 14, 22, 9]);

    expect(lotto.winningStatics(5, 1, rankCount)).toEqual([0, 0, 0, 1, 0]);
  });
  test('1등', () => {
    let answers = [1, 3, 5, 14, 22, 45];
    let bonusNum = 9;
    let rankCount = [0, 0, 0, 0, 0];
    const lotto = new Lotto(answers, [1, 3, 5, 14, 22, 45]);

    expect(lotto.winningStatics(6, 0, rankCount)).toEqual([0, 0, 0, 0, 1]);
  });
});

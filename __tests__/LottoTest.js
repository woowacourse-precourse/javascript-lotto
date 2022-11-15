const Lotto = require('../src/Lotto');

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

  test('로또 번호에 1~45 범위를 넘어가는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 출력 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.print()).toEqual('[1, 2, 3, 4, 5, 6]');
  });

  test('로또 번호에 해당하는 당첨 내역 출력 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    const winningNumberList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
    ];
    const bonusNumber = [7, 6, 10, 6, 6];

    const resultRank = [1, 2, 3, 4, 5];

    resultRank.forEach((result, idx) => {
      expect(
        lotto.getWinningDetail(winningNumberList[idx], bonusNumber[idx]).rank,
      ).toEqual(result);
    });
  });
});

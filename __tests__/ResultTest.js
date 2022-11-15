const Bonus = require('../src/Bonus');
const Lotto = require('../src/Lotto');
const Result = require('../src/Result');

describe('리절트 클래스 테스트', () => {
  test('잘못된 당첨 번호을 입력한 경우 에러처리', () => {
    const result = new Result();
    const values = [
      // 숫자가 1~45까지 범위를 초과할 경우 (ex: 0, 46 등 불가)
      '0,1,2,3,4,5',
      '41,42,43,44,45,56',
      // 번호가 아닐 경우 (ex: 음수, 소수 등 불가)
      '-1,2,3,4,5,6',
      '1,2,3,4,5,0.6',
      // 숫자가 아닐 경우 (ex: 알파벳, 한글, 특수문자 등 불가)
      'a,2,3,4,5,6',
      '1,2,3,ㅅ,5,6',
      '1,2,$,4,5,6',
      // 쉼표로 구분되지 않았을 경우 (ex: 공백, 마침표 등 불가)
      '11 12 13 14 15 16',
      '21.22.23.24.25.26',
      // 입력받은 숫자가 6개가 아닐 경우 (ex: 5개, 7개 등 불가)
      '1,2,3,4,5',
      '1,2,3,4,5,6,7',
    ];

    values.forEach((value) => {
      expect(() => {
        result.validate(value);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨내역 구하기', () => {
    // 당첨 번호: [1, 2, 3, 4, 5, 6]
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
    // 보너스 번호: 13
    const bonusNumber = new Bonus('13', winningNumber);
    const result = new Result([
      // 1등: 6개 일치 (2,000,000,000원)
      [1, 2, 3, 4, 5, 6],
      // 2등: 5개 일치, 보너스볼 일치 (30,000,000원)
      [1, 2, 3, 4, 5, 13],
      // 3등: 5개 일치 (1,500,000원)
      [2, 3, 4, 5, 6, 7],
      // 4등: 4개 일치(50,000원)
      [3, 4, 5, 6, 7, 8],
      // 5등: 3개 일치 (5,000원)
      [4, 5, 6, 7, 8, 9],
      // 미당첨
      [5, 6, 7, 8, 9, 10],
      [6, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
    ]);

    result.lottos.forEach((lotto) => {
      const countMatching = winningNumber.compare(lotto);
      const hasBonus = bonusNumber.compare(lotto);
      result.updateHistory(countMatching, hasBonus);
    });

    expect(result.history.fifthPlace.count).toEqual(1);
    expect(result.history.fourthPlace.count).toEqual(1);
    expect(result.history.thirdPlace.count).toEqual(1);
    expect(result.history.secondPlace.count).toEqual(1);
    expect(result.history.firstPlace.count).toEqual(1);
  });
});

const ErrorCheck = require('../components/ErrorCheck');
const Functions = require('../components/Functions');

describe('로또 클래스 테스트', () => {
  test('콤마로 구분된 숫자 문자열을 숫자 배열로 반환한다', () => {
    expect(Functions.digitize('1,2,3,4,5,6')).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 1개의 당첨 개수 확인', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const lottoNumber = [4, 5, 6, 10, 11, 12];
    expect(Functions.getMatchCount(winningNumber, lottoNumber)).toEqual(3);
  });

  test('당첨 개수에 의한 순위 출력', () => {
    const matchCounts = [1, 2, 3, 4, 5, 5, 6];
    const result = [-1, -1, 4, 3, 2, 2, 0];
    const includesBonus = false;

    matchCounts.forEach((count, index) => {
      expect(Functions.getRank(count, includesBonus)).toEqual(result[index]);
    });

    expect(Functions.getRank(5, true)).toEqual(1);
  });

  test('구매 금액 입력 오류', () => {
    expect(() => {
      ErrorCheck.purchase('123a');
    }).toThrow();
  });

  test('당첨 번호 입력 오류', () => {
    expect(() => {
      ErrorCheck.winningNumber([1, 2, 3, 4, 5, 'a']);
    }).toThrow();
  });

  test('보너스 번호 입력 오류', () => {
    expect(() => {
      const winningNumber = [1, 2, 3, 4, 5, 6];

      ErrorCheck.bonusNumber(winningNumber, 6);
    }).toThrow();
  });
});

const countCorrectNumber = require('../src/utils/countCorrectNumber');
const getLottoQuantity = require('../src/utils/getLottoQuantity');
const isBonusNumberCorrect = require('../src/utils/isBonusNumberCorrect');
const returnMyRank = require('../src/utils/returnMyRank');

describe('유틸 함수 동작 테스트', () => {
  //   test('금액에 맞는 구매 로또의 개수를 리턴하는 함수', () => {
  //     expect(getLottoQuantity('11000')).toBe(11);
  //     expect(getLottoQuantity('1000')).toBe(1);
  //     expect(getLottoQuantity('31200')).toBe(31);
  //     expect(getLottoQuantity('500')).toBe(0);
  //   });

  test('구매 로또의 정답 개수를 리턴하는 함수', () => {
    expect(countCorrectNumber([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])).toBe(5);
    expect(countCorrectNumber([1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9, 10])).toBe(2);
    expect(
      countCorrectNumber([12, 23, 42, 14, 35, 27], [13, 42, 23, 44, 35, 27])
    ).toBe(4);
    expect(
      countCorrectNumber([19, 22, 42, 14, 35, 27], [13, 42, 23, 44, 35, 27])
    ).toBe(3);
  });

  test('구매 로또의 보너스 번호 정답 여부 확인', () => {
    expect(isBonusNumberCorrect(1, [2, 3, 4, 5, 6, 7])).toBe(0);
    expect(isBonusNumberCorrect(4, [2, 3, 4, 5, 6, 7])).toBe(1);
    expect(isBonusNumberCorrect(14, [12, 31, 42, 15, 26, 37])).toBe(0);
    expect(isBonusNumberCorrect(15, [12, 31, 42, 15, 26, 37])).toBe(1);
  });

  test('정답 수를 통한 등수 확인', () => {
    expect(returnMyRank(1, 1)).toBe('0');
    expect(returnMyRank(2, 1)).toBe('5');
    expect(returnMyRank(0, 1)).toBe('0');
    expect(returnMyRank(3, 1)).toBe('4');
    expect(returnMyRank(4, 1)).toBe('3');
    expect(returnMyRank(5, 0)).toBe('3');
    expect(returnMyRank(5, 1)).toBe('2');
    expect(returnMyRank(6, 0)).toBe('1');
  });
});

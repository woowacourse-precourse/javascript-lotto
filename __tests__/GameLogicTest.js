/* eslint-disable */

const {
  convertAnswerIntoArray,
  getRevenue,
  getRateOfReturn,
} = require('../src/lib/utils/gameUtils');

describe('게임 클래스에서 사용하는 로직 단위 테스트', () => {
  test('문자열을 숫자 배열로 변환하는 함수 테스트', () => {
    expect(convertAnswerIntoArray('1,2,3,4,5,6')).toEqual([1, 2, 3, 4, 5, 6]);
    expect(convertAnswerIntoArray('1,3,5,7,9,12')).toEqual([1, 3, 5, 7, 9, 12]);
    expect(convertAnswerIntoArray('1,4,8,12,16,20')).toEqual([
      1, 4, 8, 12, 16, 20,
    ]);
    expect(convertAnswerIntoArray('1,5,10,15,20,25')).toEqual([
      1, 5, 10, 15, 20, 25,
    ]);
  });

  test('본인의 로또 당첨금의 총 합을 구하는 로직 단위 테스트', () => {
    expect(getRevenue([1, 0, 0, 0, 0])).toEqual(5000);
    expect(getRevenue([0, 1, 0, 0, 0])).toEqual(50000);
    expect(getRevenue([0, 0, 1, 0, 0])).toEqual(1500000);
    expect(getRevenue([0, 0, 0, 1, 0])).toEqual(30000000);
    expect(getRevenue([0, 0, 0, 0, 1])).toEqual(2000000000);
  });

  test('본인의 수익률을 구하는 로직 단위 테스트', () => {
    expect(getRateOfReturn(5000, 8000)).toEqual('62.5');
    expect(getRateOfReturn(50000, 1000)).toEqual('5000.0');
    expect(getRateOfReturn(2000000000, 8000)).toEqual('25000000.0');
  });
});

const GameUtils = require('../src/Utils/GameUtils');

describe("GameUtils 테스트", () => {
  test("금액 표기 표준 제거 테스트", () => {
    const input = [
      '10,000,000원',
      '8,000원',
      '3,000,000원',
    ];
    const output = [
      '10000000',
      '8000',
      '3000000',
    ];
    input.forEach((subject, idx) => {      
      const result = GameUtils.removeMarkingStandardMoney(subject);
      expect(result).toBe(output[idx]);
    });
  });

  test("입력값 배열화 테스트", () => {
    const input = [
      '1,2,3,4,5,6',
      '10,20,30,40,50,60',
      '1,2,3,4,5,6,7,8,9,10',
    ];
    const output = [
      [1, 2, 3, 4, 5, 6],
      [10, 20, 30, 40, 50, 60],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ];
    input.forEach((subject, idx) => {      
      const result = GameUtils.toArray(subject);
      expect(result).toEqual(output[idx]);
    });
  });
  
  test("구매 장수 계산 테스트", () => {
    const input = [1000, 2000, 3000, 5000, 30000];
    const output = [1, 2, 3, 5, 30];
    input.forEach((subject, idx) => {      
      const result = GameUtils.getSheets(subject);
      expect(result).toBe(output[idx]);
    });
  });

  test("수익률 계산 테스트", () => {
    const input = [
      [10000, 100000],
      [20000, 200000],
      [8000, 5000],
      [500, 8000],
      [10000, 1000],
      [5000, 100],
      [4360, 700]
    ];
    const output = ['1000.0', '1000.0', '62.5', '1600.0', '10.0', '2.0', '16.1'];
    input.forEach((subject, idx) => {      
      const result = GameUtils.getRevenueRate(subject[0], subject[1]);
      expect(result).toBe(output[idx]);
    });
  });

  test("콤마 삽입 테스트", () => {
    const input = [1000, 10000, 9999999, 213111, 100, 10, 1000000000];
    const output = ['1,000', '10,000', '9,999,999', '213,111', '100', '10', '1,000,000,000'];
    input.forEach((subject, idx) => {      
      const result = GameUtils.addComma(subject);
      expect(result).toBe(output[idx]);
    });
  });
});

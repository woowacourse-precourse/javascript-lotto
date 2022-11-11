const GameUtils = require("../src/Utils/GameUtils");

describe("GameUtils 테스트", () => {
  test("공백제거 확인", () => {
    const input = [
      '1  2  3 4   5   6 7 8',
      '1 23  4  567 8   ',
      '   1  2 3  4  5678 ',
      '1 2 3  45   67  8 ',
      '12345678'
    ];
    input.forEach(tester => {      
      const result = GameUtils.removeBlank(tester);
      expect(result).toBe('12345678');
    })
  });
});

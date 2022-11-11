const GameUtils = require('../src/Utils/GameUtils');

describe("GameUtils 테스트", () => {
  test("공백제거 확인", () => {
    const input = [
      '1  2  3 4   5   6 7 8',
      '1 23  4  567 8   ',
      '   1  2 3  4  5678 ',
      '1 2 3  45   67  8 ',
      '12345678'
    ];
    input.forEach(subject => {      
      const result = GameUtils.removeBlank(subject);
      expect(result).toBe('12345678');
    })
  });
  test("원 및 콤마 제거 확인", () => {
    const input = [
      '10,000원',
      '19,999원',
      '원원원원,,,,,',
    ];
    input.forEach(subject => {      
      let result = true;
      subject = GameUtils.filterPurchaseAmount(subject);
      if(subject.includes(',') || subject.includes('원')) result = false;
      expect(result).toBeTruthy();
    })
  });
  test("로또 개수 산출 확인", () => {
    const input = [1000, 5000, 10000, 15000];
    const result = [1, 5, 10, 15];
    input.forEach((subject, idx) => {  
      const sheets = GameUtils.getSheets(subject);
      expect(sheets).toBe(result[idx]);
    })
  });
});
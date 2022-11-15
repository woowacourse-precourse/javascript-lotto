const LottoMachine = require("../src/LottoMachine");

describe("로또머신 클래스 테스트", () => {
  
  test("제너레이터 테스트", () => {
    const lottoMachine = new LottoMachine();
    const numbers = lottoMachine.generate();
    expect(numbers).toHaveLength(6);
  });

  test("번호 테스트", () => {
    const lottoMachine = new LottoMachine();
    const numbers = lottoMachine.generate();
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(number, 1);
      expect(number).toBeLessThanOrEqual(number, 45);
    });
  });

  test("매번 다른 번호를 뽑아 내는지 확인", () => {
    const lottoMachine = new LottoMachine();
    const numbers1 = lottoMachine.generate();
    const numbers2 = lottoMachine.generate();
    const duplicatedNumber = numbers1.filter((number, idx) => number === numbers2[idx]);
    expect(duplicatedNumber).not.toHaveLength(6);
  });
});

const NumberGenerator = require("../src/domain/generator/NumberGenerator");
const LottoNumber = require("../src/domain/lotto/LottoNumber");

describe("NumberGenerator 클래스 테스트", () => {
  test("랜덤 숫자 배열 생성", () => {
    const { min, max } = LottoNumber.RANGE;
    const numbers = NumberGenerator.createRandomNumbers();
    const numbersInRange = Array.from({length: max}, (_, i) => i + min);
    expect(numbersInRange).toEqual(expect.arrayContaining(numbers));
  });
});

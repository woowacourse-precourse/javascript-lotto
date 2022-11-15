const GenerateNumber = require("../src/GenerateNumber");

describe("로또 번호 생성 테스트", () => {
  test("로또 번호 6개 숫자 확인", () => {
    const generateNumber = new GenerateNumber();
    const numbers = generateNumber.generate();
    expect(numbers).toHaveLength(6);
  });
});

describe("로또 번호 생성 테스트", () => {
  test("로또 번호 오름차순 정렬 확인", () => {
    const generateNumber = new GenerateNumber();
    const numbers = generateNumber.generate();
    const sortedNumbers = numbers.sort((pre, cur) => pre - cur);
    expect(numbers).toEqual(sortedNumbers);
  });
});

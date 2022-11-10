const LottoNumber = require("../src/LottoNumber");

describe("로또 번호 생성 테스트", () => {
  test("로또 번호 6개 숫자 확인", () => {
    const makeNumber = new LottoNumber();
    const numbers = makeNumber.make();
    expect(numbers).toHaveLength(6);
  });
});

describe("로또 번호 생성 테스트", () => {
  test("로또 번호 오름차순 정렬 확인", () => {
    const makeNumber = new LottoNumber();
    const numbers = makeNumber.make();
    const sortedNumbers = numbers.sort((pre, cur) => pre - cur);
    expect(numbers).toEqual(sortedNumbers);
  });
});

const LottoFactory = require("../src/LottoFactory");

describe("1 ~ 45사이의 임의의 숫자 6개를 생성후 오름차순으로 정렬한다", () => {
  test("길이, 범위, 숫자여부, 중복, 정렬 점검", () => {
    const lottoFactory = new LottoFactory();
    const numbers = lottoFactory.makeLotto();

    expect(numbers.length).toEqual(6);
    expect(
      numbers.filter((number) => number >= 1 && number <= 45).length
    ).toEqual(6);
    expect(numbers.filter((number) => !isNaN(Number(number))).length).toEqual(
      6
    );
    expect(new Set(numbers).size).toEqual(6);
    expect(
      numbers.filter((number, index) => {
        if (index === 0) return true;
        if (number > numbers[index - 1]) return true;
      }).length
    ).toEqual(6);
  });
});

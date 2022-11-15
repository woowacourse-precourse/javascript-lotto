const MakeLotto = require("../src/utils/MakeLotto");

describe("makeLotto class 테스트", () => {
  test("구입 금액에 맞춰 로또를 발행해야한다.", () => {
    //given
    const lottoMachine = new MakeLotto(8);
    //when
    lottoMachine.makeLotto();
    //then
    expect(lottoMachine.lottoNumbers).toHaveLength(8);
  });
  test("문자열로 변환된 배열을 다시 배열상태로 만든다.", () => {
    //given
    const stringArr = ["[8, 21, 23, 41, 42, 43]", "[3, 5, 11, 16, 32, 38]"];
    //when
    const lottoMachine = new MakeLotto();
    const result = lottoMachine.makeArrayAgain(stringArr);
    //then
    expect(result).toStrictEqual([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
  });
});

const MakeLotto = require("../src/utils/MakeLotto");

describe("로또 클래스 테스트", () => {
  test("구입 금액에 맞춰 로또를 발행해야한다.", () => {
    //given
    const lottoMachine = new MakeLotto(8);
    //when
    lottoMachine.makeLotto();
    //then
    expect(lottoMachine.lottoNumbers).toHaveLength(8);
  });
});

const App = require("../src/App");
const LottoFactory = require("../src/LottoFactory");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

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

describe("입력값 % 1000 개 만큼의 로또를 만들수 있다", () => {
  test("입력값에 따른 로또 객체 생성", () => {
    const app = new App();
    app.makeLottos(5);
    MissionUtils.Console.close();
    expect(app.lottos.get().length).toEqual(5);
    expect(
      app.lottos.get().filter((lotto) => lotto instanceof Lotto).length
    ).toEqual(5);
  });
});

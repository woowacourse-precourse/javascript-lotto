const Lotto = require("../src/Lotto");
const Lottos = require("../src/Lottos");

describe("로또배열 클래스 테스트", () => {
  test("로또의 배열의 size 확인", () => {
    const lottoNum = 3;
    const lottos = Lottos.createLottos(lottoNum);

    expect(lottos.getLottos().length).toEqual(3);
  });

  test("모든 로또의 점수를 생성하는 함수", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const firstLotto = new Lotto([1, 2, 3, 4, 7, 8]);
    const secondLotto = new Lotto([2, 3, 4, 5, 6, 10]);
    const thirdLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottos = new Lottos([firstLotto, secondLotto, thirdLotto]);

    expect(lottos.getLottoScores(winningLotto)).toStrictEqual([4, 5, 6]);
  });
});

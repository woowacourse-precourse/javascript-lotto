const LottoCompany = require("../src/LottoCompany");
const Lotto = require("../src/Lotto");
const { LOTTO_PRICE, WINNING_MONEYS } = require("../src/lib/constants");

describe("로또 발행 테스트", () => {
  test("금액에 맞는 개수만큼 로또를 발행한다.", () => {
    const lottoCompany = new LottoCompany(LOTTO_PRICE, WINNING_MONEYS);
    const lottos = lottoCompany.publishLottos(2000);
    const lottos2 = lottoCompany.publishLottos(5000);
    expect(lottos.length).toBe(2);
    expect(lottos2.length).toBe(5);
  });

  test("로또 가격으로 나누어지지 않는 금액만큼 발행시 오류를 발생시킨다.", () => {
    const lottoCompany = new LottoCompany(1000);

    expect(() => lottoCompany.publishLottos(1500)).toThrow("[ERROR]");
    expect(() => lottoCompany.publishLottos(2500)).toThrow("[ERROR]");
  });
});

describe("당첨 순위 확인 테스트", () => {
  test("당첨 순위를 잘 반환하는지 확인한다.", () => {
    const lottoCompany = new LottoCompany(LOTTO_PRICE, WINNING_MONEYS);
    lottoCompany.setWinningNumbers("1,2,3,4,5,6");
    lottoCompany.setBonusNumber("7");
    const lotto5th = new Lotto([1, 2, 3, 23, 24, 25]);
    const lottoNone = new Lotto([6, 7, 8, 9, 10, 11]);
    const lotto2nd = new Lotto([1, 2, 3, 5, 6, 7]);
    const lotto1st = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lottoCompany.checkResult(lotto5th)).toBe(5);
    expect(lottoCompany.checkResult(lottoNone)).toBe(-1);
    expect(lottoCompany.checkResult(lotto2nd)).toBe(2);
    expect(lottoCompany.checkResult(lotto1st)).toBe(1);
  });
});

describe("정적(부가) 기능 테스트", () => {
  test("숫자를 천의 단위로 끊어서 문자열로 반환하는 기능..", () => {
    expect(LottoCompany.breakInThosands(333555)).toBe("333,555");
    expect(LottoCompany.breakInThosands(1233433598555)).toBe(
      "1,233,433,598,555"
    );
  });

  test("오름차순으로 정렬된 두 개의 배열이 주어질 떄, 같은 수의 개수를 찾는다.", () => {
    const array1 = [1, 4, 9, 10, 16, 29];
    const array2 = [4, 5, 9, 11, 29, 31];
    expect(LottoCompany.countSameNumbersOfAscSortedArrays(array1, array2)).toBe(
      3
    );
  });
});

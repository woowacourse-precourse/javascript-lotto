const LottoCompany = require("../src/LottoCompany");

describe("로또 발행 회사 테스트", () => {
  test("금액에 맞는 개수만큼 로또를 발행한다.", () => {
    const lottoCompany = new LottoCompany(1000);
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

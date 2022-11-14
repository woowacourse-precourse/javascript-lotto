const LottoCompany = require("../src/LottoCompany");
const MissionUtils = require("@woowacourse/mission-utils");

// dummy test codes
// describe("", () => {
//   test("", () => {
//     expect()
//   });
// });

describe("Feat 3. LottoCompany.drawLottoNumber", () => {
  const lottoCompany = new LottoCompany();

  test("로또 당첨 번호를 받아 당첨 번호 전체를 반환한다.", () => {
    expect(lottoCompany.transferIntArray("1,2,3,4,5,6,7")).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test("입력된 로또 당첨 번호가 숫자가 아닌 경우 예외를 반환한다.", () => {
    expect(() => {
      lottoCompany.transferIntArray("a,2,3,4,5,6,7");
    }).toThrow("[ERROR]");
  });
});

const LottoCompany = require("../src/LottoCompany");
const MissionUtils = require("@woowacourse/mission-utils");

// dummy test codes
// describe("", () => {
//   test("", () => {
//     expect()
//   });
// });

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn().mockReturnValue(answer);
};

describe("Feat 4. LottoCompany.drawLottoNumber", () => {
  const lottoCompany = new LottoCompany();

  test("로또 당첨 번호와 보너스 번호를 입력받아 당첨 번호 전체를 반환한다.", () => {
    mockQuestions("1,2,3,4,5,6");
    mockQuestions("7");
    expect(lottoCompany.drawLottoNumber()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("입력된 로또 당첨 번호가 숫자가 아닌 경우 예외를 반환한다.", () => {
    mockRandoms("1,2,3,4,5,A");
    expect(lottoCompany.drawLottoNumber).toThrow("[ERROR]");
  });

  test("입력된 보너스 번호가 숫자가 아닌 경우 예외를 반환한다.", () => {
    mockRandoms("A");
    expect(lottoCompany.drawLottoNumber).toThrow("[ERROR]");
  });
});

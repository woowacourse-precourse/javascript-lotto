const Lotto = require("../src/model/Lotto");

describe("계산 로직 테스트", () => {
  test("','로 나뉜 문자열과 숫자의 객체를 넣으면 결과 객체를 도출한다.", () => {
    const lottoModel = new Lotto({ winningNumber: "1,2,3,4,5,6", bonusNumber: 7 });

    expect(lottoModel.getConvertedLottoNumber()).toEqual({
      winningNumber: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7
    });
  });
  test("','로 나뉜 문자열과 숫자의 객체를 넣으면 결과 객체를 도출한다.", () => {
    const lottoModel = new Lotto({ winningNumber: "10,12,13,14,15,16", bonusNumber: 7 });

    expect(lottoModel.getConvertedLottoNumber()).toEqual({
      winningNumber: [10, 12, 13, 14, 15, 16],
      bonusNumber: 7
    });
  });
});

/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능

  test("1등 당첨 Case에 대한 LottoResult 세팅 테스트",()=>{
    const lotto=new Lotto([1,2,3,4,5,6]);

    lotto.setLottoResult([1,2,3,4,5,6])

    expect(lotto.result.lotto).toBe(6);
  })

  test("BonusNumber 당첨여부 확인",()=>{
    const lotto= new Lotto([1,2,3,4,5,6])

    lotto.setBonusResult(6);

    expect(lotto.result.bonus).toBe(true);
  })
});

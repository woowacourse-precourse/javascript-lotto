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
  test("구입금액이 1000으로 나누어 떨어지지 않은 경우 예외 처리.",()=>{
    expect(() =>{
      new Lotto([1032,40055,20213,12213,13021,28120181])
    }).toThrow("[ERROR]")
  })
  // test("구입금액이 0으로 시작하는 경우.",()=>{
  //   expect(() =>{
  //     new Lotto(['0111','0141','02234','04710','00411','00041705'])
  //   }).toThrow("[ERROR]")
  // })
  test("구입금액에 문자가 있을경우",()=>{
    expect(() =>{
      new Lotto(['ㅁ151','dqw5151','22dw1d','wqd1500','1000a','20000dw'])
    }).toThrow("[ERROR]")
  })
  test("구입금액이 음수일 경우",()=>{
    expect(() =>{
      new Lotto([-1032,-40055,-20213])
    }).toThrow("[ERROR]")
  })
  test("로또 번호가 1~45사이가 아니면 예외 처리", () => {
    expect(() => {
      new Lotto([0, 4, 54, 40, 151, 18000]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호가 문자일 경우 예외", () => {
    expect(() => {
      new Lotto(['a', 4, 'b', 40, 151, 'ㅁ']);
    }).toThrow("[ERROR]");
  });
});

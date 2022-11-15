const Lotto = require("../src/Lotto");
const Exception = require("../src/Exception");

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
  test("로또 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.1, 2.2, 3.3, 4.4, 5.5, 6.6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1-45가 아니면 예외가 발생한다.",()=>{
    expect(()=>{
      new Lotto([1, 2, 3, 4, 5, 46])
    }).toThrow("[ERROR]")   
  })

  test("로또 번호가 숫자가 아니면 예외가 발생한다.",()=>{
    expect(()=>{
      new Lotto(["a", 2, 3, 4, 5, 6])
    }).toThrow("[ERROR]")   
  })

});

describe("로또 구입 금액 에러 테스트",()=>{
  test("로또 구입 금액이 1000단위가 아니면 에러가 발생한다",()=>{
    expect(()=>{
      new Exception().exceptLottoPrice(1234)
    }).toThrow("[ERROR]") 
  })  

  test("로또 구입 금액이 숫자값이 아니면 에러가 발생한다.",()=>{
    expect(()=>{
      new Exception().exceptLottoPrice("abcd")
    }).toThrow("[ERROR]") 
  }) 

  test("로또 구입 금액이 정수값이 아니면 에러가 발생한다.",()=>{
    expect(()=>{
      new Exception().exceptLottoPrice(1234.5)
    }).toThrow("[ERROR]") 
  }) 

})

describe("보너스 번호 에러 테스트",()=>{
  test("당첨 번호와 보너스 번호가 겹치면 예외가 발생한다.",()=>{
    expect(()=>{
      new Exception().exceptBonusNumber([1, 2, 3, 4, 5, 6], 6)
    })
  })

  test("보너스 번호가 1-45가 아니면 예외가 발생한다.",()=>{
    expect(()=>{
      new Exception().exceptBonusNumber([1, 2, 3, 4, 5, 6], 46)
    })
  })

  test("보너스 번호가 정수가 아니면 예외가 발생한다.",()=>{
    expect(()=>{
      new Exception().exceptBonusNumber([1, 2, 3, 4, 5, 6], 7.7)
    })
  })

  test("보너스 번호가 숫자값이 아니면 예외가 발생한다.",()=>{
    expect(()=>{
      new Exception().exceptBonusNumber([1, 2, 3, 4, 5, 6], "a")
    })
  })
})

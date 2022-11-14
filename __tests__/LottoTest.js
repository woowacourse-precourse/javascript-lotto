const Lotto = require("../src/Lotto");
const App = require("../src/App");
const DetectError = require("../src/DetectError");
const { MissionUtils } = require("@woowacourse/mission-utils");
describe("로또 클래스 테스트", () => {

  // // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("숫자와 문자가 섞여있을때 발생하는 예외", () => {
    const find = (str) => {
      n = [...str];
      n.forEach(element => {
          if ( !(element >= '0' && element <= '9') ) {
            throw new Error("[ERROR] 에러 발생");
          }
      });
    };
    expect(find("1000j")).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능

  test("구매가능한 로또 개수를 알려준다.", () => {
    const numberOfAvailablePurchase = (userMoney) => {
      if (!(userMoney % 1000)) {
        return 1;
      }
      throw new Error(`[Error] 천원단위로 입력해주세요`);
    }

    expect(numberOfAvailablePurchase(8000)).toEqual(1);
  });

  test("천원단위로 입력이 되지 않았을때 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.numberOfAvailablePurchase(800)
    }).toThrow("[ERROR]");
  });

  test("보너스 번호와 당첨 번호간의 중복이 발생할때 예외를 발생시킨다.", () => {
    expect(() => {
      const detecterror = new DetectError();
      detecterror.isBonusInPrize(["1","2","3","4","5","6"], "6");
    }).toThrow("[ERROR]");
  });

  test("사용자 구매금액 입력시 숫자가 안됬을때.", () => {
    expect(() => {
      const detecterror = new DetectError();
      detecterror.checkUserInput(parseInt("abc"));
    }).toThrow("[ERROR]");
  });

  test("당첨번호가 범위안의 숫자가 아니거나 or 콤마로 구분되지 않을때 오류를 발생시킨다.", () => {
    expect(() => {
      const detecterror = new DetectError();
      detecterror.checkPrizNumber(["1;2;3;4"]);
    }).toThrow("[ERROR]");

    expect(() => {
      const detecterror = new DetectError();
      detecterror.checkPrizNumber(["1","2","3","4","a","6"]);
    }).toThrow("[ERROR]");
  });
  

  test("총 수익률을 계산해주는 로직", () => {
    let lottoPrize = {
      3: [1, 5000],
      4: [0, 50000],
      5: [0, 1500000],
      6: [0, 30000000],
      7: [0, 2000000000],
    };

    const USER_MONEY = 8000;

    const totalRevenue = (lottoPrize, userMoney) => {
      let sum = 0;
      for (let i = 3; i <= 7; i++) {
        sum += lottoPrize[i][0] * lottoPrize[i][1];
      }
      let revenue = (sum / userMoney) * 100;
      let result = parseFloat(revenue.toFixed(2));
  
      return result;
    }
    expect(totalRevenue(lottoPrize, USER_MONEY)).toEqual(62.5);
    
  });

  test('로또 결과를 계산해주는 로직', () => {
    let lottoPrize = {
      3: [0, 5000],
      4: [0, 50000],
      5: [0, 1500000],
      6: [0, 30000000],
      7: [0, 2000000000],
    };

    let userNum = [1,2,3,4,5,44];
    let prize = ["1", "2", "3", "4", "5", "6"];
    let bonus = "44";

    const makeLottoPrize = (userNum, prize, bonus, lottoPrize) => {
      let cnt = 0;
      for (let i = 0; i < prize.length; i++) {
        const n = parseInt(prize[i]);
        if (userNum.includes(n)) {
          cnt++;
        }
      }
  
      if (cnt === 6) {
        lottoPrize[cnt+1][0] += 1;
      }
      else if (userNum.includes(parseInt(bonus)) && cnt === 5) {
        lottoPrize[cnt + 1][0] += 1;
      } 
      else if (cnt >= 3) {
        lottoPrize[cnt][0] += 1;
      }
      return lottoPrize;
    }

    
    lottoPrize = makeLottoPrize(userNum, prize, bonus, lottoPrize);

    expect(lottoPrize).toEqual({
      3: [0, 5000],
      4: [0, 50000],
      5: [0, 1500000],
      6: [1, 30000000],
      7: [0, 2000000000],
    });

  })



});

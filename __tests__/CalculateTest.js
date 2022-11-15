const Calculate = require("../src/Calculate")

describe("계산 클래스 테스팅", () => {
    const calculate = new Calculate();

    test("돈에 따른 로또 갯수 반환 함수 테스트.", () => {
      expect(()=>{
        calculate.calculateLottoCount(5000).toBe(5);
      })
      expect(()=>{
        calculate.calculateLottoCount(6000).toBe(6);
      })
    })

    test("돈이 1000으로 나누어 떨어지는지 계산하는 함수 테스트.", () => {
        expect(()=>{
          calculate.divideByOneThousand(5000).toBe(true);
        })
        expect(()=>{
          calculate.divideByOneThousand(5500).toBe(false);
        })
    })

    test("수익률 계산후 반환 함수 테스트.", () => {
        expect(()=>{
          calculate.calculateProfit(50000/50000).toBe(100);
        })
        expect(()=>{
          calculate.calculateProfit(500/1000).toBe(50);
        })
    })

    test("수익률 계산후 반환 함수 테스트.", () => {
        expect(()=>{
          calculate.calculateSum([1,1,0,0,0]).toBe(55000);
        })
        expect(()=>{
            calculate.calculateSum([0,0,0,0,0]).toBe(0);
          })
       
    })
    
})
const App = require("../src/App");
const payValidate = require("../src/payValidate");

describe("로또 구입 금액과 등수에 대한 결과 테스트", () => {

    test("로또 번호로 아무것도 입력되지 않으면 예외가 발생한다.", () => {
        expect(() => {
            payValidate("");
        }).toThrow("[ERROR]");
    });

    test("로또 구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            payValidate(['1000k']);
        }).toThrow("[ERROR]");
      });
    
    test("로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            payValidate(['1004']);
        }).toThrow("[ERROR]");
    });

    test("구입 금액에 따른 로또 수량이 틀리면 예외가 발생한다.", () => {
        const app = new App();
        expect(app.calculateTicketNums('3000')).toEqual(3);    
    });

    test("로또 한 줄에서 정답으로 일치하는 횟수가 틀리면 예외가 발생한다.", () => {
        const app = new App();
        const winningNums = [1, 2, 3, 4, 5, 6];
        const oneLine = [1, 3, 4, 5, 9, 11]; //4개 일치
        expect(app.countAnswerNums(oneLine, winningNums)).toEqual(4);    
    });

    test("로또 등수에 따른 횟수가 틀리면 예외가 발생한다.", () => {
        const app = new App();
        const rankList = [5, 0, 4, 0, 0, 0];
        expect(app.countRank(rankList)).toEqual([1, 1, 0, 0, 0]);    
    }); 
 
    test("로또 수익률이 틀리면 예외가 발생한다.", () => {
        const app = new App();
        expect(app.calculateProfitRate(10000, 8000)).toEqual("125.0");    
    }); 

});

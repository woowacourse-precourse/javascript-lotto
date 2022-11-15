const App = require("../src/App");
const BonusNumber = require("../src/BonusNumber");
const Lotto = require("../src/Lotto");
const Money = require("../src/Money");

describe("App 클래스 테스트", () => {
    test("발행된 로또 장수 테스트", () => {
        let app = new App();
        app.input_money = new Money(8000);
        app.countLotto();
        const result = app.lottocount;
        expect(result).toEqual(8);
    });

    test("결과 계산 테스트", () => {
        let app = new App();
        app.lottotickets = [new Lotto([1,2,3,4,5,7])];
        app.input_lotto = new Lotto([1,2,3,4,5,6]);
        app.input_bonus = new BonusNumber(7,[1,2,3,4,5,6]);
        app.calResults();
        const result = app.results;
        expect(result).toEqual([0,0,0,1,0]);
    });

    test("한 로또 티켓당 번호가 몇개 맞았는지 계산하는 기능 테스트", () => {
        let app = new App();
        const result  = app.countMatch([1,2,3,4,5,6],[1,2,3,4,6,7]);
        expect(result).toEqual(5);
    });
    
    test("총 수익률을 계산하는 기능 테스트", () => {
        let app = new App();
        app.results = [0,1,0,0,0];
        app.lottocount = 5;
        app.calRevenue();
        const result  = app.revenue;
        expect(result).toEqual("1000.0");
    });
});

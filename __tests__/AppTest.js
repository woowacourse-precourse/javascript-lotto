/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
const App = require("../src/App");

describe("App 클래스 테스트", () => {

    test("LottoCount를 정확하게 계산하는가에대한 테스트", () => {
        const app= new App();
        app.getLottoCount(3000)

      expect(app.lottoCount).toBe(3);
    });
})
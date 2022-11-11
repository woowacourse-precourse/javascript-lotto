const MissionUtils = require("@woowacourse/mission-utils");
const AWARDDATA = require("./AWARDDATA");

class Print {
  #object = {};
  //로또 일치 개수 객체 출력
  haveObject(correctArr) {
    let object = {};
    for (let index = 3; index < 7; index += 1) {
      object[index] = 0;
    }
    object[5.5] = 0;
    correctArr.forEach((element) => {
      switch (element) {
        case 3:
          object[element] += 1;
          break;
        case 4:
          object[element] += 1;
          break;
        case 5:
          object[element] += 1;
          break;
        case 6:
          object[element] += 1;
          break;
        case 7:
          object[element] += 1;
          break;
        default:
          break;
      }
    });
    return (this.#object = object);
  }
  // 상금 개수와 일치 개수에 따라 출력한다.
  doPrint() {
    for (let index = 3; index < 7; index += 1) {
      MissionUtils.Console.print(
        `${index}개 일치 (${AWARDDATA[index]}원) - ${this.#object[index]}개`
      );
      if (index === 5) {
        MissionUtils.Console.print(
          `${index}개 일치, 보너스 볼 일치 (${AWARDDATA[5.5]}원) - ${
            this.#object[5.5]
          }개`
        );
      }
    }
    //종료
    MissionUtils.Console.close();
  }
}
module.exports = Print;

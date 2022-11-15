const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("../Validator");
const console = require("./console");

class input extends console {
  fee(message = "") {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (fee) => {
        if (!Validator.isRightFee(+fee)) {
          reject(new Error("[ERROR] 올바른 금액 입력이 아닙니다."));
        }
        resolve(+fee);
      });
    });
  }

  handleInput(predicate, errorMessage, message = "") {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (answer) => {
        if (predicate(answer)) {
          resolve(answer);
        }
        reject(errorMessage);
      });
    });
  }
}

module.exports = input;

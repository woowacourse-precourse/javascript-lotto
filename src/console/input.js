const MissionUtils = require("@woowacourse/mission-utils");
const TypeConverter = require("../util/TypeConverter");
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

  hitNumber(message = "") {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (answer) => {
        answer = TypeConverter.stringToArray(answer, ",");

        if (Validator.isRightLottoNumbers(answer)) {
          resolve(answer);
        }
        reject("error");
      });
    });
  }

  bonus(hitNumbers, message = "") {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, (answer) => {
        answer = TypeConverter.stringToNumber(answer);

        if (
          Validator.isRightLottoNumber(answer) &&
          Validator.isNumberInArray(hitNumbers, answer)
        ) {
          resolve(answer);
        }
        reject("error");
      });
    });
  }
}

module.exports = input;

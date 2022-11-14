const setting = require('./LottoGame');
const prefix = '[ERROR]';

module.exports = Object.freeze({
   lottoRange: `${prefix} 로또 번호는 1부터 ${setting.gameSetting.maxNumber} 사이의 ${setting.gameSetting.length}자리 숫자여야 합니다.`,
   duplicatedNumber: `${prefix} 로또 번호는 중복될 수 없습니다.`,
   noComma: `${prefix} 구입 금액 입력 시 콤마(,)는 제외하고 입력해주세요.`,
   minUnitPrice: `${prefix} 금액은 ${setting.gameSetting.minPrice}원 단위로 숫자만 입력해주세요.`,
   minLottoPrice: `${prefix} 로또 구입의 최소 금액은 ${setting.gameSetting.minPrice}원 입니다.`,
   bonusRange:`${prefix} 보너스 번호는 1~${setting.gameSetting.maxNumber}사이의 숫자이여야 합니다.`,
   duplicatedBonus:`${prefix} 보너스 번호는 당첨 번호와 중복이 되어서는 안됩니다.`,


})
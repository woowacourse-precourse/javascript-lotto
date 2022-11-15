class ErrorMessage {
	static ERROR_PREFIX = '[ERROR] ';

	static LOTTO_NOT_SIX = this.ERROR_PREFIX + '로또 번호는 6개여야 합니다.';
	static LOTTO_NOT_UNIQUE = this.ERROR_PREFIX + '로또 번호는 중복될 수 없습니다.';
	static LOTTO_NOT_NUMBER = this.ERROR_PREFIX + '로또 번호에 문자가 포함될 수 없습니다.';
	static LOTTO_NOT_IN_VALID_RANGE = this.ERROR_PREFIX + '로또 번호의 범위는 1~45입니다.';

	static BONUS_NOT_NUMBER = this.ERROR_PREFIX + '보너스 번호에 문자가 포함될 수 없습니다.';
	static BONUS_NOT_IN_VALID_RANGE = this.ERROR_PREFIX + '보너스 번호의 범위는 1~45입니다.';
	static BONUS_DUPLICATE = this.ERROR_PREFIX + '보너스 번호는 로또 번호와 중복될 수 없습니다.';

	static INVEST_NOT_THOUSAND =
		this.ERROR_PREFIX + '구입금액이 1,000원으로 나누어 떨어지지 않습니다.';
	static INVEST_NOT_NUMBER = this.ERROR_PREFIX + '구입금액에 문자가 포함될 수 없습니다.';
}

module.exports = ErrorMessage;

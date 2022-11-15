const REGEXP_KOREAN_MONEY_COMMA_LOCATION = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
const ONLY_NUMBER = /^[0-9]+$/;

module.exports = { REGEXP_KOREAN_MONEY_COMMA_LOCATION, ONLY_NUMBER };

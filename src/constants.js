const question = Object.freeze({
  purchaseAmout: '구입금액을 입력해 주세요.'
});

const errMsg = Object.freeze({
  invalidPurchaseAmout: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  invalidLottoNumber: '[ERROR] 로또 번호는 6개여야 합니다.'
});

const purchaseAmountRegex = /^[1-9][0-9]*0{3}$/;

module.exports = { question, purchaseAmountRegex, errMsg };

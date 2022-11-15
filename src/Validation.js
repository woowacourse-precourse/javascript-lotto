const Text = require("./Text");

class Validation {
  isBonusInclude(win, bonus) {
    if (bonus.length === 0) {
      throw new Error(`${Text.ERROR_TEXT.BLANK}`);
    }

    if (win.incldues(bonus)) {
      throw new Error(`${Text.ERROR_TEXT.REPEAT}`);
    }

    this.isNumberString(bonus.toString());
  }

  validUserPurchase(userPurchase) {
    if ([...userPurchase].length === 0) {
      throw new Error(`${Text.ERROR_TEXT.BLANK}`);
    }
  }

  validLottoNumber(lotto) {
    if (lotto.length !== 6) {
      throw new Error(`${Text.ERROR_TEXT.COMMA}`);
    }

    lotto.forEach((lottos) => {
      this.isNumberString(lottos);
    });

    lotto.forEach((lottos) => {
      var lottoNum = +lottos;
      if (lottoNum < 1 || lottoNum > 45 || !lottoNum) {
        throw new Error(`${Text.ERROR_TEXT.LIMIT}`);
      }
    });
  }

  isNumberString(lotto) {
    var idx = 0;
    [...lotto].forEach((lottos) => {
      if (lottos === "0" && idx === 0) {
        throw new Error(`${Text.ERROR_TEXT.BLANK}`);
      }
      if (!(lottos >= "0" && lottos <= "9")) {
        throw new Error(`${Text.ERROR_TEXT.BLANK}`);
      }
      idx++;
    });
  }
}

module.exports = Validation;

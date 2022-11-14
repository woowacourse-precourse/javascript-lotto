const GameInput = require('../views/GameInput');
const GameOutput = require('../views/GameOutput');
const PlayerService = require('../services/PlayerService');
const Player = require('../models/Player');
const PrintableLottos = require('../services/PrintableLottos');
const LottoService = require('../services/LottoService');
const Lotto = require('../models/Lotto');
const SixNumbersService = require('../services/SixNumbersService');
const SixNumbers = require('../models/SixNumbers');
const BonusService = require('../services/BonusService');
const Bonus = require('../models/Bonus');
const Console = require('../utils/Console');
const ProfitCalculator = require('../services/ProfitCalculator');

class Game {
  #instance = {};

  playLotto() {
    GameInput.enter(GameOutput.message.purchaseAmount, this.#purchaseLotto.bind(this));
  }

  #purchaseLotto(purchaseAmount) {
    this.#instance.player = new Player(PlayerService.purchaseLotto(purchaseAmount));

    this.#printPurchaseResult();
  }

  #printPurchaseResult() {
    GameOutput.printLottos({
      quantity: this.#instance.player.getPlayersLottos().quantity,
      lottos: PrintableLottos.convert(this.#instance.player.getPlayersLottos().lottos),
    });

    GameInput.enter(GameOutput.message.sixNumbers, this.#registerSixNumbers.bind(this));
  }

  #registerSixNumbers(sixNumbers) {
    this.#instance.sixNumbers = new SixNumbers(SixNumbersService.setSixNumbers(sixNumbers));

    GameInput.enter(GameOutput.message.bonus, this.#registerBonus.bind(this));
  }

  #registerBonus(rowDataOfBonus) {
    this.#instance.bonus = new Bonus(
      BonusService.setBonus(rowDataOfBonus, this.#instance.sixNumbers.getSixNumbers())
    );

    this.#calculateLottoResult();
  }

  #calculateLottoResult() {
    this.#instance.lotto = new Lotto(this.#instance.sixNumbers.getSixNumbers());
    const result = LottoService.calculateGradeResult({
      lottos: this.#instance.player.getPlayersLottos().lottos,
      bonus: this.#instance.bonus.getBonus(),
      numbers: this.#instance.sixNumbers.getSixNumbers(),
    });

    this.#printResult(result);
  }

  #printResult(result) {
    const profit = ProfitCalculator.calculate({
      result,
      purchaseAmount: this.#instance.player.getPlayersLottos().purchaseAmount,
    });
    GameOutput.printResult({
      result,
      profit,
    });

    this.#endGame();
  }

  #endGame() {
    Console.close();
  }
}

module.exports = Game;

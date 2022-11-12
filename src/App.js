const PurchasePrice=require('./PurchasePrice')

class App {
  constructor() {}

  play() {

    PurchasePrice.getPurchasePrice()
    
  }

  

}

module.exports = App

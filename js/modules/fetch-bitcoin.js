export default class initFetchBitcoin {
  fetch(elementBitcoin) {
    fetch("https://blockchain.info/ticker")
      .then((Response) => Response.json())
      .then((bitcoin) => {
        const btcPreco = document.querySelector(elementBitcoin);
        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      })
      .catch((error) => {
        console.log(Error(error));
      });
  }
  init() {
    this.fetch(".btc-preco");
  }
}

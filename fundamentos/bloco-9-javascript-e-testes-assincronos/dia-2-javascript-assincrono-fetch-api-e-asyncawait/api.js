// api.js
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
    return coins;
  }

  // parte bonus 
  const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);
  
    const usdCurrencies = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.usd)
      .catch((error) => error.toString());
  
    return usdCurrencies;
  };

  //parte bonus acima 
  
  const setCoins = async () => {
    const coins = await fetchCoins();
  
    const coinsList = document.getElementById('coins-list');
  
    coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
  
      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
  
      coinsList.appendChild(newLi);
    });
  }
  
  window.onload = () => setCoins();

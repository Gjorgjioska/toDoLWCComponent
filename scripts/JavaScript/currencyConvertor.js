function convertCurrency(amount, fromCurrency, toCurrency) {
   
   //stapka na konverzacija 
    // conversion rates 
    const rates = {
      EUR: 1,
      USD: 1.06,
      GBP: 0.88,
    };
  
    // convert from fromCurrency to EUR
    let amountInEur = amount / rates[fromCurrency];
    // convert from EUR to toCurrency
    let convertedAmount = amountInEur * rates[toCurrency];
  
    return convertedAmount;
  }
  
  
  console.log(convertCurrency(200, 'EUR', 'USD')); 
  console.log(convertCurrency(200, 'USD', 'GBP'));
  console.log(convertCurrency(200, 'GBP', 'EUR')); 
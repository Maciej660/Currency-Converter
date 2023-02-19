let formElement = document.querySelector(".js-form");
let quanityElement = document.querySelector(".js-quantity");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.71;
let rateUSD = 4.33;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let quantity = +quanityElement.value;
    let currency = currencyElement.value;

    let result;

    
    switch (currency) {
        case "EUR":
          result = quantity / rateEUR;
          break;
        case "USD":
          result = quantity / rateUSD;
      }
      resultElement.value = result.toFixed(2);
        });
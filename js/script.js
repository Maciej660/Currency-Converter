const formElement = document.querySelector(".js-form");
const quanityElement = document.querySelector(".js-quantity");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const rateEUR = 4.71;
const rateUSD = 4.33;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const quantity = +quanityElement.value;
    const currency = currencyElement.value;

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
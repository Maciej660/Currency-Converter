{
 
const calculateResult = (quantity, currency) => {  
  const rateEUR = 4.71;
const rateUSD = 4.33;

  switch (currency) {
  case "EUR":
    return quantity / rateEUR;
  
  case "USD":
    return quantity / rateUSD;
  }
};

const updateResultText = (result) => {  
  const resultElement = document.querySelector(".js-result"); 
   resultElement.value = result.toFixed(2);
}

const onFormSubmit = (event) => {
  event.preventDefault();

  const quanityElement = document.querySelector(".js-quantity");
  const currencyElement = document.querySelector(".js-currency");

  const quantity = +quanityElement.value;
  const currency = currencyElement.value;

  const result = calculateResult (quantity, currency);
  
  updateResultText(result)


      };

const init =() => {
const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", onFormSubmit);
};
init();

}
const btnaddMoney = document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addamountInput = document.getElementById("add-amount-input").value;

    const pinNumber = document.getElementById("pin-number").value;
    console.log(addamountInput, pinNumber);
  });

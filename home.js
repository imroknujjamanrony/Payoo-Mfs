const btnaddMoney = document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addamountInput = document.getElementById("add-amount-input").value;

    const pinNumber = document.getElementById("pin-number").value;
    if (pinNumber === "3450") {
      console.log("adding money to your account");
      const crntbalance = document.getElementById("current-balance").innerText;
      const newaddmoney = parseFloat(addamountInput);
      const newcrntbalance = parseFloat(crntbalance);
      const newBalance = newaddmoney + newcrntbalance;
      console.log(newBalance);
      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("failed to add money ! please try again");
    }
  });

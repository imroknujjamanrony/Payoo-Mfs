document
  .getElementById("btn-cashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutamount = document.getElementById("cashout-amount-input").value;
    const cashoutpin = document.getElementById("cashout-pin").value;
    if (cashoutpin === "3450") {
      console.log("Cashout succesful");
    } else {
      alert("cashout unsuccessful !");
    }
  });

document
  .getElementById("btn-cashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutamount = document.getElementById("cashout-amount-input").value;
    const cashoutpin = document.getElementById("cashout-pin-number").value;
    if (cashoutpin === "3450") {
      console.log("Cashout succesful");
      const crntblnce = document.getElementById("current-balance").innerText;
      const newamount = crntblnce - cashoutamount;
      console.log(newamount);
      const newBalance = (document.getElementById("current-balance").innerText =
        newamount);
    } else {
      alert("cashout unsuccessful !");
    }
  });

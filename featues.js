document
  .getElementById("btn-cashoutMoney")
  .addEventListener("click", function () {
    const cashoutform = document
      .getElementById("cash-out-form")
      .classList.remove("hidden");
    const addmoneyform = document
      .getElementById("addMoney-form")
      .classList.add("hidden");
  });

// show addmoney btn

document.getElementById("btn-addMoney").addEventListener("click", function () {
  const addmoneyform = document
    .getElementById("addMoney-form")
    .classList.remove("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
});

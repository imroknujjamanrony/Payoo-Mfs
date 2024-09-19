const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pin = document.getElementById("pin").value;
    console.log(phoneNumber, pin);
    if ((phoneNumber === "01314267382") & (pin === "1234")) {
      console.log("You are logged in");
      window.location.href = "./home.html";
    } else {
      alert("wrong number or pin");
    }
  });

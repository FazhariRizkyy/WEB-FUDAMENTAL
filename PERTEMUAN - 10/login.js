$(document).ready(function () {
  function generateCaptcha() {
    var firstNumber = Math.floor(Math.random() * 5);
    var secondNumber = Math.floor(Math.random() * 5);
    $("#firstNumber").text(firstNumber);
    $("#secondNumber").text(secondNumber);
  }

  $("#loginButton").click(function () {
    window.location.href = "/CV.html";
  });

  $("#loginButton").click(function () {
    var dbemail = "user@mail.com";
    var dbpass = "user";
    var email = $("#inputEmail").val();
    var pass = $("#inputPassword").val();
    var captchaResult = parseInt($("#captchaResult").val());
    var firstNumber = parseInt($("#firstNumber").text());
    var secondNumber = parseInt($("#secondNumber").text());

    if (dbemail === email && dbpass === pass) {
      if (captchaResult === firstNumber + secondNumber) {
        alert("Login Success");
      } else {
        alert("UPS Captcha salah");
      }
    } else {
      alert("Invalid Email or Password");
    }
  });

  $("#captchaResult").focus();
  generateCaptcha();
});

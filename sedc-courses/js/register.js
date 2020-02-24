function registerUser(e) {
  e.preventDefault();
  var form = e.target;
  var email = form.email.value;
  var password = form.password.value;

  if (email == "" || password == "") {
    document.querySelector("p.error").innerText =
      "Please fill in all the inputs";
    return;
  }

  var userInfo = {
    email: email,
    password: password,
    returnSecureToken: true
  };

  var url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("OVA E THEN");
      console.log(data);
      location.assign("../login.html");
    })
    .catch(function(error) {
      console.log("OVA E CATCH");
      console.log(error);
    });
}

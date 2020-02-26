function registerUser(e) {
  e.preventDefault();
  var form = e.target;
  var email = form.email.value;
  var password = form.password.value;
  var errorParagraph = document.querySelector("p.error");

  if (email == "" || password == "") {
    errorParagraph.innerText = "Please fill in all the inputs";
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
      if (data.error !== undefined) {
        var errorMessage = data.error.message.replace(/_/g, " ").toLowerCase();
        errorParagraph.innerText = errorMessage;
        return;
      }

      location.assign("../login.html");
    })
    .catch(function(error) {
      if (error == "TypeError: Failed to fetch") {
        errorParagraph.innerText = "No internet connection";
      } else {
        errorParagraph.innerText = "Some critical error!";
      }
    });
}

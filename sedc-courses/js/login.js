function login(e) {
  e.preventDefault();
  var form = e.target;
  var email = form.email.value;
  var password = form.password.value;
  var errorParagraph = document.querySelector("p.error");
  var isValid = isFormValid(email, password, errorParagraph);

  if (!isValid) {
    return;
  }
  var url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";

  var loginInfo = {
    email: email,
    password: password,
    returnSecureToken: true
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(loginInfo)
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

      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.idToken);
      localStorage.setItem(
        "expiresIn",
        new Date().getTime() + Number(data.expiresIn) * 1000
      );

      console.log(data);
      location.replace("index.html");
    })
    .catch(function(error) {
      console.log(error);
    });
}

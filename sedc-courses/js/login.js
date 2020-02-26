function login(event) {
  event.preventDefault();

  var form = event.target;
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
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.error) {
        document.querySelector(
          "p.error"
        ).innerText = data.error.message.replace(/_/g, " ");
        return;
      }

      const now = new Date();
      const expirationDate = new Date(now.getTime() + data.expiresIn * 1000);
      localStorage.setItem("token", data.idToken);
      location.replace("/index.html");
    })
    .catch(function(error) {
      console.log("OVA E CATCH");
      console.log(error);
    });
}

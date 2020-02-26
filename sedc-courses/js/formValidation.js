function isFormValid(email, password, errorParagraph) {
  if (email == "") {
    errorParagraph.innerText = "Email field is required";
    return false;
  }

  var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!emailRegex.test(email)) {
    errorParagraph.innerText = "Email is invalid";
    return false;
  }

  if (password == "") {
    errorParagraph.innerText = "Password field is required";
    return false;
  }

  if (password.length < 6) {
    errorParagraph.innerText = "Password needs to be 6 characters";
    return false;
  }

  return true;
}

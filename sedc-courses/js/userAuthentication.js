//Check if the user is logged in
//If the user is not logged in take him to login page
//else let him stay on the page
var email = localStorage.getItem("email");
if (email === null) {
  location.replace("login.html");
}

var token = localStorage.getItem("token");
if (token === null) {
  location.replace("login.html");
}

var expiresIn = localStorage.getItem("expiresIn");
if (expiresIn === null || expiresIn <= new Date().getTime()) {
  location.replace("login.html");
}

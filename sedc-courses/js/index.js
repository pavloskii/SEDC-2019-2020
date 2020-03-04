//Sets the logged in user in the navigation
document.getElementById("nav-email").innerText = email;

//Fills in the container with courses
var allCourses;
var token = localStorage.getItem("token");
getAllCourses();

function getAllCourses() {
  fetch("https://sedcohrid.firebaseio.com/courses.json?auth=" + token)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.error) {
        alert(data.error);
        return;
      }
      allCourses = Object.keys(data).map(function(key) {
        var newElement = {
          id: key,
          assistant: data[key].assistant,
          mentor: data[key].mentor,
          description: data[key].description,
          image: data[key].image,
          name: data[key].name
        };
        return newElement;
      });
      drawCoursesInHTML(allCourses);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function drawCoursesInHTML(arrayOfCourses) {
  arrayOfCourses.forEach(function(course) {
    var card = createCardElement(
      course.image,
      "SEDC Course",
      course.name,
      course.description,
      "../course.html?id=" + course.id
    );

    document.getElementById("courses").append(card);
  });
}

function logout(event) {
  // event.preventDefault();
  localStorage.removeItem("email");
  // location.replace("../login.html");
}

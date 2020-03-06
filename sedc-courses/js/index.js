//Sets the logged in user in the navigation
document.getElementById("nav-email").innerText = email;

//Fills in the container with courses
var allCourses;
getAllCourses();

function getAllCourses() {
  fetch("https://sedcohrid.firebaseio.com/courses.json?auth=" + token)
    .then(res => {
      return res.json();
    })
    .then(function(data) {
      if (data.error) {
        alert(data.error);
        return;
      }
      allCourses = Object.keys(data).map(key => {
        var newElement = {
          id: key,
          ...data[key]
        };
        return newElement;
      });
      drawCoursesInHTML(allCourses);
    })
    .catch(error => {
      console.log(error);
    });
}

function drawCoursesInHTML(arrayOfCourses) {
  arrayOfCourses.forEach(course => {
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

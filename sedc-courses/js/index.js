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
  var container = document.getElementById("courses");
  container.innerHTML = "";

  arrayOfCourses.forEach(course => {
    var card = createCardElement(
      course.image,
      "SEDC Course",
      course.name,
      course.description,
      "../course.html?id=" + course.id
    );

    container.append(card);
  });
}

function logout(event) {
  // event.preventDefault();
  localStorage.removeItem("email");
  // location.replace("../login.html");
}

function sortBy(property, direction) {
  allCourses.sort((a, b) => {
    if (a[property].toLowerCase() < b[property].toLowerCase()) {
      return direction == "asc" ? -1 : 1;
    }

    if (a[property].toLowerCase() > b[property].toLowerCase()) {
      return direction == "asc" ? 1 : -1;
    }

    return 0;
  });

  drawCoursesInHTML(allCourses);
}

function sortByDirection(direction) {
  document.getElementById;
  sortBy();
}

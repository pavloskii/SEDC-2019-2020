var allCourses;

getAllCourses();

function getAllCourses() {
  fetch("https://sedcohrid.firebaseio.com/courses.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
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

  // document.body.innerHTML = "<div></div>";
}

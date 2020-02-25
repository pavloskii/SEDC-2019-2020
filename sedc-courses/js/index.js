var allCourses;
getAllCourses();

function getAllCourses() {
  fetch("https://sedcohrid.firebaseio.com/courses.json")
    .then(res => res.json())
    .then(data => {
      allCourses = Object.keys(data).map(key => {
        return {
          ...data[key],
          id: key
        };
      });

      drawCoursesInHTML(allCourses);
    })
    .catch(error => console.log(error));
}

function drawCoursesInHTML(coursesArray) {
  coursesArray.forEach(course => {
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
        <img src="${course.image}" class="card-img-top" alt="course">
        <div class="card-body">
            <h5 class="card-title">${course.name}</h5>
            <p class="card-text">${course.description}</p>
            <a href="course.html?id=${course.id}" class="btn btn-primary">Show more..</a>
        </div>
    `;
    document.getElementById("courses").append(cardDiv);
  });
}

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
    var card = document.createElement("div");
    card.className = "card";

    var imageElement = document.createElement("img");
    imageElement.src = course.image;
    imageElement.alt = "SEDC Course";
    imageElement.className = "card-img-top";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = course.name;

    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = course.description;

    var anchor = document.createElement("a");
    anchor.className = "btn btn-primary";
    anchor.href = "../course.html?id=" + course.id;
    anchor.innerText = "Show more...";

    card.append(imageElement, cardBody);
    cardBody.append(cardTitle, cardText, anchor);
    document.getElementById("courses").append(card);
  });
}

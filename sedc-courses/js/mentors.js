var mentors;
getAllMentors();

function getAllMentors() {
  fetch("https://sedcohrid.firebaseio.com/mentors.json")
    .then(res => res.json())
    .then(data => {
      mentors = Object.keys(data).map(key => {
        return {
          ...data[key],
          id: key
        };
      });

      drawMentorsInHTML(mentors);
    })
    .catch(error => console.log(error));
}

function drawMentorsInHTML(arrayOfMentors) {
  arrayOfMentors.forEach(m => {
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
        <img src="${m.image}" class="card-img-top" alt="course">
        <div class="card-body">
            <h5 class="card-title">${m.name}</h5>
            <p class="card-text">${m.description}</p>
            <a href="course.html?id=${m.id}" class="btn btn-primary">Show more..</a>
        </div>
    `;
    document.getElementById("mentors").append(cardDiv);
  });
}

function createCardElement(imageSrc, imageAlt, name, description, anchorHref) {
  var card = document.createElement("div");
  card.className = "card";

  var imageElement = document.createElement("img");
  imageElement.src = imageSrc;
  imageElement.alt = imageAlt;
  imageElement.className = "card-img-top";

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = name;

  var cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = description;

  var anchor = document.createElement("a");
  anchor.className = "btn btn-primary";
  anchor.href = anchorHref;
  anchor.innerText = "Show more...";

  cardBody.append(cardTitle, cardText, anchor);
  card.append(imageElement, cardBody);

  return card;
}

function createCardElementWithString(image, desc, name, id) {
  var cardHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="SEDC">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${desc}</p>
        <a href="mentor.html?id=${id}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `;

  return cardHTML;
}

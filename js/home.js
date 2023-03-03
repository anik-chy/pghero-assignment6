// debuging function
function cl(anything) {
  console.log(anything);
}

// fetch the whole list
fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => displayAiCards(data))
  .catch((error) => console.log(error));

// extract features and make list
function extractFeList(card) {
  return card.features.reduce((previous, current) => {
    return previous + "<li>" + current + "</li>";
  }, "");
}

// show all data toggle
function showAll() {
  // fetch the whole list and display all Ai cards
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayAiCards(data, true))
    .catch((error) => console.log(error));

  //removing the button
  showBtn = document.getElementById("show-all-sec");
  showBtn.classList.add("d-none");
}

// display card data
const displayAiCards = (data, showAllTigger = false) => {
  const cardContainer = document.getElementById("card-container");
  // cardContainer.textContent = '';

  //display 6 cards
  if (showAllTigger) {
    cards = data.data.tools;
  } else {
    cards = data.data.tools.slice(0, 6);
  }

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    featureStr = extractFeList(card);
    //cl(featureStr);
    cardDiv.innerHTML = `
        <div class="card h-100">
            <img src="${card.image}" class="card-img-top h-50">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>${featureStr}</ol>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center p-3">
                <div>
                    <h6 class="card-title">${card.name}</h6>
                    <i class="bi bi-calendar-week"></i>
                    <small class="text-muted">${card.published_in}</small>
                </div>
                <div>
                    <button type="button" class="btn btn-light" onclick=""><i class="bi bi-arrow-right-circle"></i></button>    
                
                </div>
            </div>
        </div>
          `;
    cardContainer.appendChild(cardDiv);
  });
};

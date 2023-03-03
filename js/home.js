// debuging function
function cl(anything) {
  console.log(anything);
}

showAllFlag = false;
isSorted = false;

// fetch the whole list
fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => displayAiCards(data.data.tools))
  .catch((error) => console.log(error));

// extract features and make list
function extractFeList(card) {
  return card.features.reduce((previous, current) => {
    return previous + "<li>" + current + "</li>";
  }, "");
}

// display card data
const displayAiCards = (data) => {
  // start spinner or loader
  toggleSpinner(true);

  //prepare the card container
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";

  //display 6 cards
  if (showAllFlag) {
    cards = data;
  } else{
    cards = data.slice(0, 6);
  }

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    featureStr = extractFeList(card);
    
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
  // stop spinner or loader
  toggleSpinner(false);
};

// spinner function
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

// show all data toggle
function showAll() {
  // start spinner or loader
  toggleSpinner(true);

  //set the flag
  showAllFlag = true;

  if(isSorted)
  {
    sortByDate();
  }
  else{
      // fetch the whole list and display all Ai cards
      fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => displayAiCards(data.data.tools))
        .catch((error) => console.log(error));
  }

  //removing the button
  showBtn = document.getElementById("show-all-sec");
  showBtn.classList.add("d-none");
}


// sort the data by date created
function sortByDate() {
  // set tht flag
  isSorted = true;
  document.getElementById("btnSort").disabled = true;
  // fetch the whole list
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayAiCards(data.data.tools.sort((c1,c2)=>(Date.parse(c1.published_in) < Date.parse(c2.published_in)) ? 1 : (Date.parse(c1.published_in) > Date.parse(c2.published_in)) ? -1 : 0)))
    .catch((error) => console.log(error));
}

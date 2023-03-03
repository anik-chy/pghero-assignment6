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
function extractFeList(card){
    return card.features.reduce((previous,current)=>{
        return previous+'<li>'+current+'</li>';
    },'');
}
// display card data
const displayAiCards = (data) => {
  const cardContainer = document.getElementById("card-container");
  // cardContainer.textContent = '';

  //display 6 cards
//   cards = data.data.tools.slice(0, 6);
    cards = data.data.tools;

  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    featureStr = extractFeList(card);
    cl(featureStr);
    cardDiv.innerHTML = `
        <div class="card h-100">
            <img src="${card.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>${featureStr}</ol>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
          `;
    cardContainer.appendChild(cardDiv); 
  });
};

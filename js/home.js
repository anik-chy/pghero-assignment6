// debuging function
function cl(anything) {
  console.log(anything);
}
// fetch the whole list
fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => displayAiCards(data))
  .catch((error) => console.log(error));

// display card data
const displayAiCards = (data) => {
  const cardContainer = document.getElementById("card-container");
  // cardContainer.textContent = '';

  //display 6 cards
  cards = data.data.tools.slice(0, 6);

  cards.forEach(card => {
    cl("anik");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
        <div class="card h-100">
            <img src="${card.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
          `;
    cardContainer.appendChild(cardDiv); 
  });
};

function showModal(id) {
  urlStr = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(urlStr)
    .then((res) => res.json())
    .then((data) => generateModal(data))
    .catch((error) => console.log(error));
}

function generateModal(data) {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.textContent = "";

  const modalBody1 = document.createElement("div");
  modalBody1.classList.add("col");

  modalBody1.innerHTML = `
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    `;
  modalContainer.appendChild(modalBody1);

  const modalBody2 = document.createElement("div");
  modalBody2.classList.add("col");

  modalBody2.innerHTML = `
      <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
      </div>
      `;
  modalContainer.appendChild(modalBody2);
}

function showModal(id) {
  if (id < 10) {
    id = "0" + id;
  }
  const urlStr = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
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
        <div class="card-body bg-info">
            <h5 class="card-title">${data.data.description}</h5>
            <div class="d-flex text-center justify-content-center">
                <p class="btn-light p-3 m-2 rounded">10/month<br>Basic</p>
                <p class="btn-light p-3 m-2 rounded">10/month<br>Basic</p>
                <p class="btn-light p-3 m-2 rounded">10/month<br>Basic</p>
            </div>
            <div class="d-flex justify-content-between">
                <div>
                    <h5>Features</h5>
                    <ul></ul>
                </div>
                <div>
                    <h5>Integrations</h5>
                    <ul></ul>
                </div>
            </div>
        </div>
    </div>
    `;
  modalContainer.appendChild(modalBody1);

  const modalBody2 = document.createElement("div");
  modalBody2.classList.add("col");

  modalBody2.innerHTML = `
      <div class="card">
          <img src="${data.data.image_link[0]}" class="card-img-top">
          <div class="card-body text-center">
              <h5 class="card-title">${data.data.input_output_examples[0].input}</h5>
              <p class="card-text">${data.data.input_output_examples[0].output}</p>
          </div>
      </div>
      `;
  modalContainer.appendChild(modalBody2);
}

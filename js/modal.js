function showModal(id) {
  cl(id)
    if (id < 10) {
    id = "0" + id;
  }
  const urlStr = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(urlStr)
    .then((res) => res.json())
    .then((data) => generateModal(data))
    .catch((error) => console.log(error));
}

// extract modal integrations and make list
function extractModalInList(data) {
    const tempIntegration = data.data.integrations;
    let integrationString = '';
    if(!tempIntegration)
    {
        return 'No data Found';
    }
    else{
        return tempIntegration.reduce((previous, current) => {
            return previous + '<li>' + current + '</li>';
          }, "");

    }
  }

// extract modal features and make list
function extractModalFeList(data) {
  const tempFeature = data.data.features;
  let featureString = '';
  for (const key in tempFeature) {
    if (Object.hasOwnProperty.call(tempFeature, key)) {
        featureString += "<li>" + tempFeature[key].feature_name + "</li>";
    }
  }
  return featureString;
}

function generateModal(data) {
  //preprocessed data
  const modalFeaturedList = extractModalFeList(data);
  const integrationsList = extractModalInList(data);

  
    const modalContainer = document.getElementById("modal-container");
    modalContainer.textContent = "";

    const modalBody1 = document.createElement("div");
    modalBody1.classList.add("col");

    modalBody1.innerHTML = `
      <div class="card">
          <div class="card-body bg-info">
              <h5 class="card-title">${data.data.description}</h5>
              <div class="d-flex text-center justify-content-center">
                  <p class="btn-light p-3 m-2 text-primary rounded">${data.data.pricing ? data.data.pricing[0].price : 'Free of Cost'}<br>${data.data.pricing ? data.data.pricing[0].plan : 'Basic'}</p>
                  <p class="btn-light p-3 m-2 text-warning rounded">${data.data.pricing ? data.data.pricing[1].price : 'Free of Cost'}<br>${data.data.pricing ? data.data.pricing[1].plan : 'Pro'}</p>
                  <p class="btn-light p-3 m-2 text-danger rounded">${data.data.pricing ? data.data.pricing[2].price : 'Free of Cost'}<br>${data.data.pricing ? data.data.pricing[2].plan : 'Enterprise'}</p>
              </div>
              <div class="d-flex justify-content-between">
                  <div>
                      <h5>Features</h5>
                      <ul>${modalFeaturedList}</ul>
                  </div>
                  <div>
                      <h5>Integrations</h5>
                      <ul>${integrationsList}</ul>
                  </div>
              </div>
          </div>
      </div>
      `;
    modalContainer.appendChild(modalBody1);

    const modalBody2 = document.createElement("div");
    modalBody2.classList.add("col");

    modalBody2.innerHTML = `
        <div class="card position-relative">
            <img src="${data.data.image_link[0]}" class="card-img-top h-50">
            <div class="position-absolute top-0 end-0 m-2 p-1 bg-danger">hiHello</div>
            <div class="card-body text-center">
                <h5 class="card-title">${data.data.input_output_examples ? data.data.input_output_examples[0].input : 'Can you give any example?'}</h5> 
                <p class="card-text">${data.data.input_output_examples ? data.data.input_output_examples[0].output : "No! Not Yet! Take a break!!!"}</p>
            </div>
        </div>
        `;
    modalContainer.appendChild(modalBody2);
}

// 
// 
function showModal(id){
    urlStr = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(urlStr)
        .then((res) => res.json())
        .then((data) => displayAiCards(data.data.tools))
        .catch((error) => console.log(error));
}


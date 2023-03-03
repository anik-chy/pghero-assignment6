// this is a testing file 
// fetch the whole list
fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => sort(data))
  .catch((error) => console.log(error));

function sort(data) {
  cards = data.data.tools;
  const newArr = cards.sort((c1,c2)=>(Date.parse(c1.published_in) < Date.parse(c2.published_in)) ? 1 : (Date.parse(c1.published_in) > Date.parse(c2.published_in)) ? -1 : 0);
  //cl(newArr);
}

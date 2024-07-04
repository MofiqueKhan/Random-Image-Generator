const cat_result = document.getElementById("cat_results");
const dog_result = document.getElementById("dog_results");
const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src="${data[0].url}" alt="Random Cat Image"/>`;
    })
    .catch((error) => {
      console.error('Error fetching cat image:', error);
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      dog_result.innerHTML = `<img src="${data.url}" alt="Random Dog Image"/>`;
    })
    .catch((error) => {
      console.error('Error fetching dog image:', error);
    });
}
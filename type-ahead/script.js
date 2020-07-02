// get json data
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

//DOM
const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
search.addEventListener("keyup", displayMatches);

// helper functions
function findMatch(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, "gi");
  return cities.filter((place) => {
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchCities = findMatch(this.value, cities);
  const regex = new RegExp(this.value, "ig");
  const html = matchCities
    .map((place) => {
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join(""); // 消除中间的间隔
  suggestions.innerHTML = html;
}

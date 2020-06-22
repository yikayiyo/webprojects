// get all elements needed
const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

let currentActiveCard = 0;

const cardsEl = [];

const cardsData = getCardsData();

function getCardsData() {}

function createCards() {
  cardsDate.forEach((card, index) => {
    createCard(card, index);
  });
}

function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (index === 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
  <div class="inner-card">
  <div class="inner-card-front">
    <p>
      ${data.question}
    </p>
  </div>
  <div class="inner-card-back">
    <p>
      ${data.answer}
    </p>
  </div>
</div>
  `;
  card.addEventListener("click", () => card.classList.toggle("show-answer"));
  // Add to DOM cards
  cardsEl.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}

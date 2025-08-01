// recommend.js
const books = {
  fiction: ["1984", "The Great Gatsby", "To Kill a Mockingbird"],
  science: ["A Brief History of Time", "Sapiens", "The Selfish Gene"]
};

function getRecommendation(genre) {
  return books[genre] || ["No recommendations found"];
}

console.log(getRecommendation("fiction"));

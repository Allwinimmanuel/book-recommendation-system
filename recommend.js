const books = {
  fiction: ["1984", "The Great Gatsby", "To Kill a Mockingbird"],
  science: ["A Brief History of Time", "Sapiens", "The Selfish Gene"],
  history: ["Guns, Germs, and Steel", "The Silk Roads", "Team of Rivals"],
  fantasy: ["Harry Potter", "The Hobbit", "Mistborn"],
  romance: ["Pride and Prejudice", "Me Before You", "The Notebook"]
};

function recommendBooks() {
  const input = document.getElementById("genreInput").value.trim().toLowerCase();
  const outputList = document.getElementById("output");
  outputList.innerHTML = "";

  let found = false;

  for (let genre in books) {
    const match = books[genre].find(book => book.toLowerCase() === input);
    if (match) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${match}</strong> belongs to <strong>${genre}</strong> genre.`;
      outputList.appendChild(li);
      found = true;
      break;
    }
  }

  if (!found) {
    const li = document.createElement("li");
    li.textContent = "No recommendations found for this book.";
    li.className = "no-result";
    outputList.appendChild(li);
  }
}

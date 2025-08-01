// Book database organized by genre
const books = {
  fiction: ["1984", "The Great Gatsby", "To Kill a Mockingbird"],
  science: ["A Brief History of Time", "Sapiens", "The Selfish Gene"],
  history: ["Guns, Germs, and Steel", "The Silk Roads", "Team of Rivals"],
  fantasy: ["Harry Potter", "The Hobbit", "Mistborn"],
  romance: ["Pride and Prejudice", "Me Before You", "The Notebook"]
};

// Function to handle recommendation based on genre input
function recommendBooks() {
  const input = document.getElementById("genreInput").value.trim().toLowerCase();
  const outputList = document.getElementById("output");

  // Clear any previous results
  outputList.innerHTML = "";

  const recommendations = books[input];

  if (recommendations) {
    // Display each recommended book as a list item
    recommendations.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book;
      outputList.appendChild(li);
    });
  } else {
    // Display "No recommendations found" if genre doesn't match
    const li = document.createElement("li");
    li.textContent = "No recommendations found for this genre.";
    li.className = "no-result";
    outputList.appendChild(li);
  }
}

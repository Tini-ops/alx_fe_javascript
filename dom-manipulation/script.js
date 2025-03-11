/*const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Motivation" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Perseverance" },
    { text: "Believe you can and you're halfway there.", category: "Confidence" },
    { text: "Do what you can, with what you have, where you are.", category: "Action" },
    { text: "Act as if what you do makes a difference. It does.", category: "Inspiration" }
];*/

let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The best way to predict the future is to create it.", category: "Motivation" },
]

const quoteDisplay = document.getElementById("quoteDisplay");
const newQouteButton = document.getElementById("newQuote");
const formContainer = document.createElement("div");
document.body.appendChild(formButton);

function showRandomQuote () {
    const randomIndex = Math.floor(Math.random() * quotes.length); //Get a random number index from the array length
    const quote = quotes[randomIndex];
    quoteDisplay.textContent = `${quote.text} - [${quote.category}]`;
}

function createAddQuoteForm () {
    formContainer.innerHTML = ""; //setup innerhtml

    const form = document.createElement("form"); //create the form

    const textInput = document.createElement("input"); //create input field for the quote
    textInput.type = "text"; //setting the type attribute of the input to text
    textInput.placeholder = "Enter quote text";

    const categoryInput = document.createElement("input"); //create input field for the quote category
    categoryInput.type = "text"; //type of input expected
    categoryInput.placeholder = "Enter category of quote"; 

    const submitButton = document.createElement("button"); //create button for adding new quote
    submitButton.textContent = "Add Quote"; //name of the button
    submitButton.type = "submit";

    document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
    document.getElementById("showNewQuoteBtn").addEventListener("click", showNewQuote);

}

function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function exportQuotes() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }


const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getQuotes() {
  const quotesLen = quotes.length;
  const nowQuote = Math.floor(Math.random() * quotesLen);

  quote.innerText = quotes[nowQuote].quote;
  author.innerText = quotes[nowQuote].author;
}

getQuotes();
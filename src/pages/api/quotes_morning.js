const quotesMorning = [
  'Rise and shine, my friend! Time to conquer the day with boundless enthusiasm!',
  "Good morning, sunshine! Let's kickstart this day with a burst of productive energy!",
  'Wake up and seize the day! Unleash your creative powers and make magic happen!',
];

// Generování hlášek, aby se generovali postupně, jak jdou za sebou
let currentQuoteIndex = 0;
export default function handler(req, res) {
  const currentQuote = quotesMorning[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesMorning.length;
  res.status(200).json({ quote: currentQuote });
}

//generování hlášek random
// export default function handler(req, res) {
//   const randomIndex = Math.floor(Math.random() * quotesMorning.length);
//   const randomQuote = quotesMorning[randomIndex];
//   res.status(200).json({ quote: randomQuote });
// }

//zobrazení hlášky: {"quote":"Rise and shine, my friend! Time to conquer the day with boundless enthusiasm!"}

//adresa API : http://localhost:3000/api/quotes.morning

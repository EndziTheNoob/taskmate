const quotesAfternoon = [
  'Keep up the momentum, my unstoppable friend! The afternoon is your playground of productivity!',
  "Hang in there! Power through the afternoon slump and show those tasks who's boss!",
  'Revitalize your day! Inject energy into the afternoon and let your productivity soar!',
  'Afternoon, the time when productivity battles against the strong gravitational pull of naptime. Who will emerge victorious?',
  'Welcome to the afternoon, where time slows down to a crawl, and distractions take center stage. Stay focused!',
  'Afternoon slump, here we come! Summon every ounce of motivation to combat the imminent desire for a siesta.',
];

let currentQuoteIndex = 0;
export default function handler(req, res) {
  const currentQuote = quotesAfternoon[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesAfternoon.length;
  res.status(200).json({ quote: currentQuote });
}

//zobrazení hlášky {"quote":"Keep up the momentum, my unstoppable friend! The afternoon is your playground of productivity!"}

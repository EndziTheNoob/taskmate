const quotesEvening = [
  "Congratulations, champion of achievements! You've reached the finish line. Take a moment to celebrate your triumphs!",
  "Wrap it up, task conqueror! You've done a fantastic job today. Time to unwind and recharge those creative vibes!",
  "Mission accomplished, productivity superstar! Pat yourself on the back and enjoy a well-deserved break. You've earned it!",
  'Congratulations on surviving another day in the never-ending circus of tasks. Now, go reward yourself with some Netflix and snacks.',
  'Time to bid farewell to the chaos. Wrap up those last-minute tasks, and let the sweet embrace of freedom wash over you.',
  'The day is finally winding down. Take a moment to reflect on all the productive procrastination you achieved today.',
];

let currentQuoteIndex = 0;
export default function handler(req, res) {
  const currentQuote = quotesEvening[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesEvening.length;
  res.status(200).json({ quote: currentQuote });
}

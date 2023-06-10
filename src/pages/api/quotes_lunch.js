const quotesLunch = [
  "$name, It's lunch o'clock! Recharge your batteries and indulge in a well-deserved feast for your mind and body!",
  'Time to refuel and recharge! Enjoy your lunch break $name and come back stronger than ever!',
  'Bon appétit! Treat yourself to a delicious meal and return with a fresh burst of inspiration!',
];

let currentQuoteIndex = 0;
export default function handler(req, res) {
  const currentQuote = quotesLunch[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesLunch.length;
  res.status(200).json({ quote: currentQuote });
}

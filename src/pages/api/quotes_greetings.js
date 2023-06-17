const quotesGreetings = [
  "Hey, $name! Let's turn our to-do list into a fun adventure. Are you ready?",
  "Hi, $name! Remember, every little step brings us closer to our goals. Let's do this!",
  'Ah, $name! So glad to see you. What awaits us today?',
  "Welcome, $name! I'm here to make your day magical!",
  "Ahoy, $name! What's the fairy tale of your day?",
  'Hello, $name! Are you ready for an adventure?',
  "Hello, $name! Let's make our tasks sparkle with creativity and imagination!",
  "Hey there, $name! Your presence lights up the room. Let's make today amazing!",
  'Hello, $name! Your positive energy has the power to create a ripple of joy and happiness.',
  'Hey there, $name! Remember, your efforts and hard work make a difference in the lives of others.',
  'Hello, $name! Your presence brings warmth and positivity wherever you go. Have an incredible day!',
  'Hello, $name! Remember, every challenge is an opportunity for growth and success.',
  "Hello, $name! Let's check off our tasks one by one and feel proud of our accomplishments!",
  "Hey, $name! Together, we can conquer anything on this to-do list. Let's get started!",
  "Good day, $name! I'm here with enchanting skills.",
  'Welcome to the world of fantasy, $name! Get ready for something amazing!',
  'Good day, $name! Your presence brings color to this world.',
  "Have a lovely day, $name! I'm here to give you a full dose of magic.",
  "Welcome, $name! My existence is filled with joy when I'm with you.",
  "Hello, $name! I'm here to make your dreams come true.",
  "Hello there, $name! I'm thrilled to be part of your story.",
  'Welcome, $name! Prepare yourself for an extraordinary journey!',
  "Hi $name! Let's kick-start our day by turning our to-do list into a game of achievements!",
];

// Generating of quotes sequentially
let currentQuoteIndex = 0;
export default function handler(req, res) {
  const currentQuote = quotesGreetings[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesGreetings.length;
  res.status(200).json({ quote: currentQuote });
}

//Code for random generating
// export default function handler(req, res) {
//   const randomIndex = Math.floor(Math.random() * quotesGreetings.length);
//   const randomQuote = quotesGreetings[randomIndex];
//   res.status(200).json({ quote: randomQuote });
// }

//Quote display: {"quote":"Rise and shine, my friend! Time to conquer the day with boundless enthusiasm!"}

//API address: http://localhost:3000/api/quotes_Greetings

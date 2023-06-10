const quotesDone = [
  "Great job $name! You're one step closer to reaching your goals!",
  'Congratulations on completing your task! Keep up the fantastic work!',
  'You did it! Celebrate this small victory and keep moving forward!',
  'Task accomplished! Give yourself a pat on the back for a job well done!',
  "Well done! You're making progress and building momentum!",
  'You nailed it! Keep that momentum going and conquer the next challenge!',
  'Bravo! Your determination and effort are truly inspiring!',
  "Hooray! You've crossed another task off your list. Keep going!",
  "You're on fire! Your productivity is off the charts!",
  'Way to go! Your hard work and perseverance are paying off!',
  'Amazing job $name! Your dedication and commitment are shining through!',
  "You're unstoppable! Each completed task brings you closer to success!",
  'Fantastic work! Remember, every small step counts towards your big goals!',
  "Congratulations on another triumph! You're unstoppable!",
  'Impressive! Your productivity is inspiring others around you!',
  '$name, you did it! Your determination is making a real difference!',
  'Kudos to you! Your achievements are making waves!',
  "Keep up the excellent work! You're on a roll!",
  "You've conquered another task! Your persistence is commendable!",
  'Well done! Your accomplishments are proof of your hard work!',
  "You're making dreams a reality, one task at a time!",
  'Success tastes sweet! Your efforts are paying off!',
  'Congratulations on a job well done! Keep aiming high!',
  "You're making progress like a pro! Keep up the good work!",
  "You've earned a victory dance! Celebrate this achievement!",
  'Way to go! Your dedication and focus are truly inspiring!',
  "You're a task-master! Keep up the amazing work!",
  "Congratulations on your accomplishment! The sky's the limit!",
  "$name, You're a superstar! Your dedication sets you apart!",
  '$name, You did it! Your determination is paving the way to success!',
  "Huzzah! You've just leveled up in the game of productivity!",
  "You're a task-tackling champion! Keep slaying those to-dos!",
  "You've earned a virtual round of applause!",
  "Hip, hip, hooray! You're a task-crushing magician!",
  "You've just unlocked the achievement of task mastery! Keep it up!",
  "A standing ovation for your task-tackling prowess! You're incredible!",
  'Victory is yours, oh mighty warrior! Onward to the next conquest!',
  "You're a task-slaying rockstar! Keep jamming those accomplishments!",
];

let currentQuoteIndex = 0;
export default function handler(req, res) {
  const currentQuote = quotesDone[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesDone.length;
  res.status(200).json({ quote: currentQuote });
}

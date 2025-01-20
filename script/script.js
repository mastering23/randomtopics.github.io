const listTopics = [
  "Talk about favorite sport!",
  "Talk about favorite ice cream!",
  "Talk about favorite song!",
  "Talk about favorite food!",
  "Talk about space!",
  "Talk about coding!",
  "Talk about comedy shows!",
  "Talk about favorite restaurant!",
  "Talk about traveling!",
  "Talk about favorite dance!",
  "Talk about science!",
  "Talk about happy memories!",
  "Talk about future goals!",
  "Talk about hiking!",
  "Talk about art!",
  "Talk about life experiences!",
  "Talk about the economy!",
  "Talk about tech!",
  "Talk about AI!",
  "Talk about clothes!",
  "Talk about pets!",
  "Talk about books!",
  "Talk about hobbies!",
  "Talk about social media!",
  "Talk about robotics!",
  "If you could live anywhere in the world, where would it be?",
    "What's the most interesting book you've read recently?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's your dream travel destination?",
    "What hobby have you always wanted to try but never have?",
    "If you could instantly learn any skill, what would it be?",
    "What's the best piece of advice you've ever received?",
    "If you could time travel, where would you go?",
    "What's your favorite way to relax after a long day?",
    "What's the most exciting thing on your bucket list?",
    "If you were a superhero, what would your superpower be?",
    "What’s your favorite movie, and why?",
    "If you could change one thing about the world, what would it be?",
    "What’s the most unusual food you’ve ever tried?",
    "What’s the best vacation you’ve ever been on?",
    "What technology do you think will be the most revolutionary in the next 10 years?",
    "What’s one thing you couldn’t live without?",
    "If you had a time machine, would you go back to the past or visit the future?",
    "What’s the most important lesson you’ve learned in life?",
    "If you could switch lives with anyone for a day, who would it be and why?",
    "What do you think the world will be like in 50 years?",
    "What is your favorite way to stay active and fit?",
    "If you could meet your childhood self, what advice would you give them?",
    "What’s your favorite way to spend a weekend?",
    "What fictional world or universe would you like to live in?",
    "What’s the best gift you’ve ever received?",
    "What do you value most in a friendship?",
    "What was your favorite subject in school and why?",
    "If you could create a new holiday, what would it celebrate?",
    "What do you think is the key to happiness?"
];

// Function to generate a random topic
function getRandomTopic() {
  const randomIndex = Math.floor(Math.random() * listTopics.length);
  return listTopics[randomIndex];
}

// Event listener for button click
document.getElementById("bt-topics").addEventListener("click", function() {
  const randomTopic = getRandomTopic();
  document.getElementById("random-topic").textContent = randomTopic;
});

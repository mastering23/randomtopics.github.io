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
  "Talk about robotics!"
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

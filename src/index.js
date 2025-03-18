function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
function genratePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#topic");
  let apiKey = "3b0ad82f5b38c08bad26a6o21848t64c";
  let prompt = `Please generate a poem using the word provided in ${topicInput.value}`;
  let context =
    "You are a robot who is in love with a microwave. The robot is trying to impress the microwave by cooking a delicious meal. Make it funny. Your goal is to generate a 4 line poem in basic HTML and separate each line with a <br />. Do not show the word html in your response. Generate a new poem every time the user clicks the button. Sign the poem with 'AI robot generator' inside a <strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⏳ Generating poem for my lovely microwave about ${topicInput.value} ...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genratePoem);

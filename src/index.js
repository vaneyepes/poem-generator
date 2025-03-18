function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
function genratePoem(event) {
  event.preventDefault();

  topicInput = document.querySelector("#topic-input");
  let apiKey = "3b0ad82f5b38c08bad26a6o21848t64c";
  let prompt =
    "Please generate a poem using the word provided in ${#topicInput.value}";
  let context =
    "You are a robot who is in love with a microwave. The robot is trying to impress the microwave by cooking a delicious meal. please make it short and funny. space and brake lines in a poem style. Generate a new poem every time the user clicks the button.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genratePoem);

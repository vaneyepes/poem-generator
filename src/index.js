function genratePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });

  poemElement.innerHTML = "The poem will appear here";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genratePoem);

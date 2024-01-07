window.addEventListener("DOMContentLoaded", () => {
  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,explicit&type=single";
  const btn = document.querySelector(".button");
  const emoji_text = document.querySelector(".joke-text");

  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const joke = data.joke;

      emoji_text.textContent = joke;
      emoji_text.style.color = "white";
    } catch (err) {
      console.error(err);
    }
  }

  btn.addEventListener("click", fetchData);
});

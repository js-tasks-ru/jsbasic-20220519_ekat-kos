function toggleText() {

  const toggleBtn = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");

  toggleBtn.addEventListener("click", () => {

    text.hidden = !text.hidden;

  }
  );
}

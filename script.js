const start = document.getElementById("start");
const intro = document.getElementById("intro");
const username = document.getElementById("username");
const invalidLong = document.getElementById("invalid-long");
const invalidEmpty = document.getElementById("invalid-empty");

start.addEventListener("click", (event) => {
  if (!username.value) {
    username.classList.add("invalid");
    invalidEmpty.style.display = "block";
    event.preventDefault();
  } else {
    invalidEmpty.style.display = "none";
    if (username.value.length <= 9) {
      username.classList.remove("invalid");
      invalidLong.style.display = "none";
    } else {
      invalidLong.style.display = "block";
      username.classList.add("invalid");
      event.preventDefault();
    }
  }
});

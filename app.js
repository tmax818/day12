function toggle() {
  let hidden = document.getElementById("hidden");
  console.log(hidden.style.display, "toggle");
  hidden.style.display == "none"
    ? (hidden.style.display = "block")
    : (hidden.style.display = "none");
}

function show() {
  let show = document.getElementById("hide-me");
  console.log(show.style.display, "show");
  show.style.display == "block"
    ? (show.style.display = "none")
    : (show.style.display = "block");
}

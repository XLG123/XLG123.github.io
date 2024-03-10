const modifyCurrentYear = () => {
  let today = new Date();
  let el = document.getElementById("curr-year");
  el.textContent = today.getFullYear();
}

modifyCurrentYear();
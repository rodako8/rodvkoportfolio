window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percent = (scrollTop / docHeight) * 100;

  document.getElementById("progressBar").style.width =
    percent + "%";
});
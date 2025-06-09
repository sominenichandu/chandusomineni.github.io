document.getElementById("aboutBtn").addEventListener("click", function () {
  const aboutInfo = document.getElementById("aboutInfo");
  if (aboutInfo.style.display === "none") {
    aboutInfo.style.display = "block";
  } else {
    aboutInfo.style.display = "none";
  }
});

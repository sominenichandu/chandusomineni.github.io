document.getElementById("aboutBtn").addEventListener("click", function () {
  const aboutInfo = document.getElementById("aboutInfo");
  if (aboutInfo.style.display === "none") {
    aboutInfo.style.display = "block";
  } else {
    aboutInfo.style.display = "none";
  }
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting the form.");
      return;
    }
    console.log("Form Submission:");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    alert("Message sent! Now waiting for pigeons to deliver it 📨");
    document.querySelector(".contact-form").reset();
  });



document.addEventListener("DOMContentLoaded", function () {
  const landingContainer = document.querySelector(".landing-container");
  landingContainer.classList.add("fade-in");
});

const showLink = document.getElementById("showLink");
const myDiv1 = document.getElementById("hiddenNews1");
const myDiv2 = document.getElementById("hiddenNews2");
const myDiv3 = document.getElementById("hiddenNews3");
// Add event listener for the link's click event
showLink.addEventListener("click", (event) => {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Toggle the visibility of the div by adding or removing the "hidden" class
  if (myDiv1.classList.contains("d-flex")) {
    myDiv1.classList.remove("d-flex");
    myDiv2.classList.remove("d-flex");
    myDiv3.classList.remove("d-flex");
  } else {
    myDiv1.classList.add("d-flex");
    myDiv2.classList.add("d-flex");
    myDiv3.classList.add("d-flex");
  }
});

function handleContact() {
  first_name = document.getElementById("firstName").value;
  last_name = document.getElementById("lastName").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  message = document.getElementById("message").value;
  console.log(first_name, last_name, email, phone);
  console.log(message);

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phone === "" ||
    message === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  var phonePattern = /^\+?\d{10,}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }
  // alert("Form submitted successfully!");

  const mailtoLink = `mailto:shrisharanyan.clg@gmail.com?subject=${"Ferrari Website Feedback"}}&body=%20${encodeURIComponent(
    message
  )}%0D%0A%0D%0A%0D%0A%20${encodeURIComponent(
    first_name
  )}%0D%0A%20(${encodeURIComponent(phone)})%0D%0A`;

  window.open(mailtoLink, "_blank");
}

let isHidden = true;

function handleNewsToggle() {
  const hiddenCards = document.querySelectorAll("#hiddenCards");
  const showLink = document.getElementById("showLink");

  if (isHidden) {
    hiddenCards.forEach((card) => (card.style.display = "block"));
    showLink.innerHTML = "Close";
  } else {
    hiddenCards.forEach((card) => (card.style.display = "none"));
    showLink.innerHTML = "View Older Posts <span>&#8594;</span>";
  }

  isHidden = !isHidden;
}

// Dummy data for demonstration
const data = [
  "Children Of Heaven",
  "The Message",
  "The Jar: A Tale From The East",
  "Bilal: A New Breed of Hero",
  "The Boy and The King",
  "Mohammed(PBUH): The last Prophet",

];

function search() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  data.forEach(item => {
    if (item.toLowerCase().includes(searchInput)) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      resultsContainer.appendChild(listItem);
    }
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
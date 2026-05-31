// script.js

// DARK MODE
const darkBtn = document.getElementById("darkBtn");

// CEK MODE TERSIMPAN
if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  darkBtn.innerHTML = "☀️";
}else{
  darkBtn.innerHTML = "🌙";
}

// BUTTON CLICK
darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  // JIKA LIGHT MODE
  if(document.body.classList.contains("light")){

    darkBtn.innerHTML = "☀️";

    // SIMPAN MODE
    localStorage.setItem("theme", "light");

  }else{

    darkBtn.innerHTML = "🌙";

    // SIMPAN MODE
    localStorage.setItem("theme", "dark");
  }

});

// SCROLL MENU
function scrollMenu(){
  document.getElementById("menu").scrollIntoView({
    behavior:"smooth"
  });
}

// SEARCH MENU
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

  const filter = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const title =
      card.querySelector("h3").textContent.toLowerCase();

    if(title.includes(filter)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

});

// IMAGE PREVIEW

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".card img");
const closeModal = document.querySelector(".close-modal");

images.forEach(img => {

  img.addEventListener("click", () => {

    modal.style.display = "flex";
    modalImage.src = img.src;

  });

});

closeModal.addEventListener("click", () => {

  modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

  if(e.target === modal){
    modal.style.display = "none";
  }

});
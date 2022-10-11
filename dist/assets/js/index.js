// Toggle Light Mode Function

const toggleLightMode = () => {
  const htmlElement = document.querySelector("html");

  document.querySelector("html").classList.toggle("light-mode");

  if (htmlElement.classList.contains("light-mode")) {
    document.querySelector(".toggle__text").textContent = "dark";
    document.querySelector(".toggle__icon--sun").style.display = "none";
    document.querySelector(".toggle__icon--moon").style.display = "block";
  } else {
    document.querySelector(".toggle__text").textContent = "light";
    document.querySelector(".toggle__icon--sun").style.display = "block";
    document.querySelector(".toggle__icon--moon").style.display = "none";
  }
};

document.querySelector(".toggle").addEventListener("click", toggleLightMode);

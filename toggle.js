const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
     toggleBtn.style.color = "black";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  

  if (body.classList.contains("dark-mode")) {
     toggleBtn.style.color = "black";
  } else {
    
    localStorage.setItem("theme", "light");
     toggleBtn.style.color = "black";
  }
});

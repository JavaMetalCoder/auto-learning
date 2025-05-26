const boxArray = document.querySelectorAll(".box");

if (boxArray.length === 0) 
  console.warn("Array nel DOM vuoto!!");
  
boxArray.forEach(function(box) {
  box.addEventListener("click", function() {
    this.classList.toggle("active");
  })
})
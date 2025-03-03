document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("menu").classList.add("active");
  document.getElementById("bottom-border-header").classList.add("hide");
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("menu").classList.remove("active");
  document.getElementById("bottom-border-header").classList.remove("hide");
});

// Animate bottom border from right to left
gsap.to(".bottom-border-header", { 
  width: "100%", 
  duration: 2, 
  ease: "power2.out" 
});
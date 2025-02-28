document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("menu").classList.add("active");
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("menu").classList.remove("active");
});

// Animate bottom border from right to left
gsap.to(".bottom-border-header", { 
  width: "100%", 
  duration: 2, 
  ease: "power2.out" 
});
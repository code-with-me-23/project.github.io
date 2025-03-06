//contant
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });
  
    elements.forEach(el => observer.observe(el));
  });

  function openModal(title, image, price) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal-price").innerText = "Price: " + price;
    document.getElementById("productModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("productModal").style.display = "none";
  }
  
  window.onclick = function(event) {
    let modal = document.getElementById("productModal");
    if (event.target === modal) {
        closeModal();
    }
  };

       // JavaScript for Mobile Toggle
       const hamburger = document.querySelector('.hamburger');
       const navLinks = document.querySelector('.nav-links');

       // Toggle Menu only on Hamburger Button Click
       hamburger.addEventListener('click', () => {
           navLinks.classList.toggle('active');
       });
  
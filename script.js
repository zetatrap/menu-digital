// Script opcional para interacciones más avanzadas
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product-card");
  
    products.forEach(product => {
      product.addEventListener("mouseover", () => {
        product.style.transform = "scale(1.05)";
      });
      product.addEventListener("mouseout", () => {
        product.style.transform = "scale(1)";
      });
    });
  });
  
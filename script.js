

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchBar");
  const cards = document.querySelectorAll(".circle-card");
  const sidebarLinks = document.querySelectorAll(".sidebar ul li ul li"); // nested items

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    // Filter cards
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      const matches = title.includes(filter) || description.includes(filter);
      card.style.display = matches ? "flex" : "none";
    });

    // Filter sidebar category items (only inner ones)
    sidebarLinks.forEach(item => {
      const link = item.querySelector("a");
      const text = link.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "block" : "none";
    });
  });
});

  const searchBar = document.getElementById('searchBar');
  const cards = document.querySelectorAll('.circle-card');

  searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      card.style.display = (title.includes(searchTerm) || desc.includes(searchTerm)) ? 'flex' : 'none';
    });
  });


  // Image preload
  const img = new Image();
  img.src = 'logo.webp'; // Use WebP for better speed
  img.alt = 'Logo';
  img.width = 150;
  img.height = 50;

  // Jab image load ho jaye, tab hi DOM me add karo
  img.onload = function () {
    document.getElementById('logo-container').appendChild(img);
  };





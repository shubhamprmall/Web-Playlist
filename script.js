

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





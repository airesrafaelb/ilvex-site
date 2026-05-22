const hero = document.querySelector(".hero");
const panel = document.querySelector(".interface");

if (hero && panel && window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    panel.style.transform = `translateY(0) rotateX(${y * -3}deg) rotateY(${x * 4}deg)`;
  });

  hero.addEventListener("pointerleave", () => {
    panel.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
  });
}

const portfolioFilters = document.querySelectorAll(".portfolio-filters button");
const projectCards = document.querySelectorAll(".project-card[data-category]");

portfolioFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    portfolioFilters.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

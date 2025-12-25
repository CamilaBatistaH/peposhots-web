// Mobile drawer
const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");

function closeDrawer() {
  burger.setAttribute("aria-expanded", "false");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

burger?.addEventListener("click", () => {
  const open = drawer.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
  drawer.setAttribute("aria-hidden", String(!open));
});

drawer?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeDrawer();
});

// FAQ accordion
document.querySelectorAll(".faq__q").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("is-open");
    const icon = btn.querySelector(".faq__icon");
    if (icon) icon.textContent = btn.classList.contains("is-open") ? "–" : "+";
  });
});

// Cocktail filters
const filterBtns = document.querySelectorAll(".filter");
const cocktailCards = document.querySelectorAll(".cocktail");

filterBtns.forEach((b) => {
  b.addEventListener("click", () => {
    filterBtns.forEach((x) => x.classList.remove("is-active"));
    b.classList.add("is-active");

    const f = b.dataset.filter || "all";

    cocktailCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ").join("");
      const show = (f === "all") || tags.includes(f);
      card.style.display = show ? "" : "none";
    });
  });
});

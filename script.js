const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".bar");
const navigation = document.querySelector(".navlist ul");
const navigationContainer = document.querySelector(".navlist");
const hero = document.querySelector("#hero");
const nav = document.querySelector("#nav");
const allLinks = document.querySelectorAll(".navlist ul a");
const AllSections = document.querySelectorAll("section");
function closeModal(e) {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("hidden");
}
navigationContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("link") ||
    e.target.classList.contains("list__container")
  ) {
    closeModal();
  }
  if (e.target.classList.contains("link")) {
    allLinks.forEach((x) => x.classList.remove("active__link"));
    e.target.classList.add("active__link");
  }
});

hamburger.addEventListener("click", closeModal);
// sticky header
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyCallBack = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove("color");
    console.log("intersecting");
  } else {
    nav.classList.add("color");
    console.log("not");
  }
};
const stickyOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const stickyHeader = new IntersectionObserver(
  stickyCallBack,
  stickyOption
).observe(hero);
// smooth reveal
const sectionCallback = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("reveal");
  observer.unobserve(entry.target);
};
const sectionOptions = {
  root: null,
  threshold: 0.05,
};
const sectionReveal = new IntersectionObserver(sectionCallback, sectionOptions);
AllSections.forEach((section) => {
  section.classList.add("reveal");
  sectionReveal.observe(section);
});

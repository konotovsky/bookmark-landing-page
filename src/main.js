"use strict";

// Menu
const header = document.getElementById("header");
const overlay = document.getElementById("burger-overlay");
const openBtn = document.getElementById("burger-open");
const closeBtn = document.getElementById("burger-close");

openBtn.addEventListener("click", () => {
  header.classList.add("invisible");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("invisible");
  overlay.classList.add("hidden");
});

//Features
const features = [
  {
    img: "/images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    img: "/images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "/images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const links = document.querySelectorAll(".feature-link");
const image = document.getElementById("feature-img");
const title = document.getElementById("feature-title");
const description = document.getElementById("feature-description");

function setActiveFeature(index) {
  const feature = features[index];

  image.src = feature.img;
  title.textContent = feature.title;
  description.textContent = feature.description;

  links.forEach((l) => {
    l.classList.remove("border-red-400", "text-red-400");
    l.classList.add("border-transparent");
  });

  links[index].classList.remove("border-transparent");
  links[index].classList.add("border-red-400", "text-red-400");
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveFeature(link.dataset.index);
  });
});

setActiveFeature(0);

//Accordion
const accordion = document.querySelector(".accordion");
const buttons = accordion.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentContent = button.nextElementSibling;
    const currentIcon = button.querySelector("svg");

    const isOpen = currentContent.style.maxHeight;

    accordion.querySelectorAll("p").forEach((content) => {
      content.style.maxHeight = null;
      content.classList.remove("mb-4");
    });

    accordion.querySelectorAll("svg").forEach((icon) => {
      currentContent.classList.remove("mb-4");

      icon.classList.remove("rotate-180", "text-red-400");
      icon.classList.add("text-blue-600");
    });

    if (!isOpen) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      currentContent.classList.add("mb-4");

      currentIcon.classList.add("rotate-180", "text-red-400");
      currentIcon.classList.remove("text-blue-600");
    }
  });
});

//Email error
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("sendForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    showError();
  } else {
    hideError();

    form.submit();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.checkValidity()) {
    hideError();
  }
});

function showError() {
  error.classList.remove("hidden");
  emailInput.classList.remove("border-transparent");
  emailInput.classList.add("border-red-400");
  emailInput.classList.remove("rounded-b-[5px]");
  submit.classList.add("mt-4", "sm:mt-0");
}

function hideError() {
  error.classList.add("hidden");
  emailInput.classList.remove("border-red-400");
  emailInput.classList.add("rounded-b-[5px]");
  emailInput.classList.add("border-transparent");
  submit.classList.remove("mt-4", "sm:mt-0");
}

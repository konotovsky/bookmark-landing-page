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

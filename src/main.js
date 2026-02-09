"use strict";

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

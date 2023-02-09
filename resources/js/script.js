//Select

const toggleButtons = document.querySelectorAll(".toggle-menu");
const toggleListItems = document.querySelectorAll(".toggle-list .item");

//Heart-icon

const hearts = document.querySelectorAll(".icon-heart");

//Product

const colors = document.querySelectorAll(".color .item");
const sizes = document.querySelectorAll(".size .size-list-item");
const categorys = document.querySelectorAll(".sale .category");

//Timer

const timerHourElement = document.querySelector(".time-left .hour");
const timerMinuteElement = document.querySelector(".time-left .minutes");
const timerSecondElement = document.querySelector(".time-left .second");

//Mobile-Menu

const toggleButtonMobile = document.querySelector(".toggle-menu-mobile");
const closeBtn = document.querySelector(".menu-mobile .close");
const mobileNav = document.querySelector(".menu-mobile");
const siteLayout = document.querySelector(".layout");

// "Select" function
toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    if (document.querySelector(".toggle-menu.active")) {
      document.querySelector(".toggle-menu.active").classList.remove("active");
    }

    toggleButton.classList.add("active");
    const toggleListBlock = toggleButton.querySelector(".toggle-list-block");
    const toggleList = toggleButton.querySelector(".toggle-list");

    toggleList.style.height = `${toggleListBlock.clientHeight}px`;
  });
});

toggleListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const toggleButton = item.closest(".toggle-menu");
    if (toggleButton) {
      toggleButton.querySelector(".item.active").classList.remove("active");
      item.classList.add("active");
      toggleButton.querySelector(".value").textContent = item.textContent;
    }
  });
});

window.addEventListener("click", onClickToggleList);

function onClickToggleList(e) {
  if (!e.target.closest(".toggle-menu.active")) {
    if (document.querySelector(".toggle-menu.active")) {
      document.querySelector(
        ".toggle-menu.active .toggle-list"
      ).style.height = `0px`;
      document.querySelector(".toggle-menu.active").classList.remove("active");
    }
  }
}

// Mobile-Menu

function showMobileNav() {
  mobileNav.classList.add("active");
  siteLayout.classList.add("active");
}

function hideMobileNav() {
  mobileNav.classList.remove("active");
  siteLayout.classList.remove("active");
}

toggleButtonMobile.addEventListener("click", showMobileNav);
siteLayout.addEventListener("click", hideMobileNav);
closeBtn.addEventListener("click", hideMobileNav);

// Clickable "Heart"
hearts.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("active");
  });
});

// Change "PRODUCT"
colors.forEach((color) => {
  color.addEventListener("click", () => {
    document.querySelector(".color .item.active").classList.remove("active");
    color.classList.add("active");
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    document
      .querySelector(".size .size-list-item.active")
      .classList.remove("active");
    size.classList.add("active");
  });
});

categorys.forEach((category) => {
  category.addEventListener("click", () => {
    document.querySelector(".sale .category.active").classList.remove("active");
    category.classList.add("active");
  });
});

// TIMER

const TOTAL_HOURS = 12;
const TOTAL_MINUTES = 46;
const TOTAL_SECONDS = 51;

let totalTime = TOTAL_HOURS * 3600 + TOTAL_MINUTES * 60 + TOTAL_SECONDS;

let timerId = setInterval(() => {
  totalTime--;
  updateTimerDisplay(totalTime);
  if (totalTime <= 0) {
    clearInterval(timerId);
  }
}, 1000);

function updateTimerDisplay(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;

  timerHourElement.textContent = addLeadingZero(hours);
  timerMinuteElement.textContent = addLeadingZero(minutes);
  timerSecondElement.textContent = addLeadingZero(seconds);
}

function addLeadingZero(number) {
  let numberString = String(number);
  if (numberString.length < 2) {
    numberString = "0" + numberString;
  }

  return numberString;
}

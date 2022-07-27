let DATA = [];
let SELECTED = "";

const imageEl = document.querySelector("#selectedItemCard img");
const titleEl = document.querySelector("#selectedItemCard section h2");
const descEl = document.querySelector("#selectedItemCard section p");
const optionsEl = document.getElementById("options");
const dropdownBtn = document.querySelector("#dropdown button");
const dropdownCurrentItem = document.querySelector("#dropdown > div > span");

const upArrow = `
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697L11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303C18.2374 14.8232 17.7626 14.8232 17.4697 14.5303L12 9.06066L6.53033 14.5303C6.23744 14.8232 5.76256 14.8232 5.46967 14.5303Z"
      fill="#d1a255"
    />
  </svg>
`;

const downArrow = `
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
      fill="black"
    />
  </svg>
`;

function getInputItemHTML(item) {
  return `
      <input
        type="radio"
        name="item-option"
        id="${item.title}"
        value="${item.id}"
      />
      <label for="${item.title}">${item.shortTitle}</label>
    `;
}

// listener for option select change
export function handleChange(event) {
  const selected = event.target.value; // item.id
  const found = DATA.find((item) => item.id.toString() === selected.toString());

  imageEl.src = `images/${found.coverImage}`;
  imageEl.alt = found.title;
  titleEl.textContent = found.title;
  descEl.textContent = found.description;
  dropdownCurrentItem.textContent = found.title;
}

function render() {
  DATA.forEach((item) => {
    const divEl = document.createElement("div");
    divEl.innerHTML = getInputItemHTML(item);
    optionsEl.appendChild(divEl);
  });

  document.querySelector("input[type=radio]").checked = true;

  document
    .querySelectorAll("input[type=radio]")
    .forEach((el) => el.addEventListener("change", handleChange));
}

async function fetchData() {
  try {
    const response = await fetch("/api/data.json");
    const data = await response.json();

    if (data.length !== 0) {
      // sorting by order
      DATA = data.sort((a, b) => a.order - b.order);
      handleChange({ target: { value: DATA[0].id } });
      render();
    }
  } catch (error) {
    console.log(error);
  }
}

function handleShowHide() {
  if (optionsEl.style.display !== "none") {
    optionsEl.style.display = "none";
    dropdownBtn.innerHTML = downArrow;
  } else {
    optionsEl.style.display = "block";
    dropdownBtn.innerHTML = upArrow;
  }
}

document.addEventListener("DOMContentLoaded", fetchData);
document
  .querySelector("#dropdown > div:first-of-type")
  .addEventListener("click", handleShowHide);

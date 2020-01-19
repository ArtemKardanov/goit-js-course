import imgItems from "./gallery-items.js";

const listOfLi = imgItems.map(item => {
  const imgPreview = item.preview;
  const imgOriginal = item.original;
  const imgDescription = item.description;

  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.setAttribute("href", imgOriginal);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.setAttribute("src", imgPreview);
  galleryImage.setAttribute("data-source", imgOriginal);
  galleryImage.setAttribute("alt", imgDescription);

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);

  return galleryItem;
});

const gallery = document.querySelector(".js-gallery");
gallery.append(...listOfLi);

gallery.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  event.preventDefault();
  const target = event.target;
  const srcSet = target.dataset.source;

  const modalWindow = document.querySelector("div.lightbox");
  modalWindow.classList.add("is-open");

  const modalImg = document.querySelector("img.lightbox__image");
  modalImg.setAttribute("src", srcSet);
}

const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

closeButton.addEventListener("click", handleCloseClick);

function handleCloseClick(event) {
  event.preventDefault();

  const modalWindow = document.querySelector("div.lightbox");
  modalWindow.classList.remove("is-open");

  const modalImg = document.querySelector("img.lightbox__image");
  modalImg.removeAttribute("src");
}

document.addEventListener("keyup", handleEscape);

function handleEscape(e) {
  const modalWindow = document.querySelector("div.lightbox");

  if (modalWindow.classList.contains("is-open")) {
    if (e.keyCode === 27) {
      modalWindow.classList.remove("is-open");

      const modalImg = document.querySelector("img.lightbox__image");
      modalImg.removeAttribute("src");
    }
  } else return;
}

const divOver = document.querySelector("div.lightbox");

divOver.addEventListener("click", handleOver, true);
function handleOver(e) {
  console.log(e.target);
}
//Кнопки "вперед", "назад" и "эскейп" через "свитч"

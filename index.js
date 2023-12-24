let isNAV = false;
const display = function (frameElement, carousalElement, imgID) {
  const prevImg = frameElement.removeChild(frameElement.firstElementChild);
  carousalElement.appendChild(prevImg);
  frameElement.appendChild(document.getElementById(imgID));
  if (isNAV) {
    activeImg(frameElement);
  }
};

exports.moveLeft = function (frameElement, carousalElement) {
  const len = carousalElement.childElementCount;
  const prevImg = frameElement.firstElementChild;
  const nextImgID = (Number(prevImg.id) + len - 1) % len;

  display(frameElement, carousalElement, nextImgID);
};

exports.moveRight = function (frameElement, carousalElement) {
  const len = carousalElement.childElementCount;
  const prevImg = frameElement.firstElementChild;
  const nextImgID = (Number(prevImg.id) + 1) % len;

  display(frameElement, carousalElement, nextImgID);
};

exports.createNav = function (frameElement, carousalElement) {
  const imgs = document.querySelectorAll(`img`);
  const navContainer = document.createElement('div');
  isNAV = true;
  navContainer.classList.add('nav-container');
  imgs.forEach((img) => {
    const navItem = document.createElement('div');
    navItem.classList.add('nav-item', img.id);
    navItem.onclick = () => display(frameElement, carousalElement, img.id);
    navContainer.append(navItem);
  });
  activeImg(navContainer, frameElement);
  return navContainer;
};

function activeImg(navContainer, frameElement) {
  const activeImgID = frameElement.firstElementChild.id;
  navContainer.childNodes.forEach((item) => {
    item.classList.remove('active');
    if (item.classList[1] === activeImgID) {
      item.classList.add('active');
    }
  });
}

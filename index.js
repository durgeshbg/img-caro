display = function (frameElement, carousalElement, imgID) {
  const prevImg = frame.removeChild(frameElement.firstElementChild);
  carousalElement.appendChild(prevImg);
  frame.appendChild(document.getElementById(imgID));
  activeImg();
};

exports.moveLeft = function (frameElement, carousalElement) {
  const len = carousalElement.length;
  const prevImg = frameElement.firstElementChild;
  const nextImgID = (Number(prevImg.id) + 7) % len;

  display(frameElement, carousalElement, nextImgID);
};

exports.moveRight = function (frameElement, carousalElement) {
  const len = carousalElement.length;
  const prevImg = frameElement.firstElementChild;
  const nextImgID = (Number(prevImg.id) + 1) % len;

  display(frameElement, carousalElement, nextImgID);
};


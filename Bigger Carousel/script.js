window.onload = function () {
  const container = document.getElementById("imgs");
  const images = document.querySelectorAll("#imgs img");
  const left = document.getElementById("leftB");
  const right = document.getElementById("rightB");
  let index = 0;
  let transformDiff;
  let imageSize = 500;
  left.addEventListener("click", function () {
    index++;
    if (index > images.length - 2) {
      index = 0;
    }
    container.style.transform = `translateX(${-index * imageSize}px)`;
    transformDiff = -index * imageSize;
  });
  right.addEventListener("click", function () {
    if (index === 0) {
      index = images.length - 2;
      transformDiff = -index * imageSize;
      container.style.transform = `translateX(${transformDiff}px)`;
    } else {
      index--;
      container.style.transform = `translateX(${transformDiff + imageSize}px)`;
      transformDiff = transformDiff + imageSize;
    }
  });
};

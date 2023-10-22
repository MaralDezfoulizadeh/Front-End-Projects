window.onload = function () {
  const container = document.getElementById("imgs");
  const images = document.querySelectorAll("#imgs img");
  const left = document.getElementById("leftB");
  const right = document.getElementById("rightB");
  let index = 0;
  let transformDiff;
  left.addEventListener("click", function () {
    index++;
    if (index > images.length - 1) {
      index = 0;
    }
    container.style.transform = `translateX(${-index * 400}px)`;
    transformDiff = -index * 400;
    // console.log(transformDiff + " is the transform X value after pushing left");
    // console.log(index);
  });
  // SOLVE THIS PROBLEM PLEASE

  right.addEventListener("click", function () {
    if (index === 0) {
      index = images.length - 1;
      // console.log("This is index inside of if after change: " + index);
      transformDiff = -index * 400;
      container.style.transform = `translateX(${transformDiff}px)`;
      // console.log(
      //   transformDiff + " is the transform x value after pushing right"
      // );
    } else {
      index--;
      container.style.transform = `translateX(${transformDiff + 400}px)`;
      transformDiff = transformDiff + 400;
      // console.log(
      //   transformDiff + " is the transform x value after pushing right"
      // );
      // console.log(index);
    }
  });
};

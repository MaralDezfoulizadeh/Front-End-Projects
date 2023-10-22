const container = [...document.querySelectorAll('.container')];
const right_button = [...document.querySelectorAll('.leftArrow')];
const left_button = [...document.querySelectorAll('.rightArrow')];
container.forEach((item, i) => {
  let container_dimention = item.getBoundingClientRect();
  let container_width = container_dimention.width;
  right_button[i].addEventListener('click', () =>{
    item.scrollLeft += container_width;
  })
  left_button[i].addEventListener('click', () =>{
    item.scrollLeft -= container_width;
  })
})
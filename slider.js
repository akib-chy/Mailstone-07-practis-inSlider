// const images = [
//   "img/img-1.jpg",
//   "img/img-2.jpg",
//   "img/img-3.jpg",
//   "img/img-4.jpg",
//   "img/img-5.jpg",
//   "img/img-6.jpg",
//   "img/img-7.jpg",
//   "img/img-8.jpg",
// ];
// let imgIndex = 0;
// const imgElement = document.getElementById("slider-img");
// setInterval(() => {
//   if (imgIndex >= images.length) {
//     imgIndex = 0;
//   }
//   const imgUrl = images[imgIndex];
//   console.log(imgUrl);
//   imgElement.setAttribute("src", imgUrl);
//   imgIndex++;
// }, 3000);

const images = [
  "img/img-1.jpg",
  "img/img-3.jpg",
  "img/img-4.jpg",
  "img/img-2.jpg",
];
let imgIndex = 0;
const imgElement = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  imgElement.setAttribute("src", imgUrl);
  imgIndex++;
}, 3000);

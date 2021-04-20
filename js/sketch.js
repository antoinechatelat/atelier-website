
let img;

function preload () {
  img = loadImage('../img/work2.jpeg');
}

function setup () {
  createCanvas (1350,600);
}

function drawn () {
  background('rgba(100%,0%,100%,0.5)');
  image(img, 0, 0);
}
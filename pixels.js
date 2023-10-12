function setup() {
  createCanvas(600,450,WEBGL);
  video = createCapture(VIDEO);
  video.size(600,450)
}

function draw() {
  background(200);
  video.loadPixels();
  let boxSize = int(map(mouseX,0,width,12,32));
  for(let y=0;y<video.height;y+=boxSize){
    for(let x=0;x<video.width;x+=boxSize){
      let index = (x +y*video.width)*4;
      let r = video.pixels[index];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];
      let a = video.pixels[index+3];
      push()
      fill(r,g,b,a)
      translate(x-width/2,y-height/2,boxSize/2);
      box(boxSize)
      pop()
    }
  }
}
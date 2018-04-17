function setup() {
  createCanvas(512, 512);
  background(255);
}
var last_x = -1;
var last_y = -1;
function mouseDragged() {
  if (mouseButton != LEFT) return;
  if (last_x > 0) {
    line(last_x, last_y, mouseX, mouseY);
  }
  last_x = mouseX;
  last_y = mouseY;
}
function mouseReleased() {
  last_x = last_y = -1;
  if (mouseButton == RIGHT) {
    // textSize(32); text('word', mouseX, mouseY);
    loadPixels();
    flood_fill(mouseX, mouseY);
    updatePixels();
  }
}
function set_pixel(x, y, c) {
  idx = (y * 512 + x) * 4;
  pixels[idx] = c;
  pixels[idx + 1] = c;
  pixels[idx + 2] = c;
  pixels[idx + 3] = 255;
}

function get_pixel(x, y) {
  idx = (y * 512 + x) * 4;
  return pixels[idx];
}

//właściwa funkcja do wypełniania
function flood_fill(x,y) {
  stos=[];
  stos.push([x,y]);
  while(stos.length > 0){
      a = stos.pop();
      if(a[0]<0 || a[0]>512) continue;
      if(a[1]<0 || a[1]>512) continue;
      if(get_pixel(a[0],a[1]) != 255) continue;

      set_pixel(a[0], a[1], 0);
      stos.push([a[0], a[1]-1]);
      stos.push([a[0], a[1]+1]);
      stos.push([a[0]-1,a[1]]);
      stos.push([a[0]+1, a[1]]);
  }
}
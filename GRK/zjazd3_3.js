function setup() {
    createCanvas(512, 512);
    background(255);
}

var x0 = -1;
var y0 = -1;
var x1 = -1;
var y1 = -1;
function mousePressed() {
    x0 = mouseX;
    y0 = mouseY;
}

function mouseDragged() {
    x1 = mouseX;
    y1 = mouseY;
    background(255);
    noStroke();
    fill('red');
    ellipse(x0 - 3, y0 - 3, 6);
    fill('green');
    ellipse(x1 - 3, y1 - 3, 6);
}

function mouseReleased() {
    background(255);
    loadPixels();
    draw_line();
    updatePixels();
}

function set_pixel(x, y, c) {
    idx = (y * 512 + x) * 4;
    pixels[idx] = -c;
    pixels[idx + 1] = c;
    pixels[idx + 2] = 0;
    pixels[idx + 3] = 255;
}

function draw_line() {
    dx = x1 - x0;
    dy = y1 - y0;
    Dp = 2 * dy - dx;
    Deq = 2 * dy;
    Dinc = 2 * dy - 2 * dx;
    D = Dp;
    y = y0;
    x = x0;
    set_pixel(x0, y0, 0);    
    while((x != x1)&&(y != y1)){
        if(D<0){
            set_pixel(x++,y,0);            
            D += Deq;
        }else{
            set_pixel(x++,y++,0);
            D += Dinc;
        }
    }
}

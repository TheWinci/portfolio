function setup() {
    createCanvas(800,600);
    background(100);
    noLoop();
}

function draw() {
    for(y=0; y<height; y++){
        for(x=0; x<width; x++) {
            set(x,y,color(0,170,220));
        }
    }
    updatePixels();

    for(y=2*height/3; y<height; y++){
        for(x=0; x<width; x++){
            set(x,y,color(0,150,0));
        }
    }
    updatePixels();

    for(i=0; i<1000; i++){
        var z=floor(random(0,width));
        var c=floor(random(2*(height/3),height));
        set(z,c,color('yellow'));
    }
    updatePixels();

    for(y=height/3; y<2*height/3; y++){
        for(x=width/4; x<3*width/4; x++){
            set(x,y,color('brown'));
        }
    }
    updatePixels();

    for(var y=50,w=0; y<200; y++,w+=4){
        for(x=width/2-w/2; x<width/2+w/2;x++){
            set(x,y,color('pink'));
        }
    }
    updatePixels();

}
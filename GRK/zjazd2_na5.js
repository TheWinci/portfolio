function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() {
    img.resize(256, 256);
    img.filter('gray');
    img.loadPixels();
    createCanvas(256, 256);
    var histogram = new Array(256);
    histogram.fill(0);
    for (x = 0; x < img.width; x++) {
        for (y = 0; y < img.height; y++) {
            pos = 4 * (y * img.width + x);
            r = img.pixels[pos];
            histogram[r]++;
        }
    }
    var historgram2 = new Array(255);
    for (i = 1; i < histogram.length; i++) {
        historgram2[i - 1] = histogram[i];
    }
    hmax = Math.max(...historgram2);

    background('white');
    stroke(color(0));
    for (i = 0; i < historgram2.length; i++) {
        histogram[i] = 256 * (historgram2[i]) / hmax;
        line(i, 256, i, 256 - historgram2[i]);
    }
}
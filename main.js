function preload(){

}
function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(800, 300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 150, 150, 300, 300);
    fill(252, 240, 8);
    stroke(253, 240, 8);
    circle(50, 50, 100);
    circle(50, 550, 100);
    circle(550, 550, 100);
    circle(550, 50, 100);
    fill(8, 118, 252);
    stroke(8, 118, 252);
    rect(80, 50, 430, 20);
    rect(80, 540, 430, 20);
    rect(40, 80, 20, 430);
    rect(540, 80, 20, 430);

}
function takesnapshot(){
    save("mypicture.png")
}
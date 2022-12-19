var NoseX=0;
var NoseY=0;
var twice
function preload() {
    twice=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()  {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    postNet=ml5.poseNet(video,modelLoaded)
    postNet.on('pose',getPoses)
}
function modelLoaded(){
    console.log("postNet is initialized")
}
function draw() {
    image(video,0,0,300,300)
// fill("light pink")
  //  stroke("white")
    //circle(NoseX,NoseY,20)
    image(twice,NoseX,NoseY,30,30)
}

function take_snapshot() {
    save('myFilterImage.png');
}
function getPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nose x ="+results[0].pose.nose.x)
        console.log("nose y ="+results[0].pose.nose.y)
        NoseX=results[0].pose.nose.x-10
        NoseY=results[0].pose.nose.y-10

    }
}
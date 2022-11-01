noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(900,150);
    video = createCapture(VIDEO);
    video.size(700,500);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    document.getElementById("width_height").innerHTML = "the size of the text is -" + difference ;
    background("blue");
    textSize(difference);
    fill("green")
    text("Tanmay", noseX, noseY);
    
    
    
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

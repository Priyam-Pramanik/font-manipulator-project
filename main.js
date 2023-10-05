function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized.");
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = result[0].pose.leftWristX.x;
        rightWristX = result[0].pose.rightWristX.x;
        difference = floor(leftWristX- rightWristX); 
    }
}

function draw(){
    background('#969A97');  
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400)  
}

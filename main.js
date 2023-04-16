difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550)
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet Initialised");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + " scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        console.log("Left Wrist X= " + leftWristX);

        rightWristX = results[0].pose.rightWrist.x;
        console.log("Right Wrist X= " + rightWristX);

        difference=floor(leftWristX-rightWristX)
    }
}

function draw(){
    background("#6C91C2")

    textSize(difference);
    fill("FFE787");
    text('Vikhyath', 50, 400)
}
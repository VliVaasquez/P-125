noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initalized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    

    console.log("leftWristX = " + leftWirstX +" rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    document.getElementById("font_size").innerHTML = "Width And Height of the word will be = " + difference +"px";
    background('#989A97');
    textSize(difference);
    fill('#ff0000');
    text('V-Li', 50,200);
    
    
}


img = "";
status2 = "";

function preload(){
    img = loadImage('butterknive.png')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecing Object";
}

function modelLoaded(){
    console.log("modelLoaded");
    status2 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
    }
    
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#c1de97")
    text("BUTTER KNIVE", 45, 75);
    text("63%", 140, 75);
    noFill();
    stroke("#c1de97");
    rect(30, 60, 550, 350);

    fill("#313b21")
    text("PERSON", 200, 275);
    text("86%", 260, 275);
    noFill();
    stroke("#313b21");
    rect(190, 260, 440, 160);
}

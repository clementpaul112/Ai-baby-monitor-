img = "";
status = "";
objects= [];
song = ""

function preload()
{
    song = loadSound("green_goblin_laugh.mp3");
}

function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Staus :Detecting objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
    object_detector.detect(img,gotResults);
}

function draw()
{
    image(img,0,0,600,400);

    if(status != "")
    {
        for( i=0 ; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML="status: object detected";
            fill("#03c2fc");
            precentage = floor(objects[i].confidence*100);
            text(objects[i].label + " " + precentage + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#03c2fc");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
        
    }
   // fill("#03c2fc");
   // text("dog", 60,80);
   // noFill();
   // stroke("#03c2fc");
   // rect(60,70,250,325);
    //fill("#03c2fc");
    //text("cat", 325, 125);
    //noFill();
    //stroke("#03c2fc");
    //rect(320,115,200,350);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function play()
{

}
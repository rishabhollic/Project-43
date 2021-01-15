var hr, mn, sc;
var hrAngle, mnAngle, scAngle,bg; 

function setup(){
    createCanvas(700,600); 
    angleMode(DEGREES);   

}

function draw()
{
    background(0);
    hr = hour();
    mn = minute();
    sc = second();

    textSize(50);
    textFont("Algerian")
    
    stroke("cyan");
    fill("red");
    text(hr+" :",220,550);

    stroke("yellow");
    fill("lime");
    text(mn+" :",320,550);

    stroke("purple");
    fill("orange");
    text(sc,420,550);

    textFont("Arial");
    textSize(18);
    noStroke();
    fill("white");
    text("12", 345,120);

    noStroke();
    fill("white");
    text("3", 480,255);

    noStroke();
    fill("white");
    text("9", 190,255);

    noStroke();
    fill("white");
    text("6", 350,400);

    translate(350,250)
    rotate(-90)

    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    push();
    rotate(scAngle); 
    stroke("orange");
    strokeWeight(5);
    line(0,0,150,0);
    pop()


    push();
    rotate(mnAngle);
    stroke("lime");
    strokeWeight(7.5);
    line(0,0,115,0);
    pop()


    push();
    rotate(hrAngle);
    stroke("red");
    strokeWeight(10);
    line(0,0,75,0);
    pop()

    stroke(255,0,255);
    point(0,0)


    strokeWeight(5);
    noFill();
   
    stroke("orange");
    arc(0,0,400,400,0,scAngle);
   
    strokeWeight(7.5);
    stroke("lime");
    arc(0,0,370,370,0,mnAngle);

    strokeWeight(10);
    stroke("red");
    arc(0,0,340,340,0,hrAngle);

    
    drawSprites();

  
}

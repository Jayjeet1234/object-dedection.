Zastatus="";
Zaarray=[];
function preload(){
    imagee=createImg('fruitbasket.jpg');
}
function setup(){
    canvas=createCanvas(900,600);
    canvas.center();
    imagee.hide();
    a=ml5.objectDetector('cocossd',ml5Loaded);
}
function ml5Loaded(){
    console.log("ML5 Is Loaded");
    Zastatus=true;
}
function draw(){
    image(imagee,0,0,900,600);
    if(Zastatus != ""){
        a.detect(imagee,Theerror);
        for(i=0;i<Zaarray.length;i++){
        document.getElementById("stast").innerHTML="Object is Detected";
        document.getElementById("noofobj").innerHTML="The number of objects is: "+Zaarray.length;
        c=floor(Zaarray[i].confidence*100)
        fill('Red');
        stroke('red')
        noFill();
        text(Zaarray[i].label+" "+c+"%",Zaarray[i].x+5,Zaarray[i].y+15);
        rect(Zaarray[i].x,Zaarray[i].y,Zaarray[i].width,Zaarray[i].height);
        }
    }
}
function Theerror(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        Zaarray=results;
    }
}

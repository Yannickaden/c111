//teachablemachine.withgoogle.com/models/fcKke5Gut/
prediction1="";


Webcam.set({
    width:351,
    height:301,
    image_format:'png',
    png_quality:89
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="' +data_uri+'">'
    });
}

console.log("ml5 version",ml5.version);
ml5.imageClassifier("teachablemachine.withgoogle.com/models/fcKke5Gut/model.json",modelLoaded);

function modelLoaded(){
console.log("model loaded");
}

function check(){

}















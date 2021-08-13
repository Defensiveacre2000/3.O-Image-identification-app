function setup()
{
Canvas = createCanvas(300 , 300);
Canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XVQU1wjNO/model.json',modelLoaded);
}
//function setup ends
function modelLoaded()
{
console.log('Model loaded!!!');
}
//function modelLoaded ends
function draw()
{
image(video , 0 , 0 , 300 , 300);
classifier.classify(video , gotResult);
}
//function draw ends
function gotResult(error , results)
{
if(error)
{
console.error(error);
}
else
{
console.log(results);
document.getElementById("Object").innerHTML = results[0].label;
document.getElementById("Ac").innerHTML = results[0].confidence.toFixed(3);
}
}
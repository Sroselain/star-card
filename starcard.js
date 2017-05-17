/**
 * Created by Administrator on 2017/5/7.
 */
var img=document.getElementById("img");
var intro=document.getElementsByClassName("intro")[0];
var frameBottom=document.getElementsByClassName("introFrameBottom")[0];
var grade=document.getElementById("grade");
var value=document.getElementById("value");
var position1=document.getElementById("position1");
var position2=document.getElementById("position2");

function change(evt){
    switch(evt.parentNode.id){
        case "James":img.setAttribute("src","james.jpg");
            intro.innerHTML="Lebron James";
            frameBottom.style.background="linear-gradient(to top,purple,transparent)";
            grade.childNodes[0].nodeValue="S";
            value.childNodes[0].nodeValue=198;
            position1.childNodes[0].nodeValue="SF";
            position2.style.display="block";
            position2.childNodes[0].nodeValue="PF";
            break;
        case "Durrant": img.setAttribute("src","otherstars/durrant.jpg");
                intro.innerHTML="Kevin Durrant";
            frameBottom.style.background="linear-gradient(to top,purple,transparent)";
            grade.childNodes[0].nodeValue="S";
            value.childNodes[0].nodeValue=196;
            position1.childNodes[0].nodeValue="SF";
            position2.style.display="block";
            position2.childNodes[0].nodeValue="PF";
            break;
        case "Curry": img.setAttribute("src","otherstars/curry.jpg");
            intro.innerHTML="Steffen Curry";
            frameBottom.style.background="linear-gradient(to top,purple,transparent)";
            grade.childNodes[0].nodeValue="S";
            value.childNodes[0].nodeValue=196;
            position1.childNodes[0].nodeValue="PG";
            position2.style.display="none";
            break;
        case "Harden": img.setAttribute("src","otherstars/harden.png");
            intro.innerHTML="James Harden";
            frameBottom.style.background="linear-gradient(to top,purple,transparent)";
            grade.childNodes[0].nodeValue="S";
            value.childNodes[0].nodeValue=194;
            position1.childNodes[0].nodeValue="PG";
            position2.style.display="block";
            position2.childNodes[0].nodeValue="SG";
            break;
        case "Westbrook":img.setAttribute("src","otherstars/westbrook.jpg");
            intro.innerHTML="Westbrook";
            frameBottom.style.background="linear-gradient(to top,purple,transparent)";
            grade.childNodes[0].nodeValue="S";
            value.childNodes[0].nodeValue=194;
            position1.childNodes[0].nodeValue="PG";
            position2.style.display="none";
            break;
        case "Leonard":img.setAttribute("src","otherstars/leonard.jpg");
            intro.innerHTML="Kawhi Leonard";
            frameBottom.style.background="linear-gradient(to top,purple,transparent)";
            grade.childNodes[0].nodeValue="S";
            value.childNodes[0].nodeValue=192;
            position1.childNodes[0].nodeValue="SF";
            position2.style.display="block";
            position2.childNodes[0].nodeValue="PF";
            break;
        case "Ross":img.setAttribute("src","otherstars/ross.jpg");
            intro.innerHTML="Terrence Ross";
            frameBottom.style.background="linear-gradient(to top,blue,transparent)";
            grade.childNodes[0].nodeValue="A+";
            value.childNodes[0].nodeValue=176;
            position1.childNodes[0].nodeValue="SF";
            position2.style.display="none";
            break;
        case "Pondexter":img.setAttribute("src","otherstars/pondexter.jpg");
            intro.innerHTML="Pondexter";
            frameBottom.style.background="linear-gradient(to top,green,transparent)";
            grade.childNodes[0].nodeValue="B+";
            value.childNodes[0].nodeValue=144;
            position1.childNodes[0].nodeValue="SG";
            position2.style.display="block";
            position2.childNodes[0].nodeValue="SF";
            break;
    }
}

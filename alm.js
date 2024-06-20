


/* yazıyı kaydertmek */

document.addEventListener("DOMContentLoaded",function(){

    var kk=localStorage.getItem("ss");
    if(kk){
     var tt=document.getElementById("txt").value=kk
    }
} )
const yy=document.getElementById("bll");
function  kyd(){
    

var üü=document.getElementById("txt").value;
localStorage.setItem("ss",üü)


/*  kayıtedilen alalarmlar */
var saatt=document.getElementById("saatim").value;
var kayıtlıalarm=document.createElement("li");
kayıtlıalarm.id="ppp";
document.body.appendChild(kayıtlıalarm);
/* boşluk bırakma */
var boşluk=document.createElement("br")
boşluk.id="bll"

document.body.appendChild(boşluk);

document.getElementById("ppp").innerHTML +=saatt+":"+" "+üü+" "+yy




}
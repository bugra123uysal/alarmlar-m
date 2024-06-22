





/* yazıyı kaydertmek */

document.addEventListener("DOMContentLoaded",function(){

    var kk=localStorage.getItem("ss");
    if(kk){
     var tt=document.getElementById("txt").value=kk
    }
} )
const yy=document.getElementById("bll");
function  kyd(){

    /* kullanıcının saatini almak  */
var ksaat=new Date().getHours();
var kdk=new Date().getMinutes();
var kulanıcıdanalınan= ksaat+":"+kdk
    
 var  yer=document.getElementById("almrgor");

var üü=document.getElementById("txt").value;
localStorage.setItem("ss",üü)


/*  kayıtedilen alalarmlar */
var saatt=document.getElementById("saatim").value
const kayıtlıalarm=document.createElement("p")
kayıtlıalarm.id="ppp";
yer.appendChild(kayıtlıalarm);
document.getElementById("ppp").innerHTML +=saatt+":"+" "+üü+'<br>'



if(kulanıcıdanalınan=saatt){

    alert(saatt+" "+"alarm vakdi geldi")
}else{

    console.log("sa")

}
}







/* yazıyı kaydertmek */

document.addEventListener("DOMContentLoaded",function(){

    var kk=localStorage.getItem("ss");
    if(kk){
     var tt=document.getElementById("txt").value=kk
    }
} )
const yy=document.getElementById("bll");
const daı=document.getElementById("iün");
const saatt=document.getElementById("saatim");
 /* kullanıcının allarm kuracağı  saati almak  */

 saatt.addEventListener('input',function(){
        
        
        
    const a=saatt.value;

    const [hour, minute] =a.split(':');
   
   daı.textContent= `Saat: ${hour}, Dakika: ${minute}`;
});

/* güncel saat value si */

var gcnl=new Date();
var whct=gcnl.getHours();
var mnt=gcnl.getMinutes();

function  kyd(){


  
    var şl=document.getElementById("saatim").value 
   
   
 var  yer=document.getElementById("almrgor");

var üü=document.getElementById("txt").value;
localStorage.setItem("ss",üü)


/*  kayıtedilen alalarmlar */
const kayıtlıalarm=document.createElement("p")
kayıtlıalarm.id="ppp";
yer.appendChild(kayıtlıalarm);
document.getElementById("ppp").innerHTML +=şl+":"+" "+üü+'<br>'







}
/* alarm kurmaya çalıştım */
if( whct === hour && mnt === minute ){
    console.log("alarm vakdi geldi")
 
 } else{
     console.log("tekrar deneyininz")
 }







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
 /* kullanıcının saatini almak  */


     
function  kyd(){


  
    saatt.addEventListener('input',function(){
        
        
        
            const a=saatt.value;
        
            const [hour, minute] =a.split(':');
           
           daı.textContent=`Saat: ${hour}, Dakika: ${minute}`;
        });

   
 var  yer=document.getElementById("almrgor");

var üü=document.getElementById("txt").value;
localStorage.setItem("ss",üü)


/*  kayıtedilen alalarmlar */
const kayıtlıalarm=document.createElement("p")
kayıtlıalarm.id="ppp";
yer.appendChild(kayıtlıalarm);
document.getElementById("ppp").innerHTML +=daı+":"+" "+üü+'<br>'




}

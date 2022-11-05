refresh();

function refresh(){

var a = new Date();

var jam = a.getHours();
var menit = a.getMinutes();
// var detik = a.getSeconds();
  
  if (jam>=13&&jam<24){
    jam -= 12;}
  
  if (menit<10){
    jam = "0"+jam;}

document.getElementById("jam").innerHTML = jam;
document.getElementById("menit").innerHTML = menit;
// document.getElementById("detik").innerHTML = detik;
setTimeout(refresh, 1000);
}



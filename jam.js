refresh();

function refresh(){

var a = new Date();
var format = "AM";

var jam = a.getHours();
var menit = a.getMinutes();
// var detik = a.getSeconds();
  
  if (jam>=13&&jam<24){
    jam -= 12;
    format = "PM";
    }
  
  if (menit<10){
    menit = "0"+menit;}

document.getElementById("jam").innerHTML = jam;
document.getElementById("menit").innerHTML = menit;
document.getElementById("ampm").innerHTML = format;
// document.getElementById("detik").innerHTML = detik;
setTimeout(refresh, 1000);
}



refresh();

function refresh(){

var a = new Date();

var jam = a.getHours();
var menit = a.getMinutes();
// var detik = a.getSeconds();

document.getElementById("jam").innerHTML = jam;
document.getElementById("menit").innerHTML = menit;
// document.getElementById("detik").innerHTML = detik;
setTimeout(refresh, 1000);
}



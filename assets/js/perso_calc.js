// Google
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-55536999-1');

// Generieren
function checksum(inp){var i=1;var cs=0;for (var j=0;j<inp.length;j++) {switch (i) {case 1:cs += inp.substring(j,j+1)*7;i++;break;case 2:cs += inp.substring(j,j+1)*3;i++;break;case 3:cs += inp.substring(j,j+1)*1;i = 1;break;}}cs = cs % 10;return cs;}
function TwoDig(inp){return ((inp<10)?'0':'')+inp;}
function randd(contr,slice){var xND = '';if (slice == 0) {xND += TwoDig(Math.floor(Math.random()*100));xND += '' + TwoDig(Math.floor(Math.random()*13));xND += '' + TwoDig(Math.floor(Math.random()*32));} else {}contr.value = xND;}
function rand(contr,count){contr.value = '';for (var i=1;i<=count;i++) {contr.value += Math.floor(Math.random()*10);}}
function check(){var xp1 = document.pa.p1.value;var xp2 = document.pa.p2.value;var xp3 = document.pa.p3.value;var xp4 = document.pa.p4.value;var xp5 = document.pa.p5.value;document.pa.ewk.value = xp1.substring(0,4);document.pa.lfd.value = xp1.substring(4,9);document.pa.nat.value = xp2;document.pa.geb.value = xp3.substring(0,6);document.pa.abl.value = xp4.substring(0,6);if ((xp1.length==10) && (xp2.length==1) && (xp3.length==7) && (xp4.length==7) && (xp5.length==1)) {var xc1 = checksum(xp1.substring(0,xp1.length-1));var xc3 = checksum(xp3.substring(0,xp3.length-1));var xc4 = checksum(xp4.substring(0,xp4.length-1));var xca = checksum(xp1+xp3+xp4);if ((xc1 == xp1.substring(xp1.length-1,xp1.length)) && (xc3 == xp3.substring(xp3.length-1,xp3.length)) && (xc4 == xp4.substring(xp4.length-1,xp4.length)) && (xca == xp5)) { check_msg(1);} else {check_msg(0);}} else error_msg();}
function generate(){var ewk = document.pa.ewk.value;var lfd = document.pa.lfd.value;var nat = document.pa.nat.value;var geb = document.pa.geb.value;var abl = document.pa.abl.value;if ((ewk.length==4) && (lfd.length==5) && (nat.length==1) && (geb.length==6) && (abl.length==6)) {var xp1 = ewk+lfd+checksum(ewk+lfd);var xp2 = nat;var xp3 = geb + checksum(geb);var xp4 = abl + checksum(abl);var xp5 = checksum(xp1+xp3+xp4);document.pa.p1.value = xp1;document.pa.p2.value = xp2;document.pa.p3.value = xp3;document.pa.p4.value = xp4;document.pa.p5.value = xp5; clear_msg();} else error_msg();}
function clearInp(){with (document.pa) {p1.value = '';p2.value = 'D';p3.value = '';p4.value = '';p5.value = '';ewk.value = '';lfd.value = '';nat.value = 'D';geb.value = '';abl.value = ''; clear_msg();}}
function getDOM(year,month) {if (month==2) { if (year % 4 == 0) { return Math.floor(Math.random()*29)+1; } else { return Math.floor(Math.random()*28)+1; } }if (month % 2 == 1) { return Math.floor(Math.random()*31)+1; } else { return Math.floor(Math.random()*30)+1; }}
function RandDOB(contr){var xCD = new Date();var xCY = xCD.getYear();var xCM = xCD.getMonth();var xCD = xCD.getDate();var xYrs = 25 /*ALTER*/;if (xYrs == null) { return false; }var xNY = xCY - xYrs;var xCDT = new Date(xNY,xCM,xCD,0,0,0);var xNM = Math.floor(Math.random()*12)+1;var xND = getDOM(xNY,xNM);var xNDT = new Date(xNY,xNM-1,xND,0,0,0);if (xNDT>xCDT) { xNY--; }xNY = xNY % 100;contr.value = ((xNY<10)?'0':'')+xNY+((xNM<10)?'0':'')+xNM+((xND<10)?'0':'')+xND;}

function RandDOE(contr) {
  var xCD = new Date();
  var xCY = xCD.getYear();
  var xCM = xCD.getMonth();
  var xCD = xCD.getDate();
  var xYrs = 2025; //Ablaufdatum
  if(xYrs == null)
    return
      false;
  var xNY = xCY + eval(xYrs);
  var xCDT = new Date(xNY,xCM,xCD,0,0,0);
  var xNM = Math.floor(Math.random()*12)+1;
  var xND = getDOM(xNY,xNM);
  var xNDT = new Date(xNY,xNM-1,xND,0,0,0);
  if(xNDT<xCDT)
    xNY++;
  xNY = xNY % 100;
  contr.value = ((xNY<10)?'0':'')+xNY+((xNM<10)?'0':'')+xNM+((xND<10)?'0':'')+xND;
}

function generateDirect() {
  rand(document.pa.ewk,4);
  rand(document.pa.lfd,5);
  RandDOB(document.pa.geb);
  RandDOE(document.pa.abl);
  generate();
}

function error_msg() {
  document.getElementById("msg").innerHTML = "Es ist ein Fehler aufgetreten! Verwende am Besten <b>Generate Direct</b>!";
}

function clear_msg() {
  document.getElementById("msg").innerHTML = "";
}

function check_msg(id) {
  if(id == 0)
    document.getElementById("msg").innerHTML = "Die Personalausweinummer ist ungültig!";
  else
    document.getElementById("msg").innerHTML = "Die Personalausweinummer ist gültig!";
}

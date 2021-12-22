 

var mobilni= parseInt(prompt("Vnesete kolku mobilni sakate da kupite"));

var cena = parseInt(prompt("Vnesete kolku e cenata na eden mobilen"));

var taksa = parseInt(prompt("Vnesete kolku e taksata na eden mobilen"));

var tax= taksa/100;

var soDanok = tax*cena +cena;

var vkupno = soDanok*mobilni;

console.log(vkupno);
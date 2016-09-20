/*
Fading Scroller- By DynamicDrive.com
For full source code, 100's more DHTML scripts, and TOS,
visit http://www.dynamicdrive.com
*/

var delay=3000 //set delay between message change (in miliseconds)
var fcontent=new Array()
begintag='<font face="verdana" size=2>' //set opening tag, such as font declarations
fcontent[0]="<b>Paisajes Urbanos</b>, actualmente es una empresa formada por un equipo interdisciplinario de profesionales relacionados con las áreas verdes."
fcontent[1]="<b>En Paisajes Urbanos</b>, ofrecemos una extensa gama de servicios profesionales en el área de diseño de proyectos del Paisaje y Obras Complementarias."
fcontent[2]="Contamos con la experiencia de mas de 10 años de un excelente equipo de Ingenieros y Arquitectos paisajistas en el diseño."
fcontent[3]="contamos con experiencia nacional, con proyectos realizados en Guadalajara, Acapulco, Puerto Vallarta entre otras."
fcontent[4]="Contamos además con la producción de pasto en rollo, de distintas variedades y la producción de varios tipos de plantas."
fcontent[5]="<b>Nuestro Vivero está en:</b> Lago Sayula # 09 Esquina con Lago Tequesquitengo Fracc. Playas de Cajititlán Tlajomulco de Zúñiga, Jalisco, México"
closetag='</font>'

var fwidth=150 //set scroller width
var fheight=150 //set scroller height

///No need to edit below this line/////////////////

var ie4=document.all&&!document.getElementById
var ns4=document.layers
var DOM2=document.getElementById
var faderdelay=0
var index=0

if (DOM2)
faderdelay=2000

//function to change content
function changecontent(){
if (index>=fcontent.length)
index=0
if (DOM2){
document.getElementById("fscroller").style.color="rgb(255,255,255)"
document.getElementById("fscroller").innerHTML=begintag+fcontent[index]+closetag
colorfade()
}
else if (ie4)
document.all.fscroller.innerHTML=begintag+fcontent[index]+closetag
else if (ns4){
document.fscrollerns.document.fscrollerns_sub.document.write(begintag+fcontent[index]+closetag)
document.fscrollerns.document.fscrollerns_sub.document.close()
}

index++
setTimeout("changecontent()",delay+faderdelay)
}

// colorfade() partially by Marcio Galli for Netscape Communications.  ////////////
// Modified by Dynamicdrive.com

frame=20;
hex=255  // Initial color value.

function colorfade() {	         	
// 20 frames fading process
if(frame>0) {	
hex-=12; // increase color value
document.getElementById("fscroller").style.color="rgb("+hex+","+hex+","+hex+")"; // Set color value.
frame--;
setTimeout("colorfade()",20);	
}
else{
document.getElementById("fscroller").style.color="rgb(0,0,0)";
frame=20;
hex=255
}   
}

if (ie4||DOM2)
document.write('<div id="fscroller" style="border:0px solid black;width:'+fwidth+';height:'+fheight+';padding:2px"></div>')

window.onload=changecontent
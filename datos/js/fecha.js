<SCRIPT><!--
dows = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
months = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
now = new Date();
dow = now.getDay();
d = now.getDate();
m = now.getMonth();
h = now.getTime();
y = now.getYear();
document.write(dows[dow]+" "+d+" de "+months[m]+" de "+y);
//--></SCRIPT>
<script LANGUAGE="JavaScript"> 
	var dt = new Date();
	var hr = dt.getHours();
	var msg = ((hr<12) ? "Buenos dias" :"Buenas Noches");
	msg = ((hr>11)&&(hr<19) ? "Buenas Tardes" : msg);
	msg=" <H2> "+msg+" !</H2>";
	document.write(msg); 
</script>
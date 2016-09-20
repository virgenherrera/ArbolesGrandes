var speed = 50 
var pause = 3000
var timerID = null
var bannerRunning = false
var ar = new Array()
ar[0] = ">>>> http://ArbolesGrandes.com <<<<"
ar[1] = "Paisajes Urbanos Especialistas en Arboles de 2 o más Metros de altura."
ar[2] = "Oficinas en: España 1756 -&#8220;C&#8221; Colonia Moderna Guadalajara, Jalisco, México. c.p. 44190"
ar[3] = "Nuestro Vivero está en: Lago Sayula # 09 Esquina con Lago Tequesquitengo Fracc. Playas de Cajititlán..."
ar[4] = "...(junto a la Laguna de Cajititlán, Jalisco) Municipio de Tlajomulco de Zúñiga, Jalisco México"
ar[5] = ">>>> http://ArbolesGrandes.com <<<<"
ar[6] = "Powered by: &#8220;Virgen Systems&#8221;"
ar[7] = "Virgen Systems... >Lo Mejor en Diseño Web<"
var currentMessage = 0
var offset = 0
function stopBanner() {
if (bannerRunning)
clearTimeout(timerID)
bannerRunning = false
}
function startBanner() {
stopBanner()
showBanner()
}
function showBanner() {
var text = ar[currentMessage]
if (offset < text.length) {
if (text.charAt(offset) == " ")
offset++ 
var partialMessage = text.substring(0, offset + 1) 
window.status = partialMessage
offset++ // IE sometimes has trouble with "++offset"
timerID = setTimeout("showBanner()", speed)
bannerRunning = true
} else {
offset = 0
currentMessage++
if (currentMessage == ar.length)
currentMessage = 0
timerID = setTimeout("showBanner()", pause)
bannerRunning = true
}
}
startBanner();
// -->

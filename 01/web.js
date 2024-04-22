const bodyEl = document.querySelector('body'); /*Bu satır, body HTML elementini seçer ve bodyEl isimli bir değişkene atar. Bu değişken, sayfanın body elementine yapılan referanstır.*/

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX; /* event.offsetX ve event.offsetY, fare imlecini body elementine göre x ve y koordinatlarını verir. Bu değerler, fare imlecinin body elementi içindeki konumunu temsil eder. */
    const yPos = event.offsetY;

    const spanEl = document.createElement('span'); /* Yeni bir span elementi oluşturur ve spanEl değişkenine atar. */
    spanEl.style.left = xPos + 'px'; /* Oluşturulan span elementinin style özelliklerine left ve top değerleri atanır. Bu değerler fare imlecinin konumuyla aynı olacak şekilde ayarlanır, böylece span doğrudan fare imlecinin üzerinde konumlanır. */
    spanEl.style.top = yPos + 'px';
    const size =Math.random()*100; /* span elementi için rastgele bir boyut belirlenir (0 ile 100 piksel arasında). Hem genişlik (width) hem de yükseklik (height) bu değere ayarlanır. */
    spanEl.style.width = size +'px';
    spanEl.style.height = size + 'px';
    bodyEl.appendChild(spanEl); /* Oluşturulan span elementi body elementine eklenir, böylece sayfada görünür hale gelir. */
    setTimeout(() =>{
        spanEl.remove();
    },3000); /* setTimeout fonksiyonu, belirtilen span elementini 3000 milisaniye (3 saniye) sonra sayfadan kaldırır. Bu, span elementinin kısa bir süre göründükten sonra otomatik olarak temizlenmesini sağlar. */
}) /* Bu, bodyEl (yani body elementi) üzerine bir "mousemove" olay dinleyicisi ekler. Bu, fare body üzerinde hareket ettiğinde belirtilen fonksiyonun tetikleneceği anlamına gelir. */
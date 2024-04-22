const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');
/*Bu satırlar, HTML'de belirli id özelliklerine sahip olan elementleri seçer. Her bir element, belirtilen tarih bilgilerini göstermek için kullanılacaktır. Bu id değerleri sırasıyla ay ismi, gün ismi, gün numarası ve yıl için kullanılır.*/

const date = new Date();
/*Bu satır, JavaScript'in Date nesnesi ile şu anki tarih ve saati alır. Bu nesne, diğer tarih bilgilerini elde etmek için kullanılacak olan temel nesnedir.*/

const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString('tr',{
    month:'long'
});
/* getMonth metodu, ayın sıra numarasını döndürür (0'dan 11'e kadar, Ocak 0 ve Aralık 11 olacak şekilde). toLocaleString metodu, ay ismini Türkçe olarak uzun formatta ('long'), yani tam ismiyle ("Ocak", "Şubat", vs.) almak için kullanılır. Sonra bu değer monthNameEl elementinin iç metnine atanır.*/

dayNameEl.innerText = date.toLocaleString('tr',{
    weekday:"long"
});
/* toLocaleString metodu ile haftanın gün ismini Türkçe olarak uzun formatta alır ('long' formatta, örneğin "Pazartesi", "Salı", vs.). Bu değer dayNameEl elementinin iç metnine atanır. */

dayNumberEl.innerText = date.getDate();
/* getDate metodu, ayın gün numarasını döndürür (1'den 31'e kadar). Bu değer dayNumberEl elementinin iç metnine atanır.*/
yearEl.innerText = date.getFullYear();
/* getFullYear metodu, dört basamaklı yıl değerini döndürür. Bu değer yearEl elementinin iç metnine atanır.*/

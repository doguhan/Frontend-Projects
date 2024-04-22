const containerEl = document.querySelector('.container'); /* Bu satır, HTML'deki sınıfı container olan bir elementi seçer ve bu elementi containerEl adlı bir değişkene atar. */

const careers = ["Developer", "Designer", "Author", "Instructor", "Father", "Student"]; /* Bu satır, animasyonda kullanılacak meslek isimlerini içeren bir dizi tanımlar. */

let careerIndex = 0; /* careerIndex, careers dizisindeki mevcut mesleğin indeksini tutar. */
let characterIndex = 0; /* characterIndex, mevcut mesleğin karakterlerine erişimde kullanılır. */

const vowels = ['A', 'E', 'I', 'O', 'U', 'Y']; /* İngilizce'deki ünlü harfleri içeren bir dizi tanımlar. Bu dizi, mesleğin ilk harfi ünlü ise "an" yerine "a" kullanılmasını kontrol etmede kullanılır. */

updateText(); /* Sayfa yüklendiğinde updateText fonksiyonunu çağırır. */

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
<h1>I am ${vowels.includes(careers[careerIndex].slice(0, 1)) ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>
` /* Bu fonksiyon, characterIndex'i artırarak her çağrıldığında mesleğin bir sonraki harfini ekler. innerHTML kullanarak containerEl içindeki HTML'i günceller. Burada, careers dizisindeki geçerli mesleğin ilk harfi ünlü ise "an", değilse "a" kullanılır. slice(0, characterIndex) ile başlangıçtan itibaren characterIndex'e kadar olan karakterler alınır. */


    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    } /*  Eğer tüm karakterler eklenmişse, sonraki mesleğe geçer ve characterIndex'i sıfırlar. Tüm meslekler gösterildiyse, careerIndex'i sıfırlayarak dizinin başına döner. */

    setTimeout(updateText, 400); /* updateText fonksiyonunu her 400 milisaniyede bir tekrar çağırarak animasyonu sürdürür. */
}
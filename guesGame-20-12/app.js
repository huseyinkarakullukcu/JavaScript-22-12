// Sayı Tahmin Oyunu
const randomNumber = Math.trunc(Math.random() * 100)
let trying = 0 //deneme hakkı (5 adet verildi if ile kontrol ettiriliyor)
let enterNumber //girilen sayı
let count = 0 //sayaç
do {
    count++
    trying++
    enterNumber = +prompt(`(0-100) olan sayıyı tahmin edin. ${count}. deneme : `)
    //sayının 0-100 arasında girilmesi kontrolü
    if (enterNumber < 0 || enterNumber > 100) {
        alert("Lütfen 0-100 arasında bir sayı giriniz..!")
    } else {
        //sayıyı tahmin etttiğimiz bölüm
        if (enterNumber == randomNumber) {
            alert(`Tebrikler sayıyı ${count}. denemenizde tahmin ettiniz : ${randomNumber}`)
            console.log(`Tebrikler Sayıyı tahmin ettiniz : ${randomNumber}`)
            break
        } else if (enterNumber > randomNumber) {
            alert("Daha küçük bir rakam giriniz")
        } else if (enterNumber < randomNumber) {
            alert("Daha büyük bir rakam giriniz")
        }       
    }
     //5. denemeden sonra bize devam edip etmeyeceğimizi soruyor.
     if (trying > 4) {
        let statusControl = prompt("Sayıyı bilemediniz devam etmek istiyor musunuz?(e/h): ")
        if (statusControl == 'e') {
            trying = 0
        } else {
            console.log(`Sayıyı bilemediniz. Sayı : ${randomNumber}`)
            break
        }
    }
} while (randomNumber != enterNumber) //Sayı tahmin edilemeyinceye kadar dön
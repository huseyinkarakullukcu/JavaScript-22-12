//! ODEV2
//! Clarusway’deki haftalik ders ve etkinlik programinizi,
//! console’dan girilen gun degerine gore cikti veren kodu
//! switch-case yapisi ile yaziniz.

//! Program
//! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

let gun = prompt("Günü giriniz : ")
switch(gun){
    case 'pazartesi':
        console.log("Pazartesi InClass dersiniz vardır. JSBasic")
        break
    case 'sali':
        console.log("Salı InClass dersiniz vardır. HTML/CSS")
        break
    case 'carsamba':
        console.log("Çarşamba InClass dersiniz vardır. JSBasic")
        break
    case 'persembe':
        console.log("Perşembe InClass dersiniz vardır. HTML/CSS")
        break
    case 'cuma':
        console.log("Cuma TeamWork dersiniz vardır. HTML/CSS/JSBasic work")
        break
    case 'cumartesi':
        console.log("Cumartesi InClass ve Workshop dersiniz vardır. HTML/CSS/JSBasic")
        break
    case 'pazar':
        console.log("Pazar Self-Study vardır. Flip ödevleri")
        break
    default:
        console.log("Yanlış değer girildi!!!")
        break
}
    
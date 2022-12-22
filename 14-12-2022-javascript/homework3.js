//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.
//* let salary = 5000;
//* salary = salary * 1.5
//
const maas = +prompt("Maaşınızı giriniz : ")
const salary = 5000
//const yeniMaas = (maas < salary) ? maas*1.5 : maas * 1.1
let yeniMaas
if(maas<salary){
    yeniMaas = maas*1.5
    console.log(`Yeni maaşınız ${yeniMaas} olarak tanımlanmıştır.`)
}else if(maas>=salary)
{
    yeniMaas = maas*1.1
    console.log(`Yeni maaşınız ${Math.trunc(yeniMaas)} olarak tanımlanmıştır.`)
}
else{
    console.log("Yanlış değer girdiniz!!!")
}

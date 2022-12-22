//! ODEV4: Console’dan kisininin gelir ve gider miktarini alan
//! eger kisinin geliri giderinden en az asgari ucret kadar fazla ise
//! Kredi Verilebilir 🤑 , değilse  Kredi Verilemez 🥺
//! seklinde cikti veren kodu Ternary deyimi kullanarak yaziniz.
//
const gelir = +prompt("Aylık gelirinizi giriniz : ")
const gider = +prompt("Aylık giderinizi giriniz : ")
const asgeriUcret = 5500
let durum = (gelir-gider) > asgeriUcret ? "Kredi Verilebilir 🤑" : "Kredi Verilemez 🥺" 
alert(durum)
console.log(durum)

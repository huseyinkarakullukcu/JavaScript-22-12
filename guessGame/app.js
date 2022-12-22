const randomNumber = Math.trunc(Math.random()*100)
let enteredNumber
let counter=0
let guessNumber=0
do{
    counter++
    guessNumber++
    if(counter<=5){
        enteredNumber =+prompt(`(0-100) arasında bir sayı tahmin ediniz. 5 hakkınız var. ${counter}. denemeniz`)
        if(randomNumber==enteredNumber){
            alert(`Tebrikler sayıyı tahmin ettiniz. Sayı :${randomNumber} . Sayıyı ${guessNumber}. denemnizde buldunuz!`)
            console.log(`Sayıyı ${guessNumber}. denemenizde buldunuz! Sayı ${randomNumber}`)
        }else{
            console.log("yanlış değer!!!")
            if(randomNumber>enteredNumber){
                console.log("Daha büyük bir sayı girin")
            }else if(randomNumber<enteredNumber){
                console.log("Daha küçük bir sayı girin")
            }
        }
    }else{
        alert("5 Hakkınız bitti. Sayıyı tahmin edemediniz!!!")
        let statusControl = prompt("Devam etmek istiyor musunuz?(e/h) : ")
        if(statusControl=='e'){
            counter=0
        }else{
            console.log("Sayıyı tahmin edemediniz!!!")
            break
        } 
    }

}while(randomNumber!=enteredNumber)

//console.log(randomNumber)

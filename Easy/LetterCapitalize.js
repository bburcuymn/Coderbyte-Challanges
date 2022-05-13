/* Capitalize the first letter of each word.
For example: Input: "hello word" -> Output: Hello World */


function LetterCapitalize(str) {
    //code goes here

let arr = str.split(" "); // Verilen ifadeyi kelimelere ayırarak array oluştur.

for(let i=0; i<arr.length; i++){ // Sırayla dizideki her elemana (kelimeye) bak.

    let word = "";

    for(let j =0; j<arr[i].length; j++){ // Seçilen kelimenin harflerine bak.

        if(j===0){
            word += arr[i][j].toUpperCase(); // Eğer ilk harfse büyük harfe çevir.   
        }
        else{
            word+= arr[i][j]; // ilk harf değilse değiştirmeden ekle.
        }
    }
    arr[i]=word;
}
return arr.join(" ");

}

console.log(LetterCapitalize(readline()));

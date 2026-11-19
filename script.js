// let str = "SALOM adwa wa a wa w aw";

// let str1  = "aliklar"

// console.log(str.length);

// // console.log(str.trim());  trim, trimStar, trimEnd.

// console.log(str.toUpperCase ());
// console.log(str.toLowerCase().trim());

// console.log(str.indexOf("wa"));
// console.log(str.lastIndexOf("wa"));

// console.log(str.includes("SALOM"));

// console.log(str.slice(1,5));

// console.log(str.replace("SALOM","QALaysan"));

// console.log(str + str1);

// console.log(str. concat(str1));

let ism = prompt ("ismingizni kiriting")

let m = prompt ("salom "  +  ism + " siz ismingizni hariflarini katta yoki kichik qilasizmi?   1)katta  2)kichik" )

if (m === "1") {
    alert(ism.toUpperCase (). trim());
}

if (m === "2") {
    alert(ism.toLowerCase().trim())
}

 
let harf = confirm(ism + " ismingizda nechta harf borligini bilishni hohlaysizmi?")
if(harf === true) {
    alert("Sizning ismingizda " + ism.length + " ta harf bor")
}
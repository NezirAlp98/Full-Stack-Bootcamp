# JavaScript Nedir?

JavaScript, web sayfalarını dinamik ve interaktif hale getirmek için kullanılan bir programlama dilidir. HTML ve CSS ile birlikte web geliştirme üçlüsünü oluşturur. JavaScript ile web sayfalarına animasyon, oyun, form, harita, grafik gibi özellikler ekleyebilirsiniz.

## Temel Kavramlar

JavaScript'te bazı temel kavramlar vardır. Bunlar:

- Değişkenler: Değerleri saklamak için kullanılan isimlendirilmiş yerlerdir. `var`, `let` veya `const` anahtar kelimeleri ile tanımlanabilirler.
- Veri Tipleri: Değerlerin türleridir. JavaScript'te `string`, `number`, `boolean`, `null`, `undefined`, `symbol` ve `object` olmak üzere yedi temel veri tipi vardır.
- Operatörler: Değerler üzerinde işlemler yapmak için kullanılan sembollerdir. `+`, `-`, `*`, `/`, `%`, `=`, `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`, `&&`, `||`, `!` gibi operatörler vardır.
- Kontrol Yapıları: Program akışını yönlendirmek için kullanılan ifadelerdir. `if...else`, `switch...case`, `for`, `while`, `do...while`, `break`, `continue` gibi kontrol yapıları vardır.
- Fonksiyonlar: Belirli bir görevi yerine getirmek için yazılan kod bloklarıdır. `function` anahtar kelimesi ile tanımlanabilirler veya ok (arrow) fonksiyonları olarak yazılabilirler.
- Nesneler: Özellikleri (properties) ve yöntemleri (methods) olan veri yapılarıdır. `{}` işaretleri ile oluşturulabilirler veya hazır nesne türlerinden (`Object`, `Array`, `Date` vb.) yararlanılabilir.
- Olaylar (Events): Web sayfasında gerçekleşen eylemlerdir. Örneğin, bir butona tıklamak, fareyi hareket ettirmek, bir tuşa basmak gibi olaylar vardır. JavaScript ile bu olayları yakalayabilir (capture) ve buna göre işlemler yapabiliriz.

- ### Değişken Tanımlama

```javascript
var x = 10; // var ile değişken tanımlama
let y = 20; // let ile değişken tanımlama
const z = 30; // const ile değişken tanımlama
```
- ### Aritmetik Operatörler

```javascript
var a = 5;
var b = 3;
var c = a + b; // toplama
var d = a - b; // çıkarma
var e = a * b; // çarpma
var f = a / b; // bölme
var g = a % b; // mod alma
 ```

- ### Koşullu İfadeler

```javascript
var x = 10;
var y = 20;

if (x > y) {
  console.log("x y'den büyük");
} else if (x < y) {
  console.log("x y'den küçük");
} else {
  console.log("x ve y eşit");
}
```

- ### Array Oluşturma

```javascript
let chars = Array.of("A", "B", "C");

console.log(chars.length); // 3
console.log(chars); // ['A','B','C']
```
- ### Gelişmiş Operatörler

```javascript
function getScores() {
  return [70, 80, 90];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
```



   

var user={name: '',age:34} 
let user2={name: '',age:34}
const user3={name: '',age:34}

//var global scope da yer alır,değiştirilebilir. Fonksiyon dışında tanımlansa dahi fonksiyonun içine çağrılabilir.
//let ve const fonksiyon dışında tanımlanırsa, fonksiyon içinde çağrılamaz. let değişebilir, const değiştirilemez

// 1 == '1' true değer verir. ==sadece değeri karşılaştırır

//=== hem veri hem değeri karşılaştırır. 1==='1 false değer verir 

console.log(user==user2)

//let premiumUserText= premiumUser ? 'premium user' : 'premium user değil' //ternary operator

let obj1={key1:'value1'}
let objKey1=obj1.key1

let array1=['value1','value2',1]
let array1El1=array1[0]
console.log(array1El1)

let m1=[1,2,3]
let m2=[1,2,3]
let m3=[1,2,3]
let matrix=[m1,m2,m3]
// matrix[0][1]
let m1Uzunluk=m1.length

const a=Array(10).fill(0)

//array1.push() arrayin sonuna eleman ekler
//array1.unshift() arrayin başına eleman ekler

//array1.pop() arrayin sonundan eleman siler
//array1.shift() arrayin başından eleman siler

let k1=[1,2,3,1,2,3]
let i=0

while(i<k1.length){
    console.log(k1[i])
    i++
}

for (let i = 0; i < k1.length; i++) {
    console.log(k1[i]);
    
}

for(const eleman of k1){
    console.log(eleman)
}

k1.forEach((eleman)=>{
    console.log(eleman);
});

let sepet=[{ad:'',fiyat:0}]

if (sepet.length===0) {
    console.log('sepet boş')
}
else if (sepet.length===1) {
    console.log('satın al')
}
else{
    let toplamFiyat=0

    sepet.forEach((eleman)=>{
        toplamFiyat=toplamFiyat + eleman.fiyat
    });

    console.log(toplamFiyat)
}

//3 fizz, 5 buzz, 15 fizzBuzz

for(let i=0;i<=100;i++){
    if (i % 3===0 && i % 5===0) {
        console.log("fizzBuzz")
    }
    else if (i % 3==0) {
        console.log("fizz")
    }

    else if (i % 5==0) {
        console.log("buzz")
    }
    else{
        console.log(i)
    }
}

function setUser(username,age) {
    console.log(username,age)

    return username + ' --- ' + age
}

let response=setUser('nezir',25)

let car={model: 'punto',year:2018,brand:'fiat',color:'mavi',title: function (){
    return this.model + this.year + this.brand
}}
const car2=new Object()
const car3=Object.create()

car.km=30000
car[color]

car.fiyat=null
car.type={kisi:4,kasa:'sedan'}

if (car.fiyat) {
    console.log(car.fiyat) //fiyat null olduğu için koşul çalışmaz
    //eğer koşul false,null,undefined ise koşul çalışmaz
}

delete car.brand

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

let condition=4

switch (condition) {   //switch case değişken olduğu zaman daha çok kullanılır. 
    case 4:            //If else daha çok kompleks ifadelerin içerdiği koşullarda kullanılır.
        
        break;
    case 2:
        
        break;

    default:
        break;
}

let obje={
    boss:'Ali',
    sales:'Veli',
    area: 'Marmara'
}

const keys=Object.keys(obje) // []
const values=Object.values(obje) // []
let objeContent=Object.entries(obje) // [['boss','Ali']...] key ve value gösterir

for (let i = 0; i < objeContent.length; i++) {
    console.log(`iş tanımı ${objeContent[i][i]} ${objeContent[i][i]}`)
    
}

const object2=Object.assign(obje)

//object.freeze değişiklik yapılamaz,parametre değiştirilemez. object.seal metodunda dışarıdan parametre ekleyebiliriz.

class employees{
    constructor(name,surname,age){
        this.name=name
        this.surname=surname
        this.age=age
        this.firm='abc ltd şti'
    }
    set name (value){
        this.name=value
    }
    get name() {
        return this.name.toUpperCase()
    }
    fullName=function() {return `${this.name} ${this.surname}`}
}

employee1.name='yeni ad'
const employee1=new employees('ali','yılmaz',34)
employee1.fullName()

class subClass extends employees{
    constructor(area){
        super() //ana class üzerinden özellikleri almak için super fonksiyonu kullanırız
        this.area=area
    }
    title= () => `${this.name} ${this.surname} ${this.age} ${this.area}` 
}

//obje ile class farkı: objede hem anahtarı hem değeri girilir.Classlar ise başta verdiğimiz değişkenler ile obje oluşturulur.
//senkron işlerin sırayla çalıştığı birbirini beklediği durum. Asenkron ise sırayla gerçekleşir fakat işlerin birbirini beklemediği durum.
//javascript asenkron çalışır

async function yaz(){
    console.log('başla')
    await setTimeout(() => console.log('orta'),2000)
    console.log('bitir')
}

function printOrder(param){
    console.log(param)
}


function printAll(){
    printOrder("1", ()=>{
        printOrder("2",()=>{
            printOrder("3",()=>{ })
        })
    })
}

const printAll2=()=>{
    printOrder("gelen veriyi oku")  // kısa
        .then(()=>printOrder("veriyi update et")) // daha uzun sürüyor
        .then(()=>printOrder("yeni veriyi döndür")) // kısa
        .catch((err)=>console.log(err))
}

const satinAl= (musteri,urun)=>{
    bakiyeKontrol(musteri)  // geriye true false değer döndürüyor
        .then((uygunmu)=>{
            if (uygunmu) {
                stokKontrol(urun)
                    .then((stokUygunluk)=>{ //callback metodları
                        if (stokUygunluk) {  //buna iyi çalış!!!
                            bakiyeDus()
                                .then(()=>{
                                    stokDusur()
                                    basariMesaj()
                                })
                        }else{
                            return 'stok bitti'
                        }
                    })
            } else{
                return 'yetersiz bakiye'
            }
        })
        .catch((err)=>'hata' + err)
}

const yaz=(value)=>{
    return new Promise((resolve,reject)=>{
        if (value.length>=5) {
            setTimeout(()=>{
                console.log(value)
                resolve()
            },4000)
        }else{
            reject('koşul sağlanmadı yazı kısa' + value)
        }
    })
}

const hepsiniYazPromise1= ()=>{
    yaz('serkan')
        .then(()=>yaz('yetkin'))
        .then(()=>yaz('mert'))
        .then(()=>yaz('sabri'))
        .catch((e)=>console.log(e))

}

const allP=Promise.all([hepsiniYazPromise1,hepsiniYazPromise2])
const allSett=Promise.allSettled([hepsiniYazPromise1,hepsiniYazPromise2])

allP
    .then(()=>{ 
        //her promise ve resolve oldu
    })
    .catch((e)=>console.log(e))
    .finally(()=>{
        //en sonda işlemin sonucunu görmemizi sağlar
    })

allSett
    .then((res)=>{})

//promise geriye değer döndürüp başarılı veya başarısız olduğunu belirtmesi en önemli özelliğidir.
//promise callbackteki karışıklığı çözmek için kullanılır.

async function bekleH(){
    //asenkron çalışan promise ifadeleri senkron hale getirir
    let res1=await hepsiniYazPromise1()
    let res2=await hepsiniYazPromise2()
}

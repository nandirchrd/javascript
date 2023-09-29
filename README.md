# Glosarium

## Compiler

Program komputer yang menerjemahkan kode yang ditulis dalam satu bahasa pemrograman ke bahasa lain yang dimengerti oleh mesin.

## Debugging

Proses mengidentifikasi dan menghilangkan error pada aplikasi.

## Interpreter

Program untuk menerjemahkan setiap baris kode dari bahasa pemrograman menjadi bahasa yang dimengerti oleh mesin secara langsung. Tanpa melalui proses kompilasi.

## Library

Sekumpulan sumber daya, biasanya berupa kode atau program, yang memiliki fungsionalitas tertentu dan bisa digunakan pada program lain.

## Runtime

Lingkungan, platform, atau sumber daya yang menjalankan suatu kode/program.

## String Concatenation

Proses penggabungan dua String atau lebih menggunakan operator penjumlahan (+).

## String Interpolation

Proses mengganti placeholder di dalam String dengan nilai dari variabel tertentu.

# Apa itu JavaScript

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi lebih interaktif.

JavaScript termasuk ke dalam kategori scripting language. Scripting language menggunakan interpreter untuk menerjemahkan kode atau perintah yang kita tulis supaya dimengerti oleh mesin.

# Sejarah JavaScript

JavaScript dibuat pada tahun 1995 oleh Brendan Eich, programmer dari Netscape. Bahasa ini awalnya dinamai “Mocha” kemudian berubah menjadi “LiveScript”. Pada saat itu bahasa Java merupakan bahasa pemrograman yang paling populer. Untuk memanfaatkan kepopulerannya, nama LiveScript pun diubah menjadi “JavaScript”.

Setelah diadopsi di luar Netscape, JavaScript distandarisasi oleh European Computer Manufacturers Association (ECMA). Sejak saat itu JavaScript juga dikenal dengan ECMAScript.

# Fundamental
## Statement dan Expression
JavaScript membagi instruksi menjadi dua jenis, yaitu expression dan statement.
- Expression merupakan kode yang menghasilkan nilai.
- Statement menunjukkan aksi yang dilakukan.
## Komentar
Dua metode untuk memberikan komentar. 
- Untuk memberikan komentar pada satu baris saja, kita bisa gunakan //
- Untuk memberikan komentar pada banyak baris, kita bisa gunakan /* */
## Variabel
Variabel adalah wadah untuk menyimpan informasi atau nilai.

Ada tiga cara untuk mendeklarasikan sebuah variabel: var, let, const.

var adalah function scope, sedangkan let adalah block scope.

contoh:
```js
var x = 2;
if( 2 > 0 ){
    var x = 'changes';
}
(function(){
  var x = 'function scope';
})()
console.log(x)
// output: changes


let y = 2;
if(true){
    let y = 'changes';
}
console.log(y)
// output: 2;
```
## Tipe Data
Tipe data merupakan pengklasifikasian data berdasarkan jenisnya.

Ada dua jenis tipe data: Primitif dan Non-Primitif.

Ada tujuh tipe data primitif: 
- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol.

Ada dua tipe data non-primitif:
- Object
- Array

Tipe data primitif hanya dapat menyimpan satu nilai pada satu waktu. Tipe data non-primitif dapat menyimpan lebih dari satu nilai.

## Operator
### Assigment Operator
Operator assignment adalah operator untuk memasukkan suatu nilai ke dalam variabel.
- =
### Comparison Operator
Operator comparison adalah operator yang digunakan untuk membandingkan 2 nilai atau lebih menghasilkan nilai true atau false.
- ==
- !=
- ===
- !==
- \>
- \>=
- <
- <=
### Logical Operator
Logical Operator digunakan untuk melakukan operasi logika yang akan menghasilkan nilai true dan false.
- &&
- ||
- !

### Truthy & Falsy
- 0
- 0n
- “”
- null
- undefined
- NaN

## Struktur Data
- Object
![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202103300918544d12b9f7429f65353b67b10fc8ad9e08.png)

Object adalah tipe data kompleks untuk menyimpan banyak data dengan format key-value.
- Array

Array adalah tipe data untuk menampung banyak nilai secara tersusun.
## Spread Operator
- ...
```js
const arr = [1,2,3];
const obj = {name: "Nama", age: 20}

let spreadArray = ...arr;
let spreadObject = ...obj;
```
## Map
Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
```js
const cities = new Map([
    ['New York', "United Stated"],
    ["Jakarta", "Indonesia"]
])

cities.get('New York')
cities.set('Tokyo', 'Japan')

```

## Set
Set adalah objek yang berisikan nilai-nilai yang bersifat unik, tidak ada duplikasi, tidak berurutan, dan tidak diindeks artinya dalam objek tersebut hanya ada satu nilai saja.

```js
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

// output: Set(3) { 1, 4, 6 }
```

## WeakMap & WeakSet
WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

# Function
Function adalah kumpulan kode untuk mengerjakan suatu tugas tertentu yang bisa digunakan berkali-kali.

### Closure
Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya. Lexical scope adalah sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
Contoh: 
```js
const count = () => {
  let counter = 0;
    return () => {
      return ++counter;
  };
}
setTimeOut( () => count(), 1000);
```

## OOP
OOP adalah metode pemrograman yang berorientasi pada objek.

### 4 Pilar OOP
- Inheritance
- Encapsulation
- Abstraction
- Polymorphism

## Imperatif vs Deklaratif
```js
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// Imperatif (How To Solve)
let namesWithNomor = [];
for(let i = 0; i < names.length; i++) {
  namesWithNomor.push(`${i+1}. ${names[i]}`);
}

// Deklaratif (What To Solve)
const namesWithNomor = names.map((name, i) => `${i+1}. ${name}`);

``` 

## Functional Programming
### 4 Konsep Dalam Functional Programming
- Pure Function
- Immutability
- Recursive
- High-Order Function.

### Pure Function
Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.
```js
// Pure Function
function hitungLuasLingkaran(radius){
  return 3.14 * (radius * radius);
}

// Impure Function
let PI = 3.14;
function hitungLuasLingkaran(radius){
  return PI * (radius * radius);
}
```
- Mengembalikan nilai yang sama bila parameter sama.
- Bergantung pada argumen yang diberikan.
- Tidak menimbulkan efek samping.

Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.

### Immutability
Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.
```js
const user = {name: 'Nama'};

// Immutable
const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}
// Mutable
const createUserWithNewLastName = (newLastName, user) => {
    user.lastName = newLastName;
}
```

### Rekursif
Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

```js
const countDown = start => {
  console.log(start);
  if(start > 0) countDown(start-1);
};

countDown(10);
```

### Higher-Order Function
Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

```js
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
      const item = arr[index];
      if(!item) return newArray;
      return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}!` );

```

## NODE JS
Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser.

Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.

**Asynchronous & Event-driven**

Semua API dari Node.js bersifat asynchronous, artinya tidak memblokir proses lain sembari menunggu satu proses selesai. Server Node.js akan melanjutkan ke pemanggilan API berikutnya lalu memanfaatkan mekanisme event notification untuk mendapatkan respon dari panggilan API sebelumnya.

**Single Threaded but Highly Scalable**

Node.js menggunakan model single thread dengan event looping. Mekanisme ini membantu server untuk merespon secara asynchronous dan menjadikan server lebih scalable dibandingkan server tradisional yang menggunakan banyak thread untuk menangani permintaan.

## Tipe Error Di Javascript
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- InternalError
- URIError
- EvalError

## Testing
Sebuah proses pengujian perangkat lunak dapat dilakukan secara:

- Manual

Proses pengujian secara manual oleh seorang yang ditunjuk sebagai test, atau sebagian pengguna yang memang mendapatkan akses untuk pengujian pre-release. Proses ini biasanya berkaitan dengan usability, accessibility dari sebuah aplikasi.

- Otomatis

Proses pengujian secara otomatis dilakukan oleh komputer dengan menuliskan script khusus, biasanya dilakukan oleh software engineer langsung ataupun oleh seorang QA Engineer. Proses ini biasanya berkaitan dengan fungsionalitas dari sebuah aplikasi.

Jenis-jenis pengujian dalam pengembangan perangkat lunak secara umum dapat dibagi menjadi 4 jenis pengujian, yaitu:

- Static test

Memastikan tidak adanya typo (naming convention yang standar) dan memastikan tidak ada error types.

- Unit test

Dilakukan untuk memastikan bahwa setiap unit kode yang kita tulis sudah bisa bekerja sesuai harapan. Unit sendiri berarti komponen terkecil yang dapat diuji secara terisolasi dalam perangkat lunak yang kita buat, dapat berupa fungsi bahkan kelas jika kita menggunakan paradigma OOP. Proses ini juga dapat diautomasikan.

- Integration test

Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya. Proses pengujian ini dapat dilakukan secara otomatis dengan menuliskan script test.

- End-to-End test

Proses pengujian sebuah aplikasi untuk menguji flow dari awal hingga akhir, layaknya seorang user saat menggunakan aplikasi. Memastikan bahwasanya aplikasi berfungsi selayaknya. Biasanya proses ini dapat dilakukan secara otomatis maupun manual oleh tester.
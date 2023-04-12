// Membuat Variable canva dan tahun
const tanggal = new Date();
let tahun = tanggal.getFullYear();
//Memasukkan variable tanggal ke dalam objek document dengan id canva
document.getElementById("canva").innerHTML = tanggal;
document.getElementById("tahun").innerHTML = tahun;
//Math Pow
//Variabel Integer
let angka = 1.6;
let pembulatan = Math.round(angka);
//   Menampilkan angka di dokumen denga id math
document.getElementById("math").innerHTML = angka + " Dibulatkan " + pembulatan;
// Membuat variabel konstanta
const PI = Math.PI;
document.getElementById("pi").innerHTML = PI;
const teks = "Hello World";
document.getElementById("string").innerHTML = teks;
//Menampilkan teks di dokument dengan id string terus kita kecilkan hurufnya
document.getElementById("string").innerHTML = teks.toLowerCase();
//Membuat array variabel JS
let data = ["Sambo", "Mario", "Tedy"];
//Menampilkan data array di dokumen dengan id nama
document.getElementById("nama").innerHTML = data + " Panggil satu nama " + data[1];
//Membuat array multidimensi variabel JS
let data_multi = [
  ["Sambo", "50 tahun"],
  ["Mario", "25 tahun"],
  ["Tedy", "55 tahun"],
];
document.getElementById("multiple").innerHTML = "Nama = " + data_multi[1][0] + ", Umur = " + data_multi[1][1];
//Membuat 2 variabel int
let angka1 = 34;
let angka2 = 76;
let hasil = angka1*angka2;
//Menampilkan hasil operator javascript
document.getElementById("calculator").innerHTML = "Jumlah " + angka1 + " + " + angka2 + " = " + hasil;
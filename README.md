# Javascript
Tipe data javascript yang dapat menyimpan struktur data yang lebih kompleks. Beberapa jenis struktur data yang akan dipelajari:
- Object
- Array 
- Map 
- Set

## Object
Tipe data yang sangat berguna dalam pengembangan aplikasi dengan JS. Object mampu:
-  menyimpan nilai dari beragam tipe data 
- membentuk data yang lebih kompleks

Object berisi pasangan _key_ dan _value_ yang juga dikenal dengan _property_

1. Key 
Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai.

2. Value 
Value berisi nilai dengan tipe data apa pun termasuk objek lain

** Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan _Value_ nya. 
** Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusu seperti spasi

![Esample of key and value with 2 word](image-1.png)

"Hair Color": "Blond"
"Hair Color" = Key 
"Blond" = Value

** Tanda koma pada properti terakhir bersifat opsional. Namun, jika tanda koma tersebut ditulis akan lebih memudahkan ketika ingin memindah, mengubah, atau menghapus propert

** Satu _object_ dapat memiliki beberapa pasang _key-value_ yang dipisahkan dengan tanda koma(,).

** selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracker atau tanda kurung siku

** kita akan memodifikasi sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).

## Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?

- Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. 
- Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. 
- Berbeda jika kita menginisialisasi ulang variabel dari object.

# Array
- Merupakan tipe data yang dapat menegelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. ContohL: 
![Array](image-4.png)

- Perbedaan array dengan object adalah data pada array disusun sevara berurutan dan diakses menggunakan index. 
- Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang didalamnya berisi angka yang merupakan posisi nilai yang ingin diakses

![array sesuai urutan](image-5.png)






///////////////////////js untuk header jika layar kecil ///////////////

  // Mendapatkan elemen dengan class 'menu-toggle input' untuk toggle menu pada layar kecil
const menuToggle = document.querySelector('.menu-toggle input');
 // Mendapatkan elemen 'nav ul' untuk mengakses elemen daftar menu

const nav = document.querySelector('nav ul');
// Menambahkan event listener pada tombol menu untuk menampilkan atau menyembunyikan daftar menu saat tombol tersebut di-klik

  menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
  });
  // Inisialisasi variabel slideIndex sebagai penunjuk slide yang aktif

let slideIndex = 0;
showSlides();// Panggil fungsi showSlides untuk memulai tampilan slide gambar


// /////////////// js untuk gambar slidsow////

// Fungsi untuk menampilkan slide gambar secara otomatis
function showSlides() {
  let i;

    // Mendapatkan semua elemen dengan class 'bungkus-gambar' yang merupakan slide gambar
  let slides = document.getElementsByClassName("bungkus-gambar");

    // Mendapatkan semua elemen dengan class 'dot' yang merupakan indikator slide
  let dots = document.getElementsByClassName("dot");

    // Menyembunyikan semua slide gambar dengan mengatur style display menjadi "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

    // Meningkatkan nilai slideIndex untuk menunjukkan slide berikutnya
  slideIndex++;

    // Jika slideIndex melebihi jumlah slide yang ada, atur slideIndex menjadi 1 (kembali ke slide pertama)
  if (slideIndex > slides.length) {slideIndex = 1}  

    // Menghapus class 'active' dari semua indikator slide
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

    // Menampilkan slide gambar yang sesuai dengan slideIndex dengan mengatur style display menjadi "block"
  slides[slideIndex-1].style.display = "block"; 

  // Menambahkan class 'active' pada indikator slide yang sesuai dengan slideIndex
  dots[slideIndex-1].className += " active";

  // Mengatur timeout untuk memanggil fungsi showSlides setiap 2 detik (mengganti gambar setiap 2 detik)
  setTimeout(showSlides, 2000); 
}

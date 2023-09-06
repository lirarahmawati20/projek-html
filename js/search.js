// Mendapatkan elemen dengan id 'output' yang akan digunakan untuk menampilkan hasil pencarian film
const elemenOutput = document.querySelector('#output');

// Ketika form dengan nama 'dapatkanFilm' di-submit, fungsi berikut akan dijalankan
  document.dapatkanFilm.onsubmit = function (event) {
  event.preventDefault();
  const form = this;// Mencegah pengiriman form secara langsung dengan menghentikan default behavio
  // Melakukan permintaan fetch ke endpoint API TMDb untuk mencari film berdasarkan query yang diinputkan oleh pengguna
    fetch('https://api.themoviedb.org/3/search/movie?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&query=' + document.dapatkanFilm.film.value)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        const ambil = data.results;

      // Iterasi setiap film dari hasil pencarian dan membuat elemen HTML untuk menampilkan informasi film
      ambil.forEach(d => {

      // Membuat elemen 'a' untuk menampilkan hasil pencarian film sebagai link yang mengarah ke halaman detail.html
        const elemenFilm = document.createElement('a');
        elemenFilm.className = 'search-result';
        elemenFilm.href = '/html/detail.html';

        const elemenPoster = document.createElement('img');
        elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
        elemenFilm.appendChild(elemenPoster);
        elemenPoster.addEventListener('click', function () {
          localStorage.setItem('id_movie', d.id)
        })

        // Membuat elemen 'h5' untuk menampilkan judul film
        const elemenJudul = document.createElement('h5');
        elemenJudul.textContent = d.original_title;
        elemenFilm.appendChild(elemenJudul);

         // Menambahkan event listener pada judul film untuk menetapkan ID film ke dalam penyimpanan lokal ketika di-klik
        elemenJudul.addEventListener('click', function () {
        localStorage.setItem('id_movie', d.id)
        })

        // Membuat elemen 'p' untuk menampilkan tanggal rilis film
        const elemenRilis = document.createElement('p');
        elemenRilis.textContent = d.release_date;
        elemenFilm.appendChild(elemenRilis);

         // Menambahkan event listener pada tanggal rilis film untuk menetapkan ID film ke dalam penyimpanan lokal ketika di-klik
        elemenRilis.addEventListener('click', function () {
          localStorage.setItem('id_movie', d.id)
        })

        // Menambahkan elemen film ke dalam elemen output untuk ditampilkan dalam halaman
       elemenOutput.appendChild(elemenFilm);
      });
    });
}
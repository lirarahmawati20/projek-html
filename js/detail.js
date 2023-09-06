// Mendapatkan elemen dengan ID "judulDetail" dan "detailFilm" dari halaman HTML
const detailJudul = document.querySelector('#judulDetail');
const detailFilm = document.querySelector('#detailFilm');
const trailerFilm = document.querySelector('#trailer');
// Mendapatkan data id_movie dari Local Storage

let storage = localStorage.id_movie;

// Mengambil data detail film dari API menggunakan fetch

//ambil data detail
fetch('https://api.themoviedb.org/3/movie/' +storage+'?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
            // Menampilkan judul film ke dalam elemen dengan ID "judulDetail"
            //set judul
            detailJudul.textContent=data.original_title;

            
            //  Membuat elemen gambar poster film
            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') +data.poster_path;
            detailFilm.appendChild(elemenPoster); //set gambar
        // Membuat elemen paragraf untuk menampilkan deskripsi film
            const elemenP = document.createElement('p');
            elemenP.textContent=data.overview;
            detailFilm.appendChild(elemenP) //set deskripsi film
    });

// Mengambil data trailer film dari API menggunakan fetch
fetch('https://api.themoviedb.org/3/movie/' + storage + '/videos?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const trailer = document.querySelector('div');
        trailer.className = 'we';

        // Memeriksa apakah ada data trailer (results) yang diterima dari API
        if (data.results.length != 0) {
            // Jika ada, buat elemen iframe untuk menampilkan trailer dari YouTube
            const elemenTrailer = document.createElement('iframe');
            elemenTrailer.src = 'https://www.youtube.com/embed/' + data.results[0].key; // Mendapatkan link trailer dari properti "key" di hasil data
            trailer.appendChild(elemenTrailer); // Menampilkan trailer film
        } else {
            // Jika tidak ada, buat elemen H3 untuk menampilkan pesan "Detail Not Found"
            const elemenTrailer = document.createElement('H3');
            elemenTrailer.textContent = "Detail Not Found";
            trailer.appendChild(elemenTrailer);
        }

        // Menampilkan elemen trailer ke dalam elemen dengan ID "trailer"
        trailerFilm.appendChild(trailer);
    });


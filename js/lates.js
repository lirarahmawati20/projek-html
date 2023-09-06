// Inisialisasi variabel untuk melacak halaman yang sedang ditampilkan

let pageNowPlay = 1;
// Fungsi untuk menyembunyikan tombol berikutnya jika mencapai halaman terakhir

function hideButtonPage(page){
    if(pageNowPlay == page){
      document.getElementById("next-btn1").className ="classHidden";
    }

}
// Mengambil elemen dengan ID 'latesMovie'

  const listLates = document.querySelector('#latesMovie');
  // Permintaan fetch ke API TMDb untuk mendapatkan daftar film dengan peringkat tertinggi

  fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
         pageNowPlay = 1;
        ambil.forEach(d => {
          
           
            // Membuat elemen div untuk menampilkan setiap film
            const elemenDivColum = document.createElement('div');
            elemenDivColum.className ='main3';

            // Membuat elemen div untuk konten film
            const elemenDivContent = document.createElement('div');
            elemenDivContent.className ='fakeimg1';
            elemenDivColum.appendChild(elemenDivContent);

            // Membuat elemen img untuk menampilkan poster film
            const elemenImg = document.createElement('img');
            elemenImg.src =('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenDivContent.appendChild(elemenImg);

            // Membuat elemen p untuk menampilkan judul film
            const elemenP1=document.createElement('p');
            elemenP1.textContent=d.original_title;
            elemenDivContent.appendChild(elemenP1);

            // Membuat elemen p untuk menampilkan tanggal rilis film
            const elemenP2=document.createElement('p');
            elemenP2.textContent=d.release_date;
            elemenDivContent.appendChild(elemenP2);

            // Membuat elemen div untuk menampilkan tombol "Detail"
             const elemenDiv = document.createElement('div')
            elemenDiv.className ='button-1';
            elemenDivContent.appendChild(elemenDiv);

            // Membuat elemen a untuk menuju halaman detail
            const elementA = document.createElement('a')
            elementA.href = 'detail.html';
            elemenDiv.appendChild(elementA)

            // Membuat elemen button untuk tombol "Detail" film
            const elemenButton=document.createElement('button');
            elemenButton.textContent="Detail";
            // Menambahkan event listener untuk menyimpan ID film ke localStorage saat tombol "Detail" di-klik

            elemenButton.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })
            elementA.appendChild(elemenButton);

            // Menambahkan film ke daftar film
            listLates.appendChild(elemenDivColum);
        });
      
    });
// Menambahkan event listener untuk tombol "next-btn1" (tombol halaman berikutnya)
document.getElementById("next-btn1").onclick =function() { 
        // Menambahkan nilai 1 ke halaman saat ini

  pageNowPlay = pageNowPlay+1;
      // Permintaan fetch ke API TMDb untuk halaman berikutnya dengan nomor halaman yang ditingkatkan

   fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page='+pageNowPlay+'')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
        ambil.forEach(d => {
          
           
            //tag div colum          
            const elemenDivColum = document.createElement('div');
            elemenDivColum.className ='main3';

            //tag div content
            const elemenDivContent = document.createElement('div');
            elemenDivContent.className ='fakeimg1';
            elemenDivColum.appendChild(elemenDivContent);

            //tag image
            const elemenImg = document.createElement('img');
            elemenImg.src =('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenDivContent.appendChild(elemenImg);

            //tag p1
            const elemenP1=document.createElement('p');
            elemenP1.textContent=d.original_title;
            elemenDivContent.appendChild(elemenP1);

            //tag p2
            const elemenP2=document.createElement('p');
            elemenP2.textContent=d.release_date;
            elemenDivContent.appendChild(elemenP2);

            const elemenDiv = document.createElement('div')
            elemenDiv.className ='button-1';
            elemenDivContent.appendChild(elemenDiv);

            //create tag a href detail 
            const elementA = document.createElement('a')
            elementA.href = 'detail.html';
            elemenDiv.appendChild(elementA)

             //tag button
            const elemenButton=document.createElement('button');
            elemenButton.textContent="Detail";
            //set localStorage id_movie ketika di klik
            elemenButton.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })
            elementA.appendChild(elemenButton);

            //add list movie
            listLates.appendChild(elemenDivColum);
        });
         // Sembunyikan tombol "next-btn1" jika mencapai halaman terakhir

        hideButtonPage(data.total_pages);
    });
}; 

// Mengambil elemen dengan ID 'personPopuler-1'

 const personPopular1 = document.querySelector('#personPopuler-1');
 // Permintaan fetch ke API TMDb untuk mendapatkan daftar aktor terkenal
  fetch('https://api.themoviedb.org/3/person/popular?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
         pageNowPlay = 1;
// Iterasi setiap aktor dari hasil permintaan API dan membuat elemen HTML untuk menampilkan informasi aktor

        ambil.forEach(d => {
          
            //tag div colum          
            const elemenDivColum = document.createElement('div');

            //tag div content
            const elemenDivContent = document.createElement('div');
            elemenDivContent.className ='fakeimg';
            elemenDivColum.appendChild(elemenDivContent);

            //tag image
            const elemenImg = document.createElement('img');
            elemenImg.src =('https://image.tmdb.org/t/p/w154') + d.profile_path;
            elemenDivContent.appendChild(elemenImg);

          

            const elemenDiv = document.createElement('div')
            elemenDiv.className ='fakeimg-1';
            elemenDivColum.appendChild(elemenDiv);

            const elemenName =document.createElement('p')
            elemenName.textContent=d.name
            elemenDiv.appendChild(elemenName)

            const elemenDiv1 = document.createElement('div')
            elemenDiv1.className='tanggal'
            elemenDivColum.appendChild(elemenDiv1)

             const elemenPopularity =document.createElement('p')
            elemenPopularity.textContent=d.popularity
            elemenDiv1.appendChild(elemenPopularity)

          
            personPopular1.appendChild(elemenDivColum);
        });
      
    });
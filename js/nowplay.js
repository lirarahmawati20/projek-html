// Inisialisasi variabel pageNowPlay dengan nilai awal 1 untuk melacak halaman yang sedang ditampilkan saat ini


let pageNowPlay = 1;
// Fungsi untuk menyembunyikan tombol berikutnya jika halaman terakhir sudah ditampilkan

function hideButtonPage(page){
    if(pageNowPlay == page){
      document.getElementById("next-btn").className ="classHidden";
    }

} 
// Mendapatkan elemen dengan id 'nowplayingMovie' untuk menampilkan daftar film yang sedang diputar (now playing)

  const listNowPlaying = document.querySelector('#nowplayingMovie');
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
         pageNowPlay = 1;
                 // Iterasi setiap film dari hasil permintaan API dan membuat elemen HTML untuk menampilkan informasi film

        ambil.forEach(d => {
          
           
            // Membuat elemen div untuk kolom film
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

            const elementA = document.createElement('a')
            elementA.href = 'detail.html';
            elemenDiv.appendChild(elementA)

             //tag button
            const elemenButton=document.createElement('button');
            elemenButton.textContent="Detail";
            elemenButton.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })
            elementA.appendChild(elemenButton);

            // Menambahkan elemen kolom film ke daftar film yang sedang diputar (now playing)
            listNowPlaying.appendChild(elemenDivColum);
        });
      
    });
    // Ketika tombol "next-btn" di-klik, kode akan melakukan permintaan API ke halaman berikutnya dengan nomor pageNowPlay yang ditingkatkan

document.getElementById("next-btn").onclick =function() { 
  pageNowPlay = pageNowPlay+1;
   fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page='+pageNowPlay+'')
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
            listNowPlaying.appendChild(elemenDivColum);
        });
        hideButtonPage(data.total_pages);
    });
}; 

// Mendapatkan elemen dengan id 'personPopuler' untuk menampilkan daftar aktor terkenal

 const personPopular = document.querySelector('#personPopuler');
  // Melakukan permintaan fetch ke endpoint API TMDb untuk mendapatkan daftar aktor terkenal

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

          
            personPopular.appendChild(elemenDivColum);
        });
      
    });
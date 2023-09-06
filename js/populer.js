
// js untuk filem yang populer saat ini 

// Inisialisasi variabel pageNowPlay dengan nilai awal 1 untuk melacak halaman yang sedang ditampilkan saat ini
let pagePopuler = 1;
// Fungsi untuk menyembunyikan tombol berikutnya jika halaman terakhir sudah ditampilkan

function hideButtonPage(page){
    if(pagePopuler == page){
      document.getElementById("next-popular").className ="classHidden";
    }

} 
// Mendapatkan elemen dengan id 'popular' untuk menampilkan daftar film yang akan datang (popular)

  const listPopular = document.querySelector('#popular');
  // Melakukan permintaan fetch ke endpoint API TMDb untuk mendapatkan daftar film yang akan datang (upcoming)

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
         pageNowPlay = 1;
                 // Iterasi setiap aktor dari hasil permintaan API dan membuat elemen HTML untuk menampilkan informasi aktor

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

            //add list movie
           listPopular.appendChild(elemenDivColum);
        });
      
    });
    // Ketika tombol "next-popular" di-klik, kode akan melakukan permintaan API ke halaman berikutnya dengan nomor pageNowPlay yang ditingkatkan
document.getElementById("next-popular").onclick =function() { 
pagePopuler = pagePopuler+1;
   fetch('https://api.themoviedb.org/3/movie/popular?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page='+pageNowPlay+'')
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
            listPopular.appendChild(elemenDivColum);
        });
              hideButtonPage(data.total_pages);
    });
}; 
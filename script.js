// Mendapatkan elemen dengan id indxPlayNow'' untuk menampilkan daftar film yang akan datang (indxPlayNow')
const listPlayNow = document.querySelector('#indxPlayNow');
const tailer = document.querySelector('#indxTailer');
// Mengambil data film yang sedang tayang dari API The Movie Database (TMDb)
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
         // Memanggil fungsi swapTailel untuk menampilkan trailer film pertama
        swapTailel(ambil[0].id)
        // Mengiterasi setiap film yang diperoleh dari API
        ambil.forEach(d => {
          
            // Memanggil fungsi swapTailel untuk menampilkan trailer film pertama
        swapTailel(ambil[0].id);
             // Membuat elemen li untuk setiap film dan menambahkan event listener untuk menampilkan trailer saat film di klik
            const elemenLi = document.createElement('li');
            elemenLi.addEventListener('click', function () {
               swapTailel(d.id);
            })
// Membuat elemen div dengan class 'bg-1' untuk menampilkan gambar poster film
        
            const elemenDiv = document.createElement('div');
            elemenDiv.className='bg-1';
            elemenLi.appendChild(elemenDiv)

            //tag image
            const elemenImg = document.createElement('img');
            elemenImg.src =('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenDiv.appendChild(elemenImg);


            //add list movie
            listPlayNow.appendChild(elemenLi);
        });
    });
// Fungsi untuk mengambil data trailer film berdasarkan ID film
    function swapTailel(id){
         //ambil data tailer
    fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US')
        .then(function (response) {
            return response.json();
        }).then(function(data){
            
            //cek data results 
            if (data.results.length != 0){

                //ubah isi iframe tailer
                document.querySelector('#iframetailer').src='https://www.youtube.com/embed/' + data.results[0].key;

            }else{
                //ketika tailer tidak ada
                alert("Detail Not Found");
                
            }
        });

    }
    const listMovie = document.querySelector('#allMovie');
  fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=c9ee16d63e6fc68fe4b8f2e4b7aedf5a&language=en-US&page=1')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const ambil = data.results;
        ambil.forEach(d => {
          
            const elementA = document.createElement('a')
            elementA.href = '/html/detail.html';
            //tag div colum          
            const elemenDivColum = document.createElement('div');
            elemenDivColum.className ='column';
            elemenDivColum.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })
            elementA.appendChild(elemenDivColum)

            //tag div content
            const elemenDivContent = document.createElement('div');
            elemenDivContent.className ='content';
            elemenDivColum.appendChild(elemenDivContent);

            //tag image
            const elemenImg = document.createElement('img');
            elemenImg.src =('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenDivContent.appendChild(elemenImg);

            //tag H3
            const elemenH3=document.createElement('h3');
            elemenH3.textContent=d.original_title;
            elemenDivContent.appendChild(elemenH3);

            // //tag p
            // const elemenP = document.createElement('p');
            // elemenP.textContent=d.overview;
            // elemenDivContent.appendChild(elemenP);

            // Menambahkan elemen a (film) ke dalam daftar film yang trending
            listMovie.appendChild(elementA);
        });
    });


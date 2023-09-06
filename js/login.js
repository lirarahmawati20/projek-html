// bagian pertama dari kode, yang mencari elemen dengan ID "login-form" dalam dokumen HTML dan  // untuk menambahkan event listener pada elemen "login-form

    document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // untuk mendapatkan nilai yang diisi oleh pengguna dalam input dengan ID "password" dan id username .
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

//  kondisi untuk memeriksa apakah kedua input "username" dan "password" tidak kosong (berisi nilai)
    if (username !== "" && password !== "") {
 // kondisi jika poin  terpenuhi (kedua input diisi)
        window.location.href = "/index.html";
    } else {
        // jika kondisi tidak terpenuhi
        alert("Invalid credentials. Please try again.");
    }
});

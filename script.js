// api random quotes
const url = 'https://api.quotable.io/random';

function handleQuotes(){
    // set default loading true
    // setiap user klik get quotes, maka akan muncul loading dulu sebelum quotes ditampilkan
    let loading = true;
    
    // jika status loading == true maka tampilkan tulisan loading
    if(loading) {
        document.getElementById("quotes").innerHTML = "Loading...";
        document.getElementById("author").innerHTML = "~ ... ~";
    }


    // ambil data dari api menggunakan method fetch
    // lalu gunakan fungsi promise then untuk mengatasi proses async saat memanggil api
    fetch(url)
    // hasil fetch dari url diubah menjadi json untuk di olah distep berikutnya
    .then(response => response.json())
    .then(data => {
        // distep ini kita akan implementasi data yang sudah berhasil diambil tadi kedalam html yang sudah disiapkan
        document.getElementById("quotes").innerHTML = data.content;
        document.getElementById("author").innerHTML = "~ "+data.author+" ~";
    })
    .catch(
        // jika terjadi error saat fetch data, maka akan muncul notif error
        () => {alert("Server Error")}
    )
    .finally(
        // saat proses fetch berhasil/selesai, maka ganti value dari variabel loading menjadi false
        // sehingga tulisan loading akan hilang dan berganti menjadi quote
        loading = false
    )
}
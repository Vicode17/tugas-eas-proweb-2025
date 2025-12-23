let jumlahPeserta = 0;

const toggleBtn = document.getElementById("toggleDetail");
const detailEvent = document.getElementById("detailEvent");

detailEvent.style.display = "none";

toggleBtn.addEventListener("click", function () {
    if (detailEvent.style.display === "none") {
        detailEvent.style.display = "block";
        toggleBtn.textContent = "Tutup Deskripsi ";
    } else {
        detailEvent.style.display = "none";
        toggleBtn.textContent = "Tampilkan Deskripsi";
    }
});

document.getElementById("formDaftar").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const jenis = document.getElementById("jenisPeserta").value;

    if (nama === "" || email === "" || jenis === "") {
        alert("Semua data wajib diisi!");
    } else {
        alert("Pendaftaran berhasil");
        jumlahPeserta++;
        document.getElementById("jumlahPeserta").textContent = jumlahPeserta;
        this.reset();
    }
});

// Fungsi untuk berpindah dari halaman awal ke halaman utama
function enterSite() {
    document.getElementById("introScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
}

// Fungsi untuk menampilkan foto yang jatuh (kejutan)
function showSurprise() {
    const heartContainer = document.getElementById("heartContainer");

    // Array berisi path atau URL foto-foto yang akan jatuh
    const photos = [
        "foto/foto1.png",
        "foto/image.png",
        "foto/image2.png",
        "foto/image3.png",
        "foto/image4.png",
        "foto/image5.png",
        "foto/image6.png",
        "foto/image7.png",
        "foto/image8.png",
        "foto/image9.png",
    ];

    for (let i = 0; i < 30; i++) { // Membuat 30 elemen jatuh
        const element = document.createElement("div");
        element.classList.add("falling");

        // Memilih foto secara acak dari array
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        element.style.backgroundImage = `url('${randomPhoto}')`;

        // Posisi horizontal acak
        element.style.left = Math.random() * 100 + "vw";

        // Menambahkan jeda animasi acak untuk efek jatuh yang tidak seragam
        element.style.animationDelay = Math.random() * 2 + "s";

        // Tambahkan elemen ke kontainer
        heartContainer.appendChild(element);

        // Hapus elemen setelah animasi selesai
        element.addEventListener("animationend", () => {
            element.remove();
        });
    }
}

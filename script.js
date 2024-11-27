// Menunggu logo selesai dianimasikan sebelum menampilkan konten utama
document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.getElementById("logo-container");
  const mainContainer = document.querySelector(".container");

  // Menjalankan transisi setelah 5 detik (durasi animasi logo)
  setTimeout(() => {
    logoContainer.classList.add("hidden"); // Tambahkan kelas untuk menyembunyikan logo
    mainContainer.style.display = "block"; // Tampilkan konten utama
  }, 5000); // 5000 ms = 5 detik
});

// Fungsi untuk memuat folder
function openFolder(start, end) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Bersihkan konten sebelumnya

  for (let i = start; i <= end; i++) {
    const frame = document.createElement("div");
    frame.className = "frame";

    // Tambahkan foto
    const img = document.createElement("img");
    img.src = `images/${i}.jpg`; // Ganti dengan file gambar asli
    img.alt = `Foto ${i}`;
    frame.appendChild(img);

    // Tambahkan nama
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = `Nama ${i}`; // Anda bisa mengganti ini dengan nama sebenarnya
    frame.appendChild(name);

    contentDiv.appendChild(frame);
  }
}

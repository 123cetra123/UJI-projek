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
  
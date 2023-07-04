const areaProject = document.querySelector(".areaProject");

// document.addEventListener("DOMContentLoaded", instantiate);
function RandomColor() {
  const colors = ["#ffc107", "#dc3545", "#17a2b8", "#28a745"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

let randomClr = RandomColor();
// function instantiate() {
//   dataJsonProduk();
//   setInterval(dataJsonProduk, 500); // Refresh setiap 5 detik (5000 milidetik)
// }

// function dataJsonProduk() {

// Fetch data dari file JSON
fetch("./src/database/produk.json")
  .then((response) => response.json())
  .then((data) => {
    // Kosongkan kontainer sebelum menambahkan elemen baru
    areaProject.innerHTML = "";

    // Membuat elemen HTML dari data JSON
    data.forEach((item) => {
      // Membuat elemen kotakItem
      const kotakItem = document.createElement("div");
      kotakItem.classList.add("kotakItem");

      // Membuat elemen img
      const img = document.createElement("div");
      img.classList.add("img");

      // Membuat elemen <a> untuk gambar
      const imgLink = document.createElement("a");
      imgLink.href = `./ProjectPage.html?judul=${encodeURIComponent(
        item.judul
      )}`;
      img.appendChild(imgLink);

      // Membuat elemen <img>
      const imgElement = document.createElement("img");
      if (localStorage.getItem("mode")) {
        imgElement.src = `./src/img/Produk/${item.urlGambar}_light.png`;
      } else {
        imgElement.src = `./src/img/Produk/${item.urlGambar}_dark.png`;
      }
      imgLink.appendChild(imgElement);

      // Membuat elemen <a> untuk label
      const labelLink = document.createElement("a");
      labelLink.href = `./ProjectPage.html?judul=${encodeURIComponent(
        item.judul
      )}`;
      labelLink.classList.add("label");
      labelLink.innerText = "Free";
      labelLink.style = `--color: ${randomClr}`;
      img.appendChild(labelLink);

      // Membuat elemen namaProject
      const namaProject = document.createElement("div");
      namaProject.classList.add("namaProject");

      // Membuat elemen <a> untuk judul
      const judulLink = document.createElement("a");
      judulLink.href = `./ProjectPage.html?judul=${encodeURIComponent(
        item.judul
      )}`;
      namaProject.appendChild(judulLink);

      // Membuat elemen <p> untuk judul
      const judulElement = document.createElement("p");
      judulElement.innerText = item.judul;
      judulLink.appendChild(judulElement);

      // Membuat elemen deskripsi
      // const deskripsi = document.createElement("p");
      // deskripsi.classList.add("deskripsi");
      // deskripsi.innerText = item.deskripsi;
      const deskripsi = document.createElement("p");
      deskripsi.classList.add("deskripsi");
      const temporaryElement = document.createElement("div");
      temporaryElement.innerHTML = item.deskripsi;
      deskripsi.textContent = temporaryElement.textContent.trim();
      
      // Menambahkan semua elemen ke dalam kotakItem
      kotakItem.appendChild(img);
      kotakItem.appendChild(namaProject);
      kotakItem.appendChild(deskripsi);

      // Menambahkan kotakItem ke dalam kontainer
      areaProject.appendChild(kotakItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// }
